
import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const WhyArctean = () => {
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
              Why Choose Arctean<br />
              for Your Generational<br />
              <span className="text-gray-400">Wealth</span> Protection & <br/>
              <span className="text-gray-400">Legacy</span> Planning <br/>
              <div className="inline-flex items-center justify-center">
                <div className="blur-dot"></div>
                <div className="blur-dot mx-1"></div>
                <div className="blur-dot"></div>
                <div className="blur-dot mx-1"></div>
              </div>
            </h2>
            
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded text-sm transition-colors mt-4">
              About Arctean
            </button>
          </div>
          
          <div className="col-span-12 md:col-span-6 md:pl-12">
            <div className="space-y-6">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">The First Digital Generational Wealth Platform</h3>
                  <p className="text-sm text-gray-400">No other service secures and distributes both physical and digital assets in one place.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">100% Fraud-Proof Ownership Verification</h3>
                  <p className="text-sm text-gray-400">No fake documents, no scams, no loopholes. Our Asset DNA™ technology ensures complete authenticity.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Instant, Hassle-Free Asset Management</h3>
                  <p className="text-sm text-gray-400">No lawyers, no long waiting periods. Manage your entire wealth portfolio in one secure digital space.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Peace of Mind for You & Your Family</h3>
                  <p className="text-sm text-gray-400">Your wealth is protected forever. Ensure your legacy reaches the right hands with no legal complications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyArctean;
