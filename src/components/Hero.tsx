
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const dotsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!dotsRef.current) return;
    
    const interval = setInterval(() => {
      const dots = dotsRef.current?.children;
      if (!dots) return;
      
      const randomDot = Math.floor(Math.random() * dots.length);
      dots[randomDot].classList.add('animate-pulse-light');
      
      setTimeout(() => {
        dots[randomDot].classList.remove('animate-pulse-light');
      }, 2000);
    }, 300);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <h1 className="h1 mb-1 animate-fade-in-up [animation-delay:200ms]">
            Securing 
            <br />
            generational
            <br />
            wealth
            <br />
            <span className="text-gray-400">through</span> tech
          </h1>
          
          <div 
            ref={dotsRef}
            className="flex items-center space-x-2 mt-4 mb-24 animate-fade-in-up [animation-delay:400ms]"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="blur-dot"></div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-3 mt-8 animate-fade-in-up [animation-delay:600ms]">
          <div className="col-span-3 md:col-span-1">
            <p className="text-sm uppercase tracking-wider opacity-70">Our capabilities</p>
          </div>
          <div className="col-span-3 md:col-span-1 flex items-center justify-center">
            <div className="flex gap-2 overflow-x-auto pb-2">
              <div className="rounded-md overflow-hidden h-16 w-28 bg-gray-800 flex-shrink-0">
                <img 
                  src="/lovable-uploads/5bcd528d-112e-474a-8251-5080ad8c870b.png" 
                  alt="Wealth security" 
                  className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="rounded-md overflow-hidden h-16 w-28 bg-gray-800 flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" 
                  alt="Technology" 
                  className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="rounded-md overflow-hidden h-16 w-28 bg-gray-800 flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" 
                  alt="Financial security" 
                  className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 flex md:justify-end items-center">
            <button className="flex items-center space-x-2 text-sm hover:text-purple-500 transition-colors group">
              <span>See all work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(138,107,246,0.15)_0%,rgba(0,0,0,0)_50%)]"></div>
    </section>
  );
};

export default Hero;
