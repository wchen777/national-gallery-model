import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Button } from '@chakra-ui/react';
import './Main.scss';

import { Canvas } from 'react-three-fiber';
import { OrbitControls, Stars } from '@react-three/drei';

// const Box = () => {
//   return (
//     <mesh>
//       <boxBufferGeometry attach="geometry" />
//       <meshLambertMaterial attach="material" color="hotpink" />
//     </mesh>
//   );
// };

// <Canvas>
//   {/* <OrbitControls /> */}
//   {/* <Stars /> */}
//   <spotLight position={[10, 15, 10]} angle={0.3} />
//   <ambientLight intensity={0.5} />
//   {/* <Stars />
//   <ambientLight intensity={0.5} />
//   <spotLight position={[10, 15, 10]} angle={0.3} /> */}
//   <Box />
// </Canvas>

export default function Main() {
  const [displayDemo, setDisplayDemo] = useState(false);

  return (
    <>
      <div className="toggle">
        <Button variant="solid" onClick={() => setDisplayDemo(!displayDemo)}>
          Toggle Demo
        </Button>
      </div>

      {displayDemo ? (
        <Spline scene="https://draft.spline.design/hdPoj9fVJlty5LH4/scene.spline" />
      ) : (
        <Spline scene="https://draft.spline.design/J2lwgPvHdbT26xMX/scene.spline" />
      )}
    </>
  );
}
