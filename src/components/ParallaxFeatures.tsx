
import { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const features = [
  {
    title: "Asset Registration",
    description: "Our intuitive dashboard makes adding new assets simple. Just upload your documents, fill in basic details, and your asset is instantly protected.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    title: "Wealth Distribution Planning",
    description: "Our visual inheritance planner allows you to drag and drop assets to beneficiaries, set conditions, and see exactly how your wealth will be distributed.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Beneficiary Management",
    description: "Keep your loved ones informed with customizable notifications. They'll receive only the information you want them to have, exactly when you want them to have it.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    color: "from-indigo-500/20 to-pink-500/20"
  }
];

const ParallaxFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  
  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  // Floating animation variant
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <section className="py-20 md:py-32 overflow-hidden relative">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(138, 107, 246, 0.15) 0%, rgba(0, 0, 0, 0) 50%)"
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4">Experience Seamless Security</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Arctean combines cutting-edge technology with intuitive design to provide you with a seamless asset protection experience.
          </p>
        </motion.div>
        
        <div ref={containerRef} className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="relative p-6">
                <motion.div 
                  style={{ 
                    y: index === 0 ? y1 : index === 1 ? y2 : y3,
                    x: index === 0 ? x1 : index === 1 ? 0 : x2,
                    rotateZ: index === 0 ? rotate1 : index === 1 ? 0 : rotate2,
                    scale: scale
                  }}
                  className="mb-6 rounded-lg overflow-hidden aspect-video relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-50 group-hover:opacity-70 transition-opacity duration-500 z-10`}></div>
                  
                  <motion.img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  <motion.div
                    className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    variants={floatingAnimation}
                    initial="initial"
                    animate="animate"
                  >
                    <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-medium text-white">Explore {feature.title}</span>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl md:text-2xl font-display mb-3">{feature.title}</h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
                
                <motion.div 
                  className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mt-6"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            ))}
          </div>
          
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-64 h-64 rounded-full"
            style={{
              background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.15), rgba(0, 0, 0, 0) 70%)"
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ParallaxFeatures;
