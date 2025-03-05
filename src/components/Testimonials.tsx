
import { StarIcon, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Visiting the Olive Press Museum was like stepping back in time. The tour guide was incredibly knowledgeable and passionate about the history of olive oil production. Seeing the original equipment still in working condition was fascinating!",
    author: "Maria S.",
    location: "Athens, Greece",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    text: "A highlight of our family vacation! The kids were enthralled by the demonstration of how olive oil was traditionally made. The tasting at the end was excellent and we brought home some wonderful olive oil.",
    author: "James T.",
    location: "London, UK",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "As someone interested in sustainable agriculture, I found the tour extremely informative. It's amazing how efficient the traditional methods were compared to modern industrial processes. Highly recommend!",
    author: "Laura M.",
    location: "Barcelona, Spain",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-green-50" id="testimonials">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-green-800">Visitor Experiences</h2>
          <p className="text-gray-700">
            Discover what our visitors have to say about their time at the Olive Press Museum.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-green-100 flex flex-col h-full hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-orange-500 fill-orange-500' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-green-100 fill-green-50" />
              </div>
              
              <blockquote className="flex-1 pt-4">
                <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
              </blockquote>
              
              <footer className="flex items-center mt-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-green-800">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </footer>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 text-green-800">
            <span className="font-medium mr-2">4.8/5</span> average rating from over 200 visitors
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
