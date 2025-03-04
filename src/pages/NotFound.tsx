
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="inline-flex items-center space-x-2 mb-6">
          <div className="blur-dot"></div>
          <div className="blur-dot"></div>
          <div className="blur-dot"></div>
          <div className="blur-dot"></div>
        </div>
        
        <h1 className="text-7xl font-display font-bold mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">
          This page does not exist in our universe
        </p>
        
        <a 
          href="/" 
          className="inline-flex items-center space-x-2 text-purple-500 hover:text-purple-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
