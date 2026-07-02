import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function Hero3D() {
  const mountRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = mount.clientWidth;
    let height = mount.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0c, 0.045);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.physicallyCorrectLights = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const envScene = new THREE.Scene();
    const panelGeo = new THREE.PlaneGeometry(8, 8);
    const addPanel = (color, position, rotation, intensity = 1) => {
      const mat = new THREE.MeshBasicMaterial({ color, toneMapped: false });
      mat.color.multiplyScalar(intensity);
      const panel = new THREE.Mesh(panelGeo, mat);
      panel.position.set(...position);
      panel.rotation.set(...rotation);
      envScene.add(panel);
    };
    addPanel(0xfff2d9, [0, 0, -6], [0, 0, 0], 2.2);
    addPanel(0xff8fae, [-6, 0, 0], [0, Math.PI / 2, 0], 1.0);
    addPanel(0x7fe8d6, [6, 0, 0], [0, -Math.PI / 2, 0], 1.2);
    addPanel(0x1a1a1f, [0, -6, 0], [-Math.PI / 2, 0, 0], 0.15);
    addPanel(0xb79bf5, [0, 6, 0], [Math.PI / 2, 0, 0], 0.35);

    const envRT = pmremGenerator.fromScene(envScene, 0.04);
    scene.environment = envRT.texture;
    pmremGenerator.dispose();

    const key = new THREE.DirectionalLight(0xfbbf60, 3.0);
    key.position.set(4, 5, 3);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 20;
    key.shadow.camera.left = -5;
    key.shadow.camera.right = 5;
    key.shadow.camera.top = 5;
    key.shadow.camera.bottom = -5;
    key.shadow.radius = 4;
    key.shadow.bias = -0.0015;
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xff6b8a, 0.9);
    fill.position.set(-5, -1, 2);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0x2fd9c4, 1.4);
    rim.position.set(0, 3, -5);
    scene.add(rim);

    const ambient = new THREE.AmbientLight(0x0a0a0c, 0.35);
    scene.add(ambient);

    function createNoiseNormalMap(size = 256) {
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = size;
      const ctx = canvas.getContext("2d");
      const imgData = ctx.createImageData(size, size);
      for (let i = 0; i < size * size; i++) {
        const jitter = (Math.random() * 2 - 1) * 18;
        imgData.data[i * 4] = 128 + jitter;
        imgData.data[i * 4 + 1] = 128 + jitter * 0.6;
        imgData.data[i * 4 + 2] = 255;
        imgData.data[i * 4 + 3] = 255;
      }
      ctx.putImageData(imgData, 0, 0);
      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(6, 6);
      return tex;
    }
    const normalMap = createNoiseNormalMap();

    const group = new THREE.Group();
    scene.add(group);

    const coreGeo = new THREE.IcosahedronGeometry(2, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x1c1c20,
      metalness: 0.9,
      roughness: 0.3,
      flatShading: true,
      clearcoat: 0.6,
      clearcoatRoughness: 0.2,
      envMapIntensity: 1.4,
      normalMap,
      normalScale: new THREE.Vector2(0.12, 0.12),
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.castShadow = true;
    core.receiveShadow = true;
    group.add(core);

    const edgesGeo = new THREE.EdgesGeometry(coreGeo, 1);
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0xfbbf60,
      transparent: true,
      opacity: 0.55,
    });
    const edges = new THREE.LineSegments(edgesGeo, edgesMat);
    edges.scale.setScalar(1.012);
    group.add(edges);

    const ringGeo = new THREE.TorusGeometry(3.1, 0.014, 8, 128);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x2fd9c4,
      emissive: 0x2fd9c4,
      emissiveIntensity: 0.45,
      metalness: 0.8,
      roughness: 0.3,
      transparent: true,
      opacity: 0.55,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat1);
    ring1.rotation.x = Math.PI / 2.4;
    scene.add(ring1);

    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xff6b8a,
      emissive: 0xff6b8a,
      emissiveIntensity: 0.35,
      metalness: 0.8,
      roughness: 0.3,
      transparent: true,
      opacity: 0.32,
    });
    const ring2 = new THREE.Mesh(ringGeo, ringMat2);
    ring2.rotation.x = Math.PI / 1.7;
    ring2.rotation.y = Math.PI / 5;
    ring2.scale.setScalar(1.18);
    scene.add(ring2);

    const groundGeo = new THREE.PlaneGeometry(40, 40);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.38 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2.65;
    ground.receiveShadow = true;
    scene.add(ground);

    const particleCount = 220;
    const positions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const palette = [
      new THREE.Color(0xfbbf60),
      new THREE.Color(0xff6b8a),
      new THREE.Color(0x2fd9c4),
      new THREE.Color(0xa78bfa),
    ];
    for (let i = 0; i < particleCount; i++) {
      const r = 6 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      const c = palette[i % palette.length];
      particleColors[i * 3] = c.r;
      particleColors[i * 3 + 1] = c.g;
      particleColors[i * 3 + 2] = c.b;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.03,
      transparent: true,
      opacity: 0.75,
      vertexColors: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    const mouse = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };
    const handleMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    mount.addEventListener("mousemove", handleMove);

    let frameId;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      eased.x += (mouse.y * 0.3 - eased.x) * 0.04;
      eased.y += (mouse.x * 0.4 - eased.y) * 0.04;

      const spin = prefersReducedMotion ? 0 : t * 0.15;
      group.rotation.x = eased.x + (prefersReducedMotion ? 0 : Math.sin(t * 0.2) * 0.05);
      group.rotation.y = spin + eased.y;

      ring1.rotation.z = prefersReducedMotion ? 0 : t * 0.12;
      ring2.rotation.z = prefersReducedMotion ? 0 : -t * 0.09;
      particles.rotation.y = prefersReducedMotion ? 0 : t * 0.02;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();
    setLoaded(true);

    const handleResize = () => {
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      mount.removeEventListener("mousemove", handleMove);
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
      coreGeo.dispose();
      coreMat.dispose();
      edgesGeo.dispose();
      edgesMat.dispose();
      ringGeo.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      groundGeo.dispose();
      groundMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      normalMap.dispose();
      envRT.texture.dispose();
      panelGeo.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, opacity: loaded ? 1 : 0, transition: "opacity 1s ease" }}>
      <div ref={mountRef} style={{ position: "absolute", inset: 0 }} />
    </div>
  );
}

export default Hero3D;