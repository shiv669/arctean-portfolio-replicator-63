
import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';

interface ScrollContextType {
  currentSection: number;
  sections: React.RefObject<HTMLDivElement>[];
  registerSection: (ref: React.RefObject<HTMLDivElement>) => void;
  scrollToSection: (index: number) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [sections, setSections] = useState<React.RefObject<HTMLDivElement>[]>([]);
  const scrolling = useRef(false);
  const lastScrollTime = useRef(Date.now());
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Reset sections array on mount
  useEffect(() => {
    setSections([]);
  }, []);

  const registerSection = (ref: React.RefObject<HTMLDivElement>) => {
    setSections(prev => {
      // Check if the ref already exists in the array
      if (!prev.includes(ref)) {
        return [...prev, ref];
      }
      return prev;
    });
  };

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sections.length) {
      setCurrentSection(index);
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      if (scrolling.current || now - lastScrollTime.current < 800) return;
      
      scrolling.current = true;
      lastScrollTime.current = now;
      
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        // Scroll down
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        // Scroll up
        setCurrentSection(prev => prev - 1);
      }
      
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        scrolling.current = false;
      }, 800);
    };

    // Add wheel event listener to the document
    document.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      document.removeEventListener('wheel', handleWheel);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [currentSection, sections.length]);

  return (
    <ScrollContext.Provider value={{ currentSection, sections, registerSection, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};
