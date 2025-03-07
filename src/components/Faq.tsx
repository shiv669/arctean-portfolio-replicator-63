
import { useState, useEffect, useRef } from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqItems = [
  {
    question: "What types of assets can I protect with Arctean?",
    answer: "Arctean supports virtually any asset type—physical or digital. This includes real estate (land, homes, commercial property), vehicles, business ownership, financial assets (stocks, bonds, bank accounts), digital assets (cryptocurrency, NFTs), collectibles, insurance policies, and intellectual property. Our platform is designed to be comprehensive."
  },
  {
    question: "How does Arctean verify ownership of my assets?",
    answer: "Our proprietary Asset DNA™ technology uses multiple verification methods including document analysis, blockchain validation for digital assets, historical transaction verification, and metadata comparison. This multi-layered approach creates a fraud-proof verification system that doesn't rely on external government APIs."
  },
  {
    question: "Can I specify different inheritance rules for different assets?",
    answer: "Absolutely. Arctean allows you to create custom inheritance rules for each asset. You can distribute percentages of ownership to multiple heirs, set up time-based transfers (e.g., when your child turns 25), create milestone-based transfers (e.g., upon graduation), or establish conditional transfers based on specific events."
  },
  {
    question: "Is Arctean legally binding for inheritance purposes?",
    answer: "While Arctean creates a comprehensive digital record of your assets and intentions, we recommend complementing our service with standard legal documents like wills and trusts. Arctean significantly simplifies the legal process by providing clear documentation and preventing disputes over ownership or asset existence."
  },
  {
    question: "How secure is the Arctean platform?",
    answer: "Arctean employs military-grade encryption, decentralized storage, multi-factor authentication, and regular security audits. Each asset record is backed by blockchain technology for immutability. We never store complete asset information in a single location, making the system highly resistant to breaches or unauthorized access."
  },
  {
    question: "What happens if I need to update my asset information or beneficiaries?",
    answer: "You can update your asset information or beneficiary details at any time through your secure Arctean dashboard. The system maintains a complete history of changes for transparency while ensuring that only your latest instructions are implemented. All changes are securely logged with timestamps and verification."
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
              Need more information about how Arctean can secure and transfer your generational wealth? Here are answers to our most commonly asked questions.
            </p>
            <a href="#contact" className="text-sm underline underline-offset-4 text-gray-400 hover:text-white transition-colors">
              Contact us for personalized wealth security solutions
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
