
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the opening hours of the Olive Press Museum?",
    answer: "The museum is open daily from 9:00 AM to 5:00 PM, except Mondays when we are closed for maintenance. Last admission is at 4:00 PM to ensure visitors have enough time to enjoy the experience."
  },
  {
    question: "Do I need to book a tour in advance?",
    answer: "While walk-ins are welcome, we recommend booking your tour in advance, especially during peak tourist seasons (May to September) to guarantee your preferred date and time slot. You can easily book through our website's booking system."
  },
  {
    question: "How long does a typical tour last?",
    answer: "Our standard tour lasts approximately 60 minutes, which includes a guided tour of the museum and a tasting session. The extended experience is 90 minutes, and the family adventure tour is 75 minutes."
  },
  {
    question: "Is the museum accessible for people with disabilities?",
    answer: "Yes, the museum is accessible for visitors with mobility challenges. We have ramps, an elevator, and accessible restrooms. Please let us know in advance if you require any specific accommodations, and we'll do our best to assist you."
  },
  {
    question: "Can I take photographs inside the museum?",
    answer: "Yes, photography for personal use is permitted in most areas of the museum. However, flash photography and commercial photography require prior permission. Please respect the 'No Photography' signs in certain sensitive artifact areas."
  },
  {
    question: "Is there a gift shop at the museum?",
    answer: "Yes, we have a gift shop where you can purchase olive oil produced using traditional methods, as well as various olive-based products, books about olive cultivation, and local crafts. The gift shop is open during museum hours."
  }
];

const Faq = () => {
  return (
    <section className="py-20" id="faq">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-green-800">Frequently Asked Questions</h2>
            <p className="text-gray-700">
              Find answers to the most common questions about visiting the Olive Press Museum.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-green-100">
                <AccordionTrigger className="text-green-800 hover:text-green-700 text-left font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">
              Have more questions? We're happy to help!
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center text-green-700 hover:text-green-800 font-medium"
            >
              Contact us for more information
              <svg 
                className="ml-2 w-4 h-4"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
