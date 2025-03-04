
import { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

const projectImages = [
  {
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    alt: "Financial security solution",
    fullWidth: true,
    className: "col-span-2 md:col-span-4"
  },
  {
    src: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1697&q=80",
    alt: "Wealth management interface",
    halfWidth: true,
    className: "col-span-2 md:col-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1611095973763-414019e72400?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    alt: "Cryptosecurity platform",
    halfWidth: true,
    className: "col-span-2 md:col-span-2"
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    imageRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      imageRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-16 transition-all duration-700 opacity-0 translate-y-5"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm uppercase tracking-wider opacity-70">Selected Work</h3>
          <span className="text-xs text-gray-400">View All →</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {projectImages.map((image, index) => (
            <div 
              key={index}
              ref={el => imageRefs.current[index] = el}
              className={cn(
                "relative overflow-hidden rounded-lg bg-gray-900 transition-all duration-700 opacity-0 translate-y-5",
                image.className
              )}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                aspectRatio: image.fullWidth ? "16/9" : "1/1" 
              }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
        
        {/* Services section */}
        <div className="space-y-6">
          <div className="grid grid-cols-12 gap-4 border-t border-white/10 py-6">
            <div className="col-span-4 md:col-span-3">
              <h4 className="text-sm font-medium">Mobile App <br/>Design</h4>
            </div>
            
            <div className="col-span-8 md:col-span-3 flex items-center">
              <div className="w-16 h-16 bg-gray-900 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Mobile App Design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-6 mt-4 md:mt-0">
              <p className="text-xs text-gray-400">
                We design intuitive mobile applications that provide seamless access to your wealth management system, offering real-time insights and secure transaction capabilities from anywhere in the world.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-12 gap-4 border-t border-white/10 py-6">
            <div className="col-span-4 md:col-span-3">
              <h4 className="text-sm font-medium">Website<br/>Design</h4>
            </div>
            
            <div className="col-span-8 md:col-span-3 flex items-center">
              <div className="w-16 h-16 bg-gray-900 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Website Design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-6 mt-4 md:mt-0">
              <p className="text-xs text-gray-400">
                Our websites combine striking aesthetics with powerful functionality, creating digital platforms that communicate your wealth preservation strategy while providing secure portal access for clients and stakeholders.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-12 gap-4 border-t border-white/10 py-6">
            <div className="col-span-4 md:col-span-3">
              <h4 className="text-sm font-medium">Development</h4>
            </div>
            
            <div className="col-span-8 md:col-span-3 flex items-center">
              <div className="w-16 h-16 bg-gray-900 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-6 mt-4 md:mt-0">
              <p className="text-xs text-gray-400">
                Our expert development team builds robust financial technology solutions including blockchain integration, secure payment systems, and encrypted communication channels that protect your assets and facilitate wealth growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
