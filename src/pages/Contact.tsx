
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Define the form schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });
  
  // Handle form submission
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", data);
      
      // Show success toast
      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you shortly.",
      });
      
      // Reset form
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container-custom py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-green-800">Contact Us</h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Have questions about our museum or want to arrange a special visit? Get in touch with us using the form below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-6 border border-green-100 shadow-sm">
              <h2 className="text-xl font-semibold mb-6 text-green-800">Send Us a Message</h2>
              
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
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us how we can help..." 
                            className="min-h-32 border-green-200"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-orange-500 hover:bg-orange-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
            
            <div className="space-y-8">
              <div className="bg-green-50 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-6 text-green-800">Visit Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-green-600 mt-1" />
                    <div>
                      <div className="font-medium text-green-800">Address</div>
                      <address className="not-italic text-gray-600">
                        Olive Press Museum<br />
                        123 Countryside Road<br />
                        Olive Village, OV 12345<br />
                        Greece
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-green-800">Email</div>
                      <a href="mailto:info@olivemuseum.com" className="text-green-600 hover:underline">
                        info@olivemuseum.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-green-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-green-800">Phone</div>
                      <a href="tel:+301234567890" className="text-green-600 hover:underline">
                        +30 123 456 7890
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden h-80 border border-green-100 shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.036747557451!2d23.727336!3d37.9795992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3a2139b7d3%3A0x7d45fda18de7f325!2sAthens%2C%20Greece!5e0!3m2!1sen!2sus!4v1659432970922!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Olive Press Museum Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
