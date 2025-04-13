
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
    <div className={className}>
      <Spline 
        scene={scene}
        width={width}
        height={height}
      />
    </div>
  );
};

export default SectionSplineScene;
