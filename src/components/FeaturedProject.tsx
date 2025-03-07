
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturedProject = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
  
  // Animated gradient border
  const borderVariants = {
    initial: {
      backgroundPosition: "0% 50%"
    },
    animate: {
      backgroundPosition: "100% 50%",
      transition: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 8,
        ease: "linear"
      }
    }
  };
  
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
        <motion.div 
          className="relative group"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            variants={borderVariants}
            initial="initial"
            animate="animate"
          ></motion.div>
          
          <div className="relative overflow-hidden rounded-xl">
            <div className="bg-gray-900 p-6 md:p-10">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6">
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xs text-purple-500">Key Feature</span>
                    <h3 className="text-xl md:text-3xl font-display mt-1">
                      Asset DNA™ Technology
                    </h3>
                    <span className="text-xs text-gray-400">by</span>
                    <span className="text-xs ml-1">
                      Arctean Security Labs
                    </span>
                  </motion.div>
                </div>
                
                <div className="col-span-12 md:col-span-6">
                  <div className="flex justify-end">
                    <motion.a 
                      href="#" 
                      className="text-xs text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 3 }}
                    >
                      <span>Learn how it works</span>
                      <ArrowRight className="h-3 w-3" />
                    </motion.a>
                  </div>
                </div>
                
                <div className="col-span-12">
                  <motion.div 
                    className="w-full aspect-[16/8] bg-black rounded-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1556742208-999815fca738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                      alt="Asset DNA Technology" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </div>
                
                <div className="col-span-12 mt-6">
                  <motion.p 
                    className="text-gray-400 text-sm max-w-3xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Our revolutionary Asset DNA™ technology creates a unique digital fingerprint for each of your assets by analyzing multiple data points including metadata, transaction history, and ownership records. This ensures that your assets cannot be fraudulently claimed or transferred without authorization.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
