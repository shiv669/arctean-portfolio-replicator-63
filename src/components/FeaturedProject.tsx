
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedProject = () => {
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
      className="py-16 transition-all duration-700 opacity-0 translate-y-5"
    >
      <div className="container-custom">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative overflow-hidden rounded-xl">
            <div className="bg-gray-900 p-6 md:p-10">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6">
                  <div className="mb-8">
                    <span className="text-xs text-purple-500">Wealth Shield</span>
                    <h3 className="text-xl md:text-3xl font-display mt-1">
                      Legacy Vault App
                    </h3>
                    <span className="text-xs text-gray-400">by</span>
                    <span className="text-xs ml-1">
                      Arctean Technologies
                    </span>
                  </div>
                </div>
                
                <div className="col-span-12 md:col-span-6">
                  <div className="flex justify-end">
                    <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors flex items-center space-x-1">
                      <span>View project</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
                
                <div className="col-span-12">
                  <div className="w-full aspect-[16/8] bg-black rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                      alt="Legacy Vault App" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
