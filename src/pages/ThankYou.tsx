
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, Star } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ThankYou = () => {
  useEffect(() => {
    // Show a welcome toast when the page loads
    toast({
      title: "Payment Successful! 🎉",
      description: "Welcome to Datapulsify. Your account is now active."
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-20 md:py-28">
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check size={40} className="text-green-500" />
                </div>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Thank You for Your Purchase!
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Your Datapulsify Lifetime Deal is now active. You have full access to all premium features forever!
              </p>
              
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Your Purchase Details</h2>
                <div className="flex justify-between items-center border-b border-gray-800 py-3">
                  <span className="text-gray-300">Plan</span>
                  <span className="font-medium">Lifetime Deal</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 py-3">
                  <span className="text-gray-300">Amount</span>
                  <span className="font-medium">$47.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 py-3">
                  <span className="text-gray-300">Row Limit</span>
                  <span className="font-medium">75,000 rows</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">Expiration</span>
                  <span className="font-medium text-green-500">Never</span>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
                <Link to="/" className="btn-primary py-3 px-8">
                  Go to Dashboard
                </Link>
                <Link to="/contact-us" className="btn-secondary py-3 px-8">
                  Need Help?
                </Link>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-lg font-medium mb-3 flex items-center justify-center">
                  <Star className="mr-2 text-amber-400" size={20} />
                  Get the Most Out of Your Lifetime Access
                </h3>
                <ul className="text-left space-y-3 mt-4">
                  <li className="flex items-start">
                    <Check size={18} className="mr-2 text-green-500 mt-1 flex-shrink-0" />
                    <span>Visit our documentation to learn how to connect your GSC account</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="mr-2 text-green-500 mt-1 flex-shrink-0" />
                    <span>Join our community to share insights with other Datapulsify users</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="mr-2 text-green-500 mt-1 flex-shrink-0" />
                    <span>Set up your first custom query to start extracting powerful insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;
