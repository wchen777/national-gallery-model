import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Button } from '@chakra-ui/react';
import './Main.scss';
import MainThree from './MainThree';

export default function Main() {
  const [displayDemo, setDisplayDemo] = useState(false);

  return (
    // <>
    //   <div className="toggle">
    //     <Button variant="solid" onClick={() => setDisplayDemo(!displayDemo)}>
    //       Toggle Demo
    //     </Button>
    //   </div>

    //   {displayDemo ? (
    //     <Spline scene="https://draft.spline.design/hdPoj9fVJlty5LH4/scene.spline" />
    //   ) : (
    //     <Spline scene="https://draft.spline.design/J2lwgPvHdbT26xMX/scene.spline" />
    //   )}
    // </>
    <MainThree />
  );
}
