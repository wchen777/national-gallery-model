import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Button } from '@chakra-ui/react';
import './Main.scss';

export default function Main() {
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
    const night = window.localStorage.getItem('state') === 'night';
    window.localStorage.setItem('state', !night ? 'night' : 'day');
    window.location.reload();
  };

  return (
    <>
      <div className="toggle">
        <Button variant="solid" onClick={() => handleToggle()}>
          Toggle{' '}
          {window.localStorage.getItem('state') === 'night'
            ? 'Daytime'
            : 'Nighttime'}
        </Button>
      </div>
      {loading && <div class="loader"></div>}
      <Spline
        scene={
          window.localStorage.getItem('state') === 'night'
            ? 'https://prod.spline.design/VoZTNIwiZ09rqvpr/scene.splinecode'
            : 'https://prod.spline.design/q3SrPhJqc-P8bApm/scene.splinecode'
        }
      />
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
