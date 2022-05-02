import React, { useEffect, useRef } from 'react';

import { useThree, useFrame } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';
import { Vector3 } from 'three';

import { FPVControls } from './FPVControls';
import { useKeyboardControls } from '../../hooks/useKeyboardControls';

const SPEED = 6;
const SCALE = 0.1;

export const CameraView = props => {
  const { camera } = useThree();
  const { moveForward, moveBackward, moveLeft, moveRight, jump, fall } =
    useKeyboardControls();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    ...props,
  }));

  const velocity = useRef([0, 0, 0]);

  useEffect(() => {
    api.velocity.subscribe(v => (velocity.current = v));
  }, [api.velocity]);

  useFrame(() => {
    const direction = new Vector3();

    const frontVector = new Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
    );
    const sideVector = new Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
      0,
      0
    );

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);

    // console.log(direction);

    // api.velocity.set(direction.x, velocity.current[1], direction.z);

    // if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) {
    //   api.velocity.set(velocity.current[0], 8, velocity.current[2]);
    // }

    let currPos = ref.current.position;

    // if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) {
    //   currPos.x += velocity.current[0] * SCALE;
    //   currPos.y += 2;
    //   currPos.z += velocity.current[2] * SCALE;
    // } else {
    currPos.x += direction.x * SCALE;
    currPos.y = Math.max(currPos.y + Math.max(velocity.current[1], 0), 6);
    currPos.z += direction.z * SCALE;

    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) {
      currPos.y += 2;
    }

    if (fall && Math.abs(velocity.current[1].toFixed(2)) < 0.05) {
      currPos.y -= 2;
    }
    // }

    camera.position.copy(currPos);
  });
  return (
    <>
      <FPVControls />
      <mesh ref={ref} />
    </>
  );
};
