
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
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
  
  return (
    <section className="py-20 md:py-32 overflow-hidden relative">
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
            <div className="relative p-6">
              <motion.div 
                style={{ y: y1 }}
                className="mb-6 rounded-lg overflow-hidden aspect-video"
              >
                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg"></div>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <h3 className="text-xl md:text-2xl font-display mb-3">Asset Registration</h3>
                <p className="text-gray-400">
                  Our intuitive dashboard makes adding new assets simple. Just upload your documents, fill in basic details, and your asset is instantly protected.
                </p>
              </motion.div>
            </div>
            
            <div className="relative p-6">
              <motion.div 
                style={{ y: y2 }}
                className="mb-6 rounded-lg overflow-hidden aspect-video"
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"></div>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <h3 className="text-xl md:text-2xl font-display mb-3">Wealth Distribution Planning</h3>
                <p className="text-gray-400">
                  Our visual inheritance planner allows you to drag and drop assets to beneficiaries, set conditions, and see exactly how your wealth will be distributed.
                </p>
              </motion.div>
            </div>
            
            <div className="relative p-6">
              <motion.div 
                style={{ y: y3 }}
                className="mb-6 rounded-lg overflow-hidden aspect-video"
              >
                <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-pink-500/20 rounded-lg"></div>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <h3 className="text-xl md:text-2xl font-display mb-3">Beneficiary Management</h3>
                <p className="text-gray-400">
                  Keep your loved ones informed with customizable notifications. They'll receive only the information you want them to have, exactly when you want them to have it.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxFeatures;
