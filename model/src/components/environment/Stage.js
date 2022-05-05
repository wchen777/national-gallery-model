import React from 'react';

import { usePlane } from '@react-three/cannon';
import {
  TextureLoader,
  RepeatWrapping,
  NearestFilter,
  LinearMipMapLinearFilter,
} from 'three';
import grass from '../../images/grass.jpeg';

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

  const texture = new TextureLoader().load(grass);

  texture.magFilter = NearestFilter;
  texture.minFilter = LinearMipMapLinearFilter;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(100, 100);

  return (
    <mesh
      ref={ref}
      position={[0, 0.025, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" args={[110, 200]} />
      <meshLambertMaterial attach="material" map={texture} color="#7c9954" />
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

  const texture = new TextureLoader().load(grass);

  texture.magFilter = NearestFilter;
  texture.minFilter = LinearMipMapLinearFilter;
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(100, 100);

  return (
    <mesh
      ref={ref}
      position={[0, 0.025, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" args={[110, 200]} />
      <meshLambertMaterial attach="material" color="#7c9954" map={texture} />
    </mesh>
  );
};

export default function Stage() {
  return (
    <>
      <PlaneRoadsLeft />
      <PlaneRoadsRight />
      <PlaneGrassRight />
      <PlaneGrassLeft />
      <PlaneCourtyard />
    </>
  );
}
