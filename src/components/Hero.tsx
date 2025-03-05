import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, Users } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const dotsRef = useRef<HTMLDivElement>(null);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [visitors, setVisitors] = useState<string>("1-5");
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const getPrice = () => {
    switch(visitors) {
      case "1-5": return 50;
      case "6-10": return 90;
      case "11-20": return 160;
      case "21-30": return 200;
      default: return 50;
    }
  };
  
  const handleProceedCheckout = () => {
    if (!date) {
      toast({
        title: "Please select a date",
        description: "You need to select a date for your visit",
        variant: "destructive",
      });
      return;
    }
    
    sessionStorage.setItem('booking', JSON.stringify({
      date: date.toISOString(),
      visitors,
      price: getPrice(),
    }));
    
    navigate('/checkout');
  };
  
  useEffect(() => {
    if (!dotsRef.current) return;
    
    const interval = setInterval(() => {
      const dots = dotsRef.current?.children;
      if (!dots) return;
      
      const randomDot = Math.floor(Math.random() * dots.length);
      dots[randomDot].classList.add('animate-pulse-light');
      
      setTimeout(() => {
        dots[randomDot].classList.remove('animate-pulse-light');
      }, 2000);
    }, 300);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594076419199-5f7c32a69657?w=1920&q=90" 
          alt="Historic olive press background" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <h1 className="h1 mb-1 animate-fade-in-up [animation-delay:200ms] text-green-800">
            Historic Olive Press
            <br />
            <span className="text-green-600">Since 1860</span>
          </h1>
          <p className="text-xl mb-6 animate-fade-in-up [animation-delay:300ms] text-gray-700 max-w-2xl">
            Experience the traditional methods of olive oil production in our beautifully preserved 19th century museum.
          </p>
          
          <div 
            ref={dotsRef}
            className="flex items-center space-x-2 mt-4 mb-12 animate-fade-in-up [animation-delay:400ms]"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="blur-dot"></div>
            ))}
          </div>
        </div>
        
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-md p-6 mb-20 max-w-4xl animate-fade-in-up [animation-delay:500ms] border border-green-100">
          <h2 className="text-2xl font-display font-bold mb-6 text-green-800">Book Your Visit</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Select Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left font-normal border-green-200"
                  >
                    <Calendar className="mr-2 h-4 w-4 text-green-600" />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Number of Visitors</label>
              <Select defaultValue="1-5" onValueChange={setVisitors}>
                <SelectTrigger className="border-green-200">
                  <SelectValue placeholder="Select group size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-5">1-5 people (€50)</SelectItem>
                  <SelectItem value="6-10">6-10 people (€90)</SelectItem>
                  <SelectItem value="11-20">11-20 people (€160)</SelectItem>
                  <SelectItem value="21-30">21-30 people (€200)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-end">
              <Button 
                onClick={handleProceedCheckout}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                Proceed to Checkout
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/20 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(72,201,176,0.15)_0%,rgba(255,255,255,0)_50%)]"></div>
    </section>
  );
};

export default Hero;
