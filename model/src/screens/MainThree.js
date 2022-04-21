import React from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { usePlane, Physics, useBox } from '@react-three/cannon';

import './MainThree.scss';

const Box = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="#f5cc8e" />
    </mesh>
  );
};

const Plane = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 50]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
};

export default function MainThree() {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />

      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Box />
        <Plane />
      </Physics>

      {/* <Box /> */}
    </Canvas>
  );
}
