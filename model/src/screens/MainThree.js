import React from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { usePlane, Physics, useBox } from '@react-three/cannon';

import './MainThree.scss';
import { CameraView } from '../components/camera/CameraView';
import Stage from '../components/environment/Stage';

const Box = () => {
  const [ref] = useBox(() => ({
    mass: 1,
    position: [0, 1, 0],
  }));

  return (
    <mesh position={[0, 1, 0]} ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="#f5cc8e" />
    </mesh>
  );
};

export default function MainThree() {
  return (
    <Canvas>
      {/* <OrbitControls /> */}
      <Stars />

      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      {/* <pointLight castShadow intensity={0.7} position={[100, 100, 100]} /> */}
      <Physics gravity={[0, -30, 0]}>
        {/* <Box /> */}
        <Stage />
        <CameraView position={[0, 7, 10]} />
      </Physics>

      {/* <Box /> */}
    </Canvas>
  );
}
