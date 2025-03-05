
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, CalendarIcon, UsersIcon, CreditCard } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

// Define the form schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(7, { message: "Please enter a valid phone number" }),
});

type BookingInfo = {
  date: string;
  visitors: string;
  price: number;
};

const Checkout = () => {
  const navigate = useNavigate();
  const [bookingInfo, setBookingInfo] = useState<BookingInfo | null>(null);
  const { toast } = useToast();
  
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
  });
  
  // Load booking info from sessionStorage
  useEffect(() => {
    const savedBooking = sessionStorage.getItem('booking');
    if (savedBooking) {
      setBookingInfo(JSON.parse(savedBooking));
    } else {
      // Redirect to home if no booking info
      navigate('/');
    }
  }, [navigate]);
  
  // Handle form submission
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", data);
    console.log("Booking info:", bookingInfo);
    
    // Show success toast
    toast({
      title: "Booking completed!",
      description: "Your tour has been booked successfully. We've sent the details to your email.",
    });
    
    // Clear booking info
    sessionStorage.removeItem('booking');
    
    // Redirect to home
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };
  
  if (!bookingInfo) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container-custom py-20">
        <div className="max-w-3xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8 text-green-700 hover:text-green-800 hover:bg-green-50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <h1 className="text-3xl font-display font-bold mb-8 text-green-800">Complete Your Booking</h1>
          
          <div className="bg-green-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-green-800">Booking Summary</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CalendarIcon className="h-5 w-5 mr-3 text-green-600 mt-0.5" />
                <div>
                  <div className="font-medium">Date</div>
                  <div className="text-gray-600">
                    {format(new Date(bookingInfo.date), 'EEEE, MMMM d, yyyy')}
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <UsersIcon className="h-5 w-5 mr-3 text-green-600 mt-0.5" />
                <div>
                  <div className="font-medium">Group Size</div>
                  <div className="text-gray-600">{bookingInfo.visitors} people</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <CreditCard className="h-5 w-5 mr-3 text-green-600 mt-0.5" />
                <div>
                  <div className="font-medium">Total Price</div>
                  <div className="text-xl font-semibold text-green-800">€{bookingInfo.price}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-green-100 shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-green-800">Visitor Information</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="border-green-200" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} className="border-green-200" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 234 567 8900" {...field} className="border-green-200" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                  Complete Booking
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
