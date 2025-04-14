
import React, { useRef, useEffect } from 'react';
import { useScroll } from '../context/ScrollContext';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  parallaxFactor?: number;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = "", 
  id,
  style = {},
  parallaxFactor = 0.2
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { registerSection, currentSection, sections } = useScroll();
  
  useEffect(() => {
    registerSection(sectionRef);
  }, [registerSection]);

  const isActive = sections.indexOf(sectionRef) === currentSection;
  const isAfterCurrent = sections.indexOf(sectionRef) > currentSection;
  const isBeforeCurrent = sections.indexOf(sectionRef) < currentSection;

  // Calculate the parallax effect for this section
  const sectionIndex = sections.indexOf(sectionRef);
  const offset = (sectionIndex - currentSection) * parallaxFactor;

  return (
    <motion.div
      ref={sectionRef}
      id={id}
      className={`min-h-screen w-full snap-start ${className}`}
      style={{
        ...style,
        position: 'relative',
        overflow: 'hidden'
      }}
      initial={{ y: "100%" }}
      animate={{ 
        y: isAfterCurrent ? "100%" : "0%",
        zIndex: 10 - sectionIndex,
      }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        className="h-full w-full"
        style={{ position: 'relative' }}
        animate={{ 
          y: isBeforeCurrent ? `${-20 * parallaxFactor}%` : "0%"
        }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Section;
