
import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Skeleton } from './ui/skeleton';

interface SectionSplineSceneProps {
  scene: string;
  className?: string;
  width?: number;
  height?: number;
}

const SectionSplineScene = ({ 
  scene,
  className = "relative min-h-[500px]",
  width,
  height
}: SectionSplineSceneProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Mount state helps prevent unmounting issues
  useEffect(() => {
    setMounted(true);
    console.log("SectionSplineScene mounted, scene:", scene);
    return () => {
      setMounted(false);
    };
  }, [scene]);

  const handleLoad = () => {
    setIsLoaded(true);
    console.log("SectionSplineScene loaded successfully:", scene);
  };

  // Cleanup function to help with memory issues
  useEffect(() => {
    return () => {
      // Force garbage collection when component unmounts
      window.gc && window.gc();
    };
  }, []);

  return (
    <div 
      className={`${className} rounded-t-3xl`}
      style={{ 
        width: width ? `${width}px` : '100%', 
        height: height ? `${height}px` : '100%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {!isLoaded && (
        <Skeleton className="w-full h-full rounded-t-3xl bg-gray-900/50" />
      )}
      <div style={{ 
        width: '100%', 
        height: '100%', 
        visibility: isLoaded ? 'visible' : 'hidden',
        position: 'relative',
        borderTopLeftRadius: '1.5rem',
        borderTopRightRadius: '1.5rem'
      }}>
        {mounted && (
          <Spline 
            scene={scene}
            onLoad={handleLoad}
          />
        )}
      </div>
    </div>
  );
};

export default SectionSplineScene;
