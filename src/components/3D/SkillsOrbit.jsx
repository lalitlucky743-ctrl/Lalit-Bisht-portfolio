import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { COLORS, ACCENTS } from '../../utilities/constants';

const skills = [
  { name: 'React', color: '#61DAFB' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'Git', color: '#F05032' },
  { name: 'HTML5', color: '#E34F26' },
  { name: 'CSS3', color: '#1572B6' },
  { name: 'Three.js', color: '#000000' },
];

const SkillsOrbit = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 2, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Create skill tags in 3D space
    const group = new THREE.Group();
    const radius = 4;
    const skillObjects = [];

    skills.forEach((skill, index) => {
      const angle = (index / skills.length) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = Math.sin(angle * 1.5) * 0.8;

      // Create text sprite
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');

      // Background
      ctx.fillStyle = 'rgba(10,10,12,0.8)';
      ctx.roundRect(10, 10, 236, 108, 12);
      ctx.fill();
      ctx.strokeStyle = skill.color;
      ctx.lineWidth = 2;
      ctx.roundRect(10, 10, 236, 108, 12);
      ctx.stroke();

      // Text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 40px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(skill.name, 128, 64);

      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({ 
        map: texture, 
        transparent: true,
        opacity: 0.9
      });
      const sprite = new THREE.Sprite(material);
      sprite.position.set(x, y, z);
      sprite.scale.set(2, 1, 1);
      group.add(sprite);

      skillObjects.push({ sprite, angle, y, speed: 0.5 + Math.random() * 0.3 });
    });

    scene.add(group);

    // Particles around orbit
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 4.5 + Math.random() * 1.5;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi) * 0.5;
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x4a9eff,
      size: 0.05,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Animation
    let time = 0;
    const animate = () => {
      time += 0.01;
      group.rotation.y = time * 0.3;
      particles.rotation.y = time * 0.15;
      
      // Bobbing effect
      skillObjects.forEach((obj, i) => {
        obj.sprite.position.y = obj.y + Math.sin(time * obj.speed + i) * 0.3;
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      const newWidth = mount.clientWidth;
      renderer.setSize(newWidth, height);
      camera.aspect = newWidth / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '400px' }} />;
};

export default SkillsOrbit;