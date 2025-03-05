
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tourOptions = [
  {
    title: "Standard Tour",
    description: "A comprehensive 60-minute tour of the olive press museum with an expert guide explaining the traditional processes.",
    duration: "60 minutes",
    includes: ["Guided tour", "Olive oil tasting", "Historical explanation"],
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80"
  },
  {
    title: "Extended Experience",
    description: "An in-depth 90-minute experience including the standard tour plus a hands-on demonstration of the traditional pressing methods.",
    duration: "90 minutes",
    includes: ["Guided tour", "Olive oil tasting", "Hands-on demonstration", "Small bottle of olive oil"],
    image: "https://images.unsplash.com/photo-1603796910494-d9f5a24a76a1?w=800&q=80"
  },
  {
    title: "Family Adventure",
    description: "A kid-friendly 75-minute tour with interactive activities and simplified explanations perfect for families with children.",
    duration: "75 minutes",
    includes: ["Child-friendly guide", "Interactive activities", "Tasting session", "Souvenir for kids"],
    image: "https://images.unsplash.com/photo-1615291115661-c2bdba3755ad?w=800&q=80"
  }
];

const Tours = () => {
  return (
    <section className="py-20" id="tours">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-green-800">Available Tours & Experiences</h2>
          <p className="text-gray-700">
            Discover the fascinating world of traditional olive oil production through our carefully crafted tour experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourOptions.map((tour, index) => (
            <Card key={index} className="overflow-hidden border border-green-100 hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-green-800">{tour.title}</CardTitle>
                <CardDescription>{tour.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{tour.description}</p>
                <div className="space-y-2">
                  <p className="font-medium text-sm text-green-700">Includes:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {tour.includes.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
