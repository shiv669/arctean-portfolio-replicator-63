
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
  const [mounted, setMounted] = useState(false);

  // Mount state helps prevent unmounting issues
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  const handleLoad = () => {
    setLoading(false);
    if (onLoad) onLoad();
    
    // Log successful loading to debug
    console.log('Spline scene loaded successfully');
  };

  // Cleanup function to help with memory issues
  useEffect(() => {
    return () => {
      // Force garbage collection when component unmounts
      window.gc && window.gc();
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" style={{ pointerEvents: 'none' }}>
      {mounted && (
        <Spline 
          scene={scene}
          onLoad={handleLoad}
        />
      )}
    </div>
  );
};

export default SplineScene;
