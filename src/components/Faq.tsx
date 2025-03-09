
import { useState, useEffect, useRef } from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqItems = [
  {
    question: "What is Kapital LLC's investment approach?",
    answer: "Kapital LLC employs a value investing approach aided by advanced quantitative models. We conduct thorough fundamental analysis of financial statements and other observable information to identify undervalued securities. Our goal is to generate returns when these securities' true value is recognized by the market."
  },
  {
    question: "What types of securities does S Fund, LP invest in?",
    answer: "S Fund, LP invests in a broad range of relatively liquid securities. We primarily focus on equities (stocks), fixed income instruments, and special situations where we identify significant value opportunities. Our approach is to maintain a diversified portfolio while capitalizing on our highest-conviction ideas."
  },
  {
    question: "What is the minimum investment for S Fund, LP?",
    answer: "Investment minimums and requirements are provided upon direct inquiry. We carefully select our limited partners and maintain appropriate investment minimums to ensure that our fund structure aligns with the goals of our investors. Please contact us directly for detailed information."
  },
  {
    question: "How is performance measured and reported?",
    answer: "Kapital LLC provides regular, transparent reporting to all limited partners. Our performance is measured against appropriate benchmarks, and we provide detailed analysis of investment activities, portfolio composition, and realized/unrealized gains. Reports are distributed according to the schedule outlined in our limited partnership agreement."
  },
  {
    question: "What is the fund's fee structure?",
    answer: "Our fee structure follows industry standards for investment partnerships with a management fee and performance-based incentive fee. The specific terms are detailed in our offering documents and vary based on investment class and commitment amount. Contact us directly for detailed information."
  },
  {
    question: "How does Kapital LLC manage risk?",
    answer: "Risk management is integral to our investment process. We employ diversification across securities and sectors, position sizing based on conviction and risk, ongoing monitoring of market conditions, and stress testing of our portfolio against various scenarios. Our quantitative models also help identify and mitigate potential risks."
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
              Have questions about our investment approach or partnership opportunities? Here are answers to commonly asked questions about Kapital LLC and S Fund, LP.
            </p>
            <a href="#contact" className="text-sm underline underline-offset-4 text-gray-400 hover:text-white transition-colors">
              Contact us for more detailed information about our investment strategies
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
