
import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const AboutUs = () => {
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
      id="about"
      ref={sectionRef}
      className="py-24 transition-all duration-700 opacity-0 translate-y-5"
    >
      <div className="container-custom">
        <div className="grid grid-cols-12 gap-y-8 md:gap-8">
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-3xl font-display leading-tight mb-6">
              About<br />
              <span className="text-gray-400">Kapital</span> LLC<br/>
              <div className="inline-flex items-center justify-center">
                <div className="blur-dot"></div>
                <div className="blur-dot mx-1"></div>
                <div className="blur-dot"></div>
                <div className="blur-dot mx-1"></div>
              </div>
            </h2>
            
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded text-sm transition-colors mt-4">
              About Our Fund
            </button>
          </div>
          
          <div className="col-span-12 md:col-span-6 md:pl-12">
            <div className="space-y-6">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-gray-800/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Investment Management Expertise</h3>
                  <p className="text-sm text-gray-400">Kapital LLC is an investment management firm serving as the General Partner for S Fund, LP – an Investment Partnership based in Texas and established in 2022.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-gray-800/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Value Investing Approach</h3>
                  <p className="text-sm text-gray-400">The fund uses a value investing approach aided by advanced quantitative models to identify undervalued securities with strong potential.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-gray-800/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Strategic Investment Opportunities</h3>
                  <p className="text-sm text-gray-400">We seek to identify and invest in the best opportunities amongst a broad number of investable securities with a focus on relatively liquid securities.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-gray-800/50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Established in Texas</h3>
                  <p className="text-sm text-gray-400">Our investment partnership is based in Texas, founded in 2022 with a focus on providing exceptional returns through disciplined investment strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
