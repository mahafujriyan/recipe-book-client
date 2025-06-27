import React, { useRef } from 'react';
import countdownAnimation from '../assets/countdown.json';
import Lottie from 'lottie-react';

const LottieAni = () => {
    const lottieRef = useRef();

  const handleComplete = () => {
     
    // Example: start a game, navigate, etc.
  };
    return (
        <div>
            <Lottie
        lottieRef={lottieRef}
        animationData={countdownAnimation}
        loop={false}
        autoplay={true}
        onComplete={handleComplete}
        style={{ width: 200, height: 200 }}
      />
        </div>
    );
};

export default LottieAni;