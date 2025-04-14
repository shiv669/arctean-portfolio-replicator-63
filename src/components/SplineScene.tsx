
import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  onLoad?: () => void;
  scene?: string;
  className?: string;
}

const SplineScene = ({ 
  onLoad, 
  scene = "https://prod.spline.design/1LPGwPo7iz9qGz4W/scene.splinecode",
  className = ""
}: SplineSceneProps) => {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [loadingAttempts, setLoadingAttempts] = useState(0);

  // Mount state helps prevent unmounting issues
  useEffect(() => {
    setMounted(true);
    console.log('SplineScene mounted, scene:', scene);
    return () => {
      setMounted(false);
    };
  }, [scene]);

  const handleLoad = () => {
    setLoading(false);
    if (onLoad) onLoad();
    
    // Log successful loading to debug
    console.log('Spline scene loaded successfully');
  };

  // Force reload if it takes too long
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading && loadingAttempts < 3) {
        console.log('Forcing SplineScene reload, attempt:', loadingAttempts + 1);
        setLoadingAttempts(prev => prev + 1);
        setMounted(false);
        setTimeout(() => setMounted(true), 100);
      }
    }, 8000);
    
    return () => clearTimeout(timer);
  }, [loading, loadingAttempts]);

  // Cleanup function to help with memory issues
  useEffect(() => {
    return () => {
      // Force garbage collection when component unmounts
      window.gc && window.gc();
    };
  }, []);

  return (
    <div 
      className={`fixed inset-0 w-full h-screen overflow-hidden pointer-events-none ${className}`} 
      style={{ 
        zIndex: -10,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        visibility: 'visible'
      }}
    >
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
