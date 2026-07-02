import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, Ring, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShapes = () => {
  const groupRef = useRef();
  const mainShapeRef = useRef();
  const ringRef = useRef();
  const smallShape1 = useRef();
  const smallShape2 = useRef();

  useFrame((state) => {
    // Main group rotation - slow floating
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    
    // Main shape rotation
    if (mainShapeRef.current) {
      mainShapeRef.current.rotation.x += 0.003;
      mainShapeRef.current.rotation.y += 0.005;
    }

    // Ring rotation
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2.5;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.02;
      ringRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.02);
    }

    // Small orbiting shapes
    if (smallShape1.current) {
      smallShape1.current.position.x = 2.5 * Math.cos(state.clock.elapsedTime * 0.15);
      smallShape1.current.position.z = 2.5 * Math.sin(state.clock.elapsedTime * 0.15);
      smallShape1.current.rotation.x += 0.02;
      smallShape1.current.rotation.y += 0.03;
    }

    if (smallShape2.current) {
      smallShape2.current.position.x = 2.0 * Math.cos(state.clock.elapsedTime * 0.2 + 2.5);
      smallShape2.current.position.z = 2.0 * Math.sin(state.clock.elapsedTime * 0.2 + 2.5);
      smallShape2.current.rotation.x += 0.025;
      smallShape2.current.rotation.y += 0.02;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* MAIN SHAPE - Icosahedron (Diamond) - EXACT DIAMOND COLOR */}
      <Icosahedron 
        ref={mainShapeRef}
        position={[0, 0, 0]}
        args={[1.3, 0]}
      >
        <MeshDistortMaterial
          color="#88d8f7"           // Light cyan/blue - Diamond color
          emissive="#4fc3f7"        // Slightly darker for glow
          emissiveIntensity={0.15}
          distort={0.05}
          speed={1}
          roughness={0.02}          // Very smooth like diamond
          metalness={0.95}          // High metalness for diamond shine
          transparent
          opacity={0.92}
          wireframe={false}
          clearcoat={0.8}           // High clearcoat for diamond look
          clearcoatRoughness={0.05}
          envMapIntensity={1.2}
        />
      </Icosahedron>

      {/* RING AROUND DIAMOND - SAME DIAMOND COLOR */}
      <Ring 
        ref={ringRef}
        position={[0, 0, 0]}
        args={[1.6, 1.9, 64]}
      >
        <MeshDistortMaterial
          color="#88d8f7"           // Same diamond color
          emissive="#4fc3f7"
          emissiveIntensity={0.05}
          roughness={0.1}
          metalness={0.7}
          transparent
          opacity={0.25}
          side={THREE.DoubleSide}
        />
      </Ring>

      {/* SMALL ORBITING SHAPE 1 - Purple (as in image) */}
      <Icosahedron 
        ref={smallShape1}
        position={[2.5, 0.8, 0]}
        args={[0.3, 0]}
      >
        <MeshDistortMaterial
          color="#b388ff"           // Light purple
          emissive="#7c4dff"
          emissiveIntensity={0.1}
          distort={0.03}
          speed={1}
          roughness={0.1}
          metalness={0.7}
          transparent
          opacity={0.7}
        />
      </Icosahedron>

      {/* SMALL ORBITING SHAPE 2 - Mint Green (as in image) */}
      <Icosahedron 
        ref={smallShape2}
        position={[-2.0, -0.6, 0]}
        args={[0.25, 0]}
      >
        <MeshDistortMaterial
          color="#69db7c"           // Mint green
          emissive="#51cf66"
          emissiveIntensity={0.1}
          distort={0.03}
          speed={1}
          roughness={0.1}
          metalness={0.7}
          transparent
          opacity={0.6}
        />
      </Icosahedron>
    </group>
  );
};

export default FloatingShapes;