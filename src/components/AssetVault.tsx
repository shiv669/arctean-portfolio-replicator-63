
import { useEffect, useRef } from 'react';
import { Shield, RefreshCw, UserCheck, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AssetVault = () => {
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
      ref={sectionRef}
      className="py-24 transition-all duration-700 opacity-0 translate-y-5 bg-black/50 relative overflow-hidden"
    >
      {/* Background elements inspired by Stripe */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4">How Arctean Works for You</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Your ultimate digital vault for securing, managing, and passing on your wealth across generations.</p>
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
            <div className="w-12 h-12 bg-purple-900/30 flex items-center justify-center rounded-full mb-4 group-hover:bg-purple-900/50 transition-colors">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-medium mb-3">Securely Register Your Assets</h3>
            <p className="text-gray-400 text-sm">
              Add any type of asset to your personal Arctean vault—land, house, stocks, crypto, cars, or business. Each asset gets a unique, tamper-proof token proving legitimate ownership.
            </p>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            className="bg-black/30 p-8 rounded-lg border border-white/5 hover:border-white/10 transition-all group"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-purple-900/30 flex items-center justify-center rounded-full mb-4 group-hover:bg-purple-900/50 transition-colors">
              <RefreshCw className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-medium mb-3">Fraud-Proof Verification</h3>
            <p className="text-gray-400 text-sm">
              Our Asset DNA™ feature analyzes your documents, historical transactions, and metadata to detect and prevent fraud before it happens. The system continuously tracks and protects against unauthorized claims.
            </p>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            className="bg-black/30 p-8 rounded-lg border border-white/5 hover:border-white/10 transition-all group"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-purple-900/30 flex items-center justify-center rounded-full mb-4 group-hover:bg-purple-900/50 transition-colors">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-medium mb-3">Plan Wealth Distribution</h3>
            <p className="text-gray-400 text-sm">
              Create a smart, auto-executing wealth plan that distributes assets after your passing. Assign assets to your heirs with percentage-based distribution and set up timed or milestone-based transfers.
            </p>
          </motion.div>
          
          <motion.div 
            variants={cardVariants}
            className="bg-black/30 p-8 rounded-lg border border-white/5 hover:border-white/10 transition-all group"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-purple-900/30 flex items-center justify-center rounded-full mb-4 group-hover:bg-purple-900/50 transition-colors">
              <UserCheck className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-medium mb-3">Handle Loans & Shared Ownership</h3>
            <p className="text-gray-400 text-sm">
              Digitally assign shared ownership rights for a specific period. Lease your farm, give business shares to a partner, or lend an asset for money, all while preventing unauthorized reselling or misuse.
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
            <span>Secure your legacy now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AssetVault;
