
import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  onLoad?: () => void;
  scene?: string;
}

const SplineScene = ({ 
  onLoad, 
  scene = "https://prod.spline.design/1LPGwPo7iz9qGz4W/scene.splinecode" 
}: SplineSceneProps) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
    if (onLoad) onLoad();
  };

  // Cleanup function to help with memory issues
  useEffect(() => {
    return () => {
      // Force garbage collection when component unmounts
      window.gc && window.gc();
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Spline 
        scene={scene}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default SplineScene;
