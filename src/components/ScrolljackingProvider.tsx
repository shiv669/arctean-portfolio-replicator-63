
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrolljackingProviderProps {
  children: ReactNode;
}

const ScrolljackingProvider: React.FC<ScrolljackingProviderProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [childrenArray, setChildrenArray] = useState<ReactNode[]>([]);
  const [containerHeight, setContainerHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  
  // Setup children array
  useEffect(() => {
    const childArray = React.Children.toArray(children);
    setChildrenArray(childArray);
    setContainerHeight(childArray.length * window.innerHeight);
    setWindowHeight(window.innerHeight);
    
    const handleResize = () => {
      setContainerHeight(childArray.length * window.innerHeight);
      setWindowHeight(window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [children]);

  return (
    <div 
      ref={containerRef} 
      style={{ height: `${containerHeight}px` }}
      className="relative w-full"
    >
      {childrenArray.map((child, index) => (
        <ScrollSection
          key={index}
          index={index}
          containerRef={containerRef}
          totalSections={childrenArray.length}
          windowHeight={windowHeight}
        >
          {child}
        </ScrollSection>
      ))}
    </div>
  );
};

interface ScrollSectionProps {
  children: ReactNode;
  index: number;
  containerRef: React.RefObject<HTMLDivElement>;
  totalSections: number;
  windowHeight: number;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ 
  children, 
  index, 
  containerRef,
  totalSections,
  windowHeight
}) => {
  const { scrollY } = useScroll({ container: containerRef });
  
  // Calculate section scroll progress
  const sectionStart = index * windowHeight;
  const sectionEnd = (index + 1) * windowHeight;
  
  // Transform for y position
  const y = useTransform(
    scrollY,
    [sectionStart - windowHeight, sectionStart, sectionEnd],
    [windowHeight, 0, -windowHeight]
  );
  
  // Transform for opacity to fade in/out
  const opacity = useTransform(
    scrollY,
    [sectionStart - windowHeight/2, sectionStart, sectionEnd - windowHeight/2, sectionEnd],
    [0, 1, 1, 0]
  );
  
  // Transform for scale to create parallax effect
  const scale = useTransform(
    scrollY,
    [sectionStart - windowHeight, sectionStart, sectionEnd],
    [1.1, 1, 0.9]
  );
  
  // Calculate progress through section (0 to 1)
  const progress = useTransform(
    scrollY,
    [sectionStart, sectionEnd],
    [0, 1]
  );

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '100vh',
        y,
        opacity,
        zIndex: totalSections - index
      }}
      className="overflow-hidden"
    >
      {/* Parallax background layer */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ 
          scale,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        {/* Background parallax content goes here if needed */}
      </motion.div>
      
      {/* Main content */}
      <motion.div 
        className="relative z-10 h-full"
        style={{ 
          y: useTransform(progress, [0, 1], [0, windowHeight * 0.1])
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ScrolljackingProvider;
