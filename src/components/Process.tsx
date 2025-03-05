
import { Check } from "lucide-react";

const processSteps = [
  {
    title: "Harvesting",
    description: "The olives are carefully handpicked when they reach optimal ripeness, usually between November and January.",
    icon: "🌿"
  },
  {
    title: "Washing",
    description: "Harvested olives are thoroughly washed to remove leaves, twigs, and other impurities before processing.",
    icon: "💧"
  },
  {
    title: "Crushing",
    description: "Traditional stone mills crush the olives into a paste, breaking the fruit's cells to release the oil.",
    icon: "🔄"
  },
  {
    title: "Pressing",
    description: "The olive paste is spread on fiber discs, which are stacked and pressed to extract the liquid content.",
    icon: "⚙️"
  },
  {
    title: "Separation",
    description: "The liquid extracted contains oil and water, which are separated through natural decantation or centrifugation.",
    icon: "🫙"
  },
  {
    title: "Bottling",
    description: "The fresh olive oil is stored in stainless steel containers and then bottled for consumption or sale.",
    icon: "🍾"
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-white" id="process">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-green-800">The Traditional Process</h2>
          <p className="text-gray-700">
            Our museum demonstrates the time-honored methods of olive oil production that have been used for generations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Connecting line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-6 h-[calc(100%+2.5rem)] w-0.5 bg-green-100" />
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 bg-green-50 rounded-xl border border-green-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">The Quality Difference</h3>
              <p className="text-gray-700 mb-6">
                Traditional cold-pressed olive oil, like that produced in our historic mill, offers superior quality and nutritional value compared to modern industrial methods.
              </p>
              <ul className="space-y-2">
                {[
                  "Lower acidity levels preserving natural flavors",
                  "Higher content of beneficial polyphenols and antioxidants",
                  "Authentic aroma and taste reflective of local terroir",
                  "Sustainable production with minimal environmental impact"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="mt-1 mr-2 h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1593167751025-8020d974e11f?w=800&q=80" 
                alt="Traditional olive oil quality"
                className="w-full h-full object-cover rounded-lg" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
