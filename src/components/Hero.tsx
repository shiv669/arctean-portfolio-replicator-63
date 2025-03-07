
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
  
  // Staggered text animation for the main heading
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };
  
  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12
      }
    }
  };
  
  // Animated gradient background
  const gradientVariants = {
    initial: {
      backgroundPosition: "0% 50%"
    },
    animate: {
      backgroundPosition: "100% 50%",
      transition: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 15,
        ease: "linear"
      }
    }
  };
  
  // Split text into words for animation
  const headingText = "Your Digital Vault for Generational Wealth Protection";
  const words = headingText.split(" ");
  
  return (
    <motion.section 
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-black via-purple-900/10 to-black bg-[length:400%_400%]"
        variants={gradientVariants}
        initial="initial"
        animate="animate"
      ></motion.div>
      
      <div className="absolute top-1/4 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-[100px]"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <motion.h1 
            className="h1 mb-1"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, i) => (
              <motion.span 
                key={i} 
                variants={wordVariants}
                className="inline-block mr-[0.25em]"
              >
                {i === 3 && <br />}
                {i === 5 && <br />}
                {i === 6 && <span className="text-gray-400">{word} </span>}
                {i !== 6 && word}{' '}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.div 
            ref={dotsRef}
            className="flex items-center space-x-2 mt-4 mb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.div 
                key={i} 
                className="blur-dot"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.6 + (i * 0.1), type: "spring" }}
              ></motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-3 gap-3 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="col-span-3 md:col-span-1">
            <motion.p 
              className="text-sm uppercase tracking-wider opacity-70"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0.7, x: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              Our capabilities
            </motion.p>
          </div>
          <div className="col-span-3 md:col-span-1 flex items-center justify-center">
            <motion.div 
              className="flex gap-2 overflow-x-auto pb-2"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 1.8
                  }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="rounded-md overflow-hidden h-16 w-28 bg-gray-800 flex-shrink-0"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <img 
                  src="/lovable-uploads/5bcd528d-112e-474a-8251-5080ad8c870b.png" 
                  alt="Asset Security" 
                  className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
              <motion.div 
                className="rounded-md overflow-hidden h-16 w-28 bg-gray-800 flex-shrink-0"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" 
                  alt="Digital Legacy" 
                  className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
              <motion.div 
                className="rounded-md overflow-hidden h-16 w-28 bg-gray-800 flex-shrink-0"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" 
                  alt="Wealth Transfer" 
                  className="h-full w-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="col-span-3 md:col-span-1 flex md:justify-end items-center">
            <motion.button 
              className="flex items-center space-x-2 text-sm hover:text-purple-500 transition-colors group"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
              whileHover={{ x: 5 }}
            >
              <span>Explore features</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(138,107,246,0.15)_0%,rgba(0,0,0,0)_50%)]"></div>
    </motion.section>
  );
};

export default Hero;
