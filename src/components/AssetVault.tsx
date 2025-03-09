import { useEffect, useRef } from 'react';
import { LineChart, BarChart, PieChart, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Staggered card animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
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
      id="philosophy"
      ref={sectionRef}
      className="py-24 transition-all duration-700 opacity-0 translate-y-5 bg-black/50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 w-96 h-96 bg-gray-800/10 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-gray-800/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4">Our Investment Philosophy</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A disciplined approach to value investing combined with advanced quantitative models to deliver exceptional returns.</p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div 
            variants={cardVariants} 
            className="bg-black/30 p-8 rounded-lg border border-white/5 hover:border-white/10 transition-all group"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-gray-800/30 flex items-center justify-center rounded-full mb-4 group-hover:bg-gray-800/50 transition-colors">
              <LineChart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-medium mb-3">Value Investing Discipline</h3>
            <p className="text-gray-400 text-sm">
              We apply fundamental analysis to review financial statements and other observable information to identify potentially undervalued businesses and securities.
            </p>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            className="bg-black/30 p-8 rounded-lg border border-white/5 hover:border-white/10 transition-all group"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-gray-800/30 flex items-center justify-center rounded-full mb-4 group-hover:bg-gray-800/50 transition-colors">
              <BarChart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-medium mb-3">Quantitative Analysis</h3>
            <p className="text-gray-400 text-sm">
              Our advanced quantitative models analyze large datasets to identify patterns and opportunities that complement our fundamental value investing approach.
            </p>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            className="bg-black/30 p-8 rounded-lg border border-white/5 hover:border-white/10 transition-all group"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-gray-800/30 flex items-center justify-center rounded-full mb-4 group-hover:bg-gray-800/50 transition-colors">
              <PieChart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-medium mb-3">Diverse Securities Focus</h3>
            <p className="text-gray-400 text-sm">
              We analyze a broad range of investable securities, focusing on relatively liquid assets that offer the potential for significant returns with managed risk profiles.
            </p>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            className="bg-black/30 p-8 rounded-lg border border-white/5 hover:border-white/10 transition-all group"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-gray-800/30 flex items-center justify-center rounded-full mb-4 group-hover:bg-gray-800/50 transition-colors">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-medium mb-3">Market Recognition</h3>
            <p className="text-gray-400 text-sm">
              We generate profits when the value of our carefully selected investments is subsequently recognized by other market participants, creating opportunities for substantial returns.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="inline-flex items-center space-x-2 border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-3 rounded-md transition-colors">
            <span>Learn more about our approach</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
