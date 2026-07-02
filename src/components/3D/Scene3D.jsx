import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Ring, Torus, MeshDistortMaterial } from '@react-three/drei';

const Scene3D = () => {
  const ringRef = useRef();
  const torusRef = useRef();

  useFrame((state) => {
    ringRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    ringRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    torusRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    torusRef.current.rotation.z = state.clock.elapsedTime * 0.2;
  });

  return (
    <>
      {/* Floating Ring */}
      <Ring 
        ref={ringRef}
        position={[-1, 2, -5]}
        args={[0.8, 1.2, 64]}
        rotation={[0.5, 0, 0]}
      >
        <MeshDistortMaterial
          color="#00cec9"
          emissive="#00b894"
          emissiveIntensity={0.3}
          distort={0.1}
          speed={1}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.7}
          side={2}
        />
      </Ring>

      {/* Floating Torus */}
      <Torus 
        ref={torusRef}
        position={[4, 0.5, -4]}
        args={[0.6, 0.2, 16, 64]}
      >
        <MeshDistortMaterial
          color="#fd79a8"
          emissive="#e84393"
          emissiveIntensity={0.2}
          distort={0.2}
          speed={1.5}
          roughness={0.05}
          metalness={0.95}
          transparent
          opacity={0.8}
        />
      </Torus>
    </>
  );
};

export default Scene3D;