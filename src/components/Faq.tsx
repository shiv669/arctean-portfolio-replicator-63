
import { useState, useEffect, useRef } from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqItems = [
  {
    question: "What services does Arctean offer?",
    answer: "Arctean provides comprehensive wealth security solutions including digital asset management, blockchain-based inheritance systems, financial technology consulting, secure portfolio diversification, and custom wealth preservation strategies tailored to multi-generational needs."
  },
  {
    question: "How does Arctean help secure generational wealth?",
    answer: "We employ advanced technology to create robust wealth preservation systems that protect assets across generations, implement smart contract solutions for seamless inheritance, develop secure digital vaults for critical financial information, and provide ongoing monitoring against emerging threats."
  },
  {
    question: "Can legacy financial institutions integrate with your solutions?",
    answer: "Yes, our systems are designed to integrate seamlessly with traditional financial infrastructure while adding enhanced security layers. We create custom APIs and secure bridges between conventional banking systems and next-generation financial technology."
  },
  {
    question: "How do you ensure privacy and security in your wealth management tools?",
    answer: "We implement military-grade encryption, multi-signature authorization, biometric authentication, and distributed ledger technologies. All solutions undergo rigorous penetration testing and security audits, and we maintain compliance with international financial regulations."
  },
  {
    question: "What makes Arctean different from other financial security providers?",
    answer: "Our unique approach combines cutting-edge technology with traditional wealth preservation principles. We focus exclusively on multi-generational asset security, employ a team of both financial experts and security engineers, and provide truly customized solutions rather than one-size-fits-all products."
  },
  {
    question: "How does your team stay current with evolving financial threats?",
    answer: "Our dedicated research division constantly monitors emerging threats to wealth security, we maintain partnerships with leading cybersecurity firms, participate in financial technology standards development, and regularly update all client systems with the latest protection measures."
  }
];

const FaqItem = ({ 
  question, 
  answer, 
  isOpen, 
  onClick,
  delay
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void; 
  delay: number;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-3');
          }, delay);
        }
      });
    }, { threshold: 0.1 });
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={itemRef}
      className="py-5 border-b border-white/10 transition-all duration-500 opacity-0 translate-y-3"
    >
      <button
        onClick={onClick}
        className="w-full text-left flex items-center justify-between"
      >
        <span className="text-lg font-medium">{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <MinusIcon className="h-4 w-4" />
          ) : (
            <PlusIcon className="h-4 w-4" />
          )}
        </span>
      </button>
      <div
        className={cn(
          "mt-2 overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
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
  
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-black transition-all duration-700 opacity-0 translate-y-5"
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-display mb-4 md:mb-0">
            Frequently<br />
            asked<br />
            questions
          </h2>
          
          <div className="max-w-lg">
            <p className="text-sm text-gray-400 mb-6">
              Need more information? Here are the most common questions about our services and solutions for securing generational wealth.
            </p>
            <a href="#contact" className="text-sm underline underline-offset-4 text-gray-400 hover:text-white transition-colors">
              Contact us for more detailed information
            </a>
          </div>
        </div>
        
        <div className="mt-12">
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItem === index}
              onClick={() => toggleItem(index)}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
