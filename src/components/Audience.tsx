
import { useEffect, useRef } from 'react';
import { TrendingUp, BarChart2, DollarSign, PieChart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const InvestmentStrategies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
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
    <motion.section 
      id="investment"
      ref={sectionRef}
      className="py-24 transition-all duration-700 opacity-0 translate-y-5 bg-black/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } }
      }}
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-display mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Investment Strategies
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our investment strategies focus on identifying value opportunities across diverse markets
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          <motion.div 
            className="bg-black/30 p-8 rounded-lg border border-white/5 hover:border-white/10 transition-all flex items-start gap-4 group"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-gray-800/30 flex items-center justify-center rounded-full flex-shrink-0 group-hover:bg-gray-800/50 transition-colors">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Equities Analysis</h3>
              <p className="text-gray-400 text-sm">
                We analyze publicly traded equities across various sectors and market capitalizations to identify companies trading below their intrinsic value with strong growth potential.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-black/30 p-8 rounded-lg border border-white/5 hover:border-white/10 transition-all flex items-start gap-4 group"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-gray-800/30 flex items-center justify-center rounded-full flex-shrink-0 group-hover:bg-gray-800/50 transition-colors">
              <BarChart2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Fixed Income</h3>
              <p className="text-gray-400 text-sm">
                Our approach to fixed income securities combines yield analysis with credit assessment to identify bonds and other debt instruments offering attractive risk-adjusted returns.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-black/30 p-8 rounded-lg border border-white/5 hover:border-white/10 transition-all flex items-start gap-4 group"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-gray-800/30 flex items-center justify-center rounded-full flex-shrink-0 group-hover:bg-gray-800/50 transition-colors">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Special Situations</h3>
              <p className="text-gray-400 text-sm">
                We identify opportunities in corporate actions, restructurings, spin-offs, and other catalytic events that may create temporary mispricings in otherwise efficient markets.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-black/30 p-8 rounded-lg border border-white/5 hover:border-white/10 transition-all flex items-start gap-4 group"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-gray-800/30 flex items-center justify-center rounded-full flex-shrink-0 group-hover:bg-gray-800/50 transition-colors">
              <PieChart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Portfolio Construction</h3>
              <p className="text-gray-400 text-sm">
                Our portfolio construction methodology focuses on proper diversification, optimal position sizing, and rigorous risk management to maximize returns while minimizing downside exposure.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="#contact" className="inline-flex items-center space-x-2 border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-3 rounded-md transition-colors">
            <span>Contact for investment inquiries</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InvestmentStrategies;
