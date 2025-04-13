
import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  onLoad?: () => void;
}

const SplineScene = ({ onLoad }: SplineSceneProps) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
    if (onLoad) onLoad();
  };

  return (
    <div className="absolute inset-0 -z-10">
      <Spline 
        scene="https://prod.spline.design/1LPGwPo7iz9qGz4W/scene.splinecode"
        onLoad={handleLoad}
      />
    </div>
  );
};

export default SplineScene;
