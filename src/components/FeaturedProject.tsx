
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const FeaturedApproach = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
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
  
  // Particle animation
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    speed: Math.random() * 1 + 0.5,
  }));
  
  // Use scroll progress to trigger animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [30, 0, 0, 30]);
  
  // Text reveal animation
  const textReveal = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  return (
    <section 
      ref={sectionRef}
      className="py-16 transition-all duration-700"
    >
      <div className="container-custom">
        <motion.div 
          className="relative group cursor-pointer"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ opacity, scale, y }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div 
            className="absolute -inset-0.5 bg-gradient-to-r from-gray-500/20 via-gray-500/20 to-gray-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            variants={borderVariants}
            initial="initial"
            animate="animate"
          ></motion.div>
          
          {/* Animated particles */}
          <AnimatePresence>
            {isHovered && particles.map(particle => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 rounded-full bg-gray-500/60 z-10 pointer-events-none"
                initial={{ 
                  x: `${particle.x}%`, 
                  y: `${particle.y}%`,
                  opacity: 0,
                  scale: 0
                }}
                animate={{ 
                  x: `${particle.x + (Math.random() * 10 - 5)}%`,
                  y: `${particle.y - particle.speed * 20}%`,
                  opacity: [0, 1, 0],
                  scale: [0, particle.size, 0]
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ 
                  duration: particle.speed * 4,
                  ease: "easeOut",
                  times: [0, 0.3, 1]
                }}
                style={{ width: `${particle.size}px`, height: `${particle.size}px` }}
              />
            ))}
          </AnimatePresence>
          
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
                    <span className="text-xs text-gray-400">Our Process</span>
                    <h3 className="text-xl md:text-3xl font-display mt-1">
                      Quantitative Value Analysis
                    </h3>
                    <span className="text-xs text-gray-400">by</span>
                    <span className="text-xs ml-1">
                      Kapital LLC Research Team
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
                      <span>Explore our methodology</span>
                      <ArrowRight className="h-3 w-3" />
                    </motion.a>
                  </div>
                </div>
                
                <div className="col-span-12">
                  <motion.div 
                    className="w-full aspect-[16/8] bg-black rounded-lg overflow-hidden relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                      alt="Quantitative Value Analysis" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Visual data analysis animation */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 0%'],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    />
                    
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative w-1/2 h-20 overflow-hidden">
                        {[...Array(10)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-6 h-6 rounded-full bg-gray-500/30 backdrop-blur-sm"
                            initial={{ 
                              x: i % 2 === 0 ? '0%' : '100%', 
                              y: `${i * 10}%`,
                              opacity: 0.3 
                            }}
                            animate={{ 
                              x: i % 2 === 0 ? '100%' : '0%',
                              opacity: [0.3, 0.8, 0.3], 
                            }}
                            transition={{ 
                              duration: 5 + i * 0.5, 
                              repeat: Infinity, 
                              repeatType: 'reverse',
                              ease: "easeInOut" 
                            }}
                            style={{
                              top: `${i * 10}%`,
                              left: i % 2 === 0 ? '0%' : 'auto',
                              right: i % 2 === 0 ? 'auto' : '0%',
                            }}
                          />
                        ))}
                        
                        {/* Connecting lines */}
                        {[...Array(9)].map((_, i) => (
                          <motion.div
                            key={`line-${i}`}
                            className="absolute h-0.5 bg-gradient-to-r from-gray-500/30 to-gray-300/30"
                            style={{
                              top: `${i * 10 + 5}%`,
                              left: '0',
                              right: '0',
                              transformOrigin: i % 2 === 0 ? 'left' : 'right',
                            }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ 
                              duration: 1.5, 
                              delay: i * 0.1,
                              repeat: Infinity,
                              repeatType: 'reverse',
                              repeatDelay: 4,
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
                
                <div className="col-span-12 mt-6">
                  <motion.p 
                    className="text-gray-400 text-sm max-w-3xl"
                    variants={textReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    Our proprietary Quantitative Value Analysis combines traditional value investing principles with advanced data analytics. We analyze financial statements, insider transactions, competitive positioning, and market sentiment to identify companies with strong intrinsic value that may be temporarily underpriced by the market.
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

export default FeaturedApproach;
