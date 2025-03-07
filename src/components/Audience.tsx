
import { useEffect, useRef } from 'react';
import { Home, Building2, Wallet, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Audience = () => {
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
            Who is Arctean for?
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Arctean serves a diverse range of clients with varying needs for protecting and transferring wealth.
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
            <div className="w-12 h-12 bg-purple-900/30 flex items-center justify-center rounded-full flex-shrink-0 group-hover:bg-purple-900/50 transition-colors">
              <Home className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Individuals & Families</h3>
              <p className="text-gray-400 text-sm">
                Easily manage and protect your property, savings, and investments. Ensure your home, vehicles, personal collections, and financial assets are securely documented and transferable to your loved ones without legal complications.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-black/30 p-8 rounded-lg border border-white/5 hover:border-white/10 transition-all flex items-start gap-4 group"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-purple-900/30 flex items-center justify-center rounded-full flex-shrink-0 group-hover:bg-purple-900/50 transition-colors">
              <Building2 className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Business Owners</h3>
              <p className="text-gray-400 text-sm">
                Ensure your company is transferred smoothly to the next generation. Document ownership structures, create succession plans, and protect your business legacy with tamper-proof digital records that prevent future disputes.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-black/30 p-8 rounded-lg border border-white/5 hover:border-white/10 transition-all flex items-start gap-4 group"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-purple-900/30 flex items-center justify-center rounded-full flex-shrink-0 group-hover:bg-purple-900/50 transition-colors">
              <Wallet className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Crypto & Stock Investors</h3>
              <p className="text-gray-400 text-sm">
                Protect and pass down your digital wealth securely. Create a comprehensive digital asset management system that ensures your crypto wallets, NFTs, stocks, and investment accounts remain accessible to your heirs.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-black/30 p-8 rounded-lg border border-white/5 hover:border-white/10 transition-all flex items-start gap-4 group"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-purple-900/30 flex items-center justify-center rounded-full flex-shrink-0 group-hover:bg-purple-900/50 transition-colors">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Anyone with a Legacy</h3>
              <p className="text-gray-400 text-sm">
                If you have assets of any kind that you want to protect and eventually pass on to others, Arctean provides the security, verification, and transfer mechanisms to ensure your wishes are honored without disputes or loss.
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
            <span>Find your solution</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Audience;
