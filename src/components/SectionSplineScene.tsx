
import { useState } from 'react';
import Spline from '@splinetool/react-spline';

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
  return (
    <div className={className} style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%' }}>
      <Spline 
        scene={scene}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default SectionSplineScene;
