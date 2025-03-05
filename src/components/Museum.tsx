
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Museum = () => {
  return (
    <section className="py-20 bg-green-50" id="museum">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-green-800">Our Rich Heritage</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Established in 1860, our olive press museum stands as a testament to the traditional methods of olive oil production that have shaped the agricultural landscape of our region for centuries.
              </p>
              <p>
                The museum preserves the original stone mills, wooden presses, and filtration systems that were once the heart of local olive oil production. These historic machines tell the story of the technical ingenuity of past generations and their deep connection to the land.
              </p>
              <p>
                Today, we invite visitors to step back in time and experience the authentic processes that created what was once called "liquid gold" - the extra virgin olive oil that remains central to Mediterranean cuisine and culture.
              </p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <Carousel className="w-full">
              <CarouselContent>
                {[
                  "https://images.unsplash.com/photo-1558466570-6d1f2afb32a3?w=800&q=80",
                  "https://images.unsplash.com/photo-1593167751025-8020d974e11f?w=800&q=80",
                  "https://images.unsplash.com/photo-1594076419199-5f7c32a69657?w=800&q=80",
                  "https://images.unsplash.com/photo-1592498097178-3fcecf71b529?w=800&q=80"
                ].map((src, index) => (
                  <CarouselItem key={index}>
                    <AspectRatio ratio={16/9}>
                      <img 
                        src={src} 
                        alt={`Historic olive press museum image ${index + 1}`} 
                        className="object-cover w-full h-full rounded-xl"
                      />
                    </AspectRatio>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-green-800" />
              <CarouselNext className="text-green-800" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Museum;
