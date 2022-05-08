import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Button } from '@chakra-ui/react';
import './Main.scss';

export default function Main() {
  const [night, setNight] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadingTimeout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    loadingTimeout();
  }, []);

  const handleToggle = () => {
    setNight(!night);
    loadingTimeout();
  };

  return (
    <>
      <div className="toggle">
        <Button variant="solid" onClick={() => handleToggle()}>
          Toggle {night ? 'Daytime' : 'Nighttime'}
        </Button>
      </div>

      {loading && <div class="loader"></div>}

      {night ? (
        <Spline scene="https://prod.spline.design/VoZTNIwiZ09rqvpr/scene.splinecode" /> // night
      ) : (
        <Spline scene="https://prod.spline.design/q3SrPhJqc-P8bApm/scene.splinecode" /> // day
      )}
    </>
    // <>
    //   {/* <div className="toggle">
    //     <Button variant="solid">Toggle Demo</Button>
    //   </div> */}
    //   <MainThree />
    //   {/* MAIN THREE IS DEPCRECATED? */}
    // </>
  );
}
