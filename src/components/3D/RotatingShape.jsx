import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TorusKnot, MeshDistortMaterial } from '@react-three/drei';

const RotatingShape = ({ position = [0, 0, 0] }) => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.4;
    meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.03);
  });

  return (
    <TorusKnot 
      ref={meshRef} 
      position={position}
      args={[0.8, 0.25, 100, 16]}
    >
      <MeshDistortMaterial
        color="#4a9eff"
        emissive="#6c5ce7"
        emissiveIntensity={0.4}
        distort={0.3}
        speed={2}
        roughness={0.1}
        metalness={0.8}
        transparent
        opacity={0.9}
      />
    </TorusKnot>
  );
};

export default RotatingShape;