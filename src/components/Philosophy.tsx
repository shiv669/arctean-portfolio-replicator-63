
import { useEffect, useRef } from 'react';

const Philosophy = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Animate section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-5');
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-24 transition-all duration-700 opacity-0 translate-y-5"
    >
      <div className="container-custom">
        <div className="grid grid-cols-12 gap-y-8 md:gap-8">
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-3xl font-display leading-tight mb-6">
              At Arctean, we believe <br/> that wealth security is not just <br/> about assets <span className="text-gray-400">but also</span> <span className="text-gray-400">about</span> creating <br/> sustainable and <div className="inline-flex items-center justify-center">
                <div className="blur-dot"></div>
                <div className="blur-dot mx-1"></div>
                <div className="blur-dot"></div>
                <div className="blur-dot mx-1"></div>
              </div> <br/> meaningful <span className="text-gray-400">financial legacies</span>.
            </h2>
            
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded text-sm transition-colors mt-4">
              About us
            </button>
          </div>
          
          <div className="col-span-12 md:col-span-6 md:pl-12 flex items-end">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="aspect-square"></div>
              <div className="text-xs text-gray-400 max-w-xs">
                We harness cutting-edge financial technology to create systems that protect and grow wealth across generations, ensuring lasting prosperity.
              </div>
              <div className="text-xs text-gray-400">
                Est. 2018
              </div>
              <div className="text-right text-xs text-gray-400">
                <a href="#contact" className="underline underline-offset-4 hover:text-white transition-colors">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
