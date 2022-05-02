import React from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { usePlane, Physics, useBox } from '@react-three/cannon';

import './MainThree.scss';
import { CameraView } from '../components/camera/CameraView';

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

const Plane = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh
      ref={ref}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" args={[300, 200]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
};

const PlaneCourtyard = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0.1, 0],
  }));
  return (
    <mesh
      ref={ref}
      position={[0, 0.1, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" args={[90, 200]} />
      <meshLambertMaterial attach="material" color="#BEAE9E" />
    </mesh>
  );
};

const PlaneRoadsRight = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [90, 0.05, -20],
  }));
  return (
    <mesh
      ref={ref}
      position={[0, 0.05, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" args={[120, 35]} />
      <meshLambertMaterial attach="material" color="#8a8a8a" />
    </mesh>
  );
};

const PlaneGrassRight = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [100, 0.02, 0],
  }));
  return (
    <mesh
      ref={ref}
      position={[0, 0.025, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" args={[110, 200]} />
      <meshLambertMaterial attach="material" color="#54673A" />
    </mesh>
  );
};

const PlaneRoadsLeft = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [-90, 0.05, -20],
  }));
  return (
    <mesh
      ref={ref}
      position={[0, 0.05, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" args={[120, 35]} />
      <meshLambertMaterial attach="material" color="#8a8a8a" />
    </mesh>
  );
};

const PlaneGrassLeft = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [-100, 0.02, 0],
  }));
  return (
    <mesh
      ref={ref}
      position={[0, 0.025, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" args={[110, 200]} />
      <meshLambertMaterial attach="material" color="#54673A" />
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
        <CameraView position={[0, 5, 10]} />
        <PlaneRoadsLeft />
        <PlaneRoadsRight />
        <PlaneGrassRight />
        <PlaneGrassLeft />
        <PlaneCourtyard />
        {/* <Plane /> */}
      </Physics>

      {/* <Box /> */}
    </Canvas>
  );
}
