
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "After losing my father's property to fraud, I made sure my children will never experience that. Arctean handles my entire estate plan seamlessly.",
    author: "Michael Reynold",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 2,
    quote: "As a crypto investor, I was always worried about how my digital assets would be passed on. Arctean solved this completely with their blockchain verification.",
    author: "Sarah Chen",
    role: "Crypto Investor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
  },
  {
    id: 3,
    quote: "The peace of mind knowing my multi-generation family farm is protected from ownership disputes is worth every penny. Truly revolutionary service.",
    author: "James Wilson",
    role: "Land Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  }
];

const TestimonialsSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 6000);
  };
  
  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  
  const handlePrev = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDirection(-1);
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);
    startAutoPlay();
  };
  
  const handleNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDirection(1);
    setCurrent(prev => (prev + 1) % testimonials.length);
    startAutoPlay();
  };
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0
    })
  };
  
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/5 to-black/0"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied users who have secured their legacy with Arctean.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto py-12">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
          
          <div className="relative bg-black/30 rounded-xl border border-white/10 p-8 md:p-12 overflow-hidden">
            <div className="absolute top-4 left-4 text-purple-400/40">
              <Quote size={48} />
            </div>
            
            <div className="min-h-[300px] flex items-center justify-center">
              <AnimatePresence custom={direction} initial={false} mode="wait">
                <motion.div
                  key={testimonials[current].id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute w-full max-w-3xl"
                >
                  <div className="text-center">
                    <p className="text-xl md:text-2xl text-white mb-8 relative z-10">
                      "{testimonials[current].quote}"
                    </p>
                    
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-purple-500/30">
                        <img 
                          src={testimonials[current].image} 
                          alt={testimonials[current].author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">{testimonials[current].author}</p>
                        <p className="text-sm text-gray-400">{testimonials[current].role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full ${current === index ? 'bg-purple-500' : 'bg-white/20'}`}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    startAutoPlay();
                  }}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </div>
            
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <motion.button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center border border-white/10 text-white/70 hover:text-white hover:bg-black/70 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={20} />
              </motion.button>
            </div>
            
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <motion.button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center border border-white/10 text-white/70 hover:text-white hover:bg-black/70 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
