
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
      scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
    )}>
      <div className="container-custom flex items-center justify-between py-4">
        <a href="/" className="text-lg font-display font-bold tracking-tight">
          Arctean
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="text-xs text-gray-400">
            ABOUT US. SERVICES. PROJECTS. FAQ.
          </div>
          <a 
            href="#contact" 
            className="text-xs uppercase font-medium border-b border-white/40 hover:border-white transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
