
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Check, Info, MessageCircle } from 'lucide-react';

const PricingSection = () => {
  return (
    <section id="pricing" className="gradient-bg py-20 md:py-28">
      <div className="container-section">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle">
          Choose the plan that's right for you. No hidden fees, no commitments.
        </p>

        <div className="mt-8 mb-12 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm p-1 rounded-full">
            <Badge variant="outline" className="py-2 px-4 text-white border-white/30 bg-white/5 rounded-full">
              <span className="font-semibold">Limited Time Offer:</span> 
              <span className="ml-1">Free full access for the first 100 users!</span>
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Free for first 100 users plan */}
          <div className="border border-white/10 bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden transition-all hover:border-white/30 hover:translate-y-[-5px] opacity-0 animate-fade-in">
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-xl font-bold mb-2">Early Access</h3>
              <p className="text-gray-400 text-sm mb-4">For the first 100 users</p>
              <div className="flex items-baseline mb-1">
                <span className="text-3xl font-bold">$0</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <p className="text-sm text-gray-300">Full access to all features</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-0.5 text-white" />
                  <span>Unlimited queries</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-0.5 text-white" />
                  <span>Full feature access</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-0.5 text-white" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-0.5 text-white" />
                  <span>Early access to new features</span>
                </li>
              </ul>
              <a href="#" className="btn-primary w-full text-center">Get Started</a>
            </div>
          </div>

          {/* Free plan */}
          <div className="border border-white/10 bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden transition-all hover:border-white/30 hover:translate-y-[-5px] opacity-0 animate-fade-in animate-delay-150">
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-xl font-bold mb-2">Free</h3>
              <p className="text-gray-400 text-sm mb-4">After 100 users</p>
              <div className="flex items-baseline mb-1">
                <span className="text-3xl font-bold">$0</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <p className="text-sm text-gray-300">Limited rows, basic features</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-0.5 text-white" />
                  <span>Up to 10,000 rows</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-0.5 text-white" />
                  <span>Basic GSC data access</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-0.5 text-white" />
                  <span>Community support</span>
                </li>
                <li className="flex items-start text-gray-500">
                  <Info size={18} className="mr-2 mt-0.5" />
                  <span>No insights or advanced features</span>
                </li>
              </ul>
              <a href="#" className="btn-secondary w-full text-center">Sign Up</a>
            </div>
          </div>

          {/* Pro plan */}
          <div className="border border-white backdrop-blur-md rounded-2xl overflow-hidden shadow-xl shadow-white/5 transition-all hover:translate-y-[-5px] relative z-10 opacity-0 animate-fade-in animate-delay-300">
            <div className="absolute top-0 right-0 bg-white text-black py-1 px-3 text-xs font-semibold rounded-bl-lg">
              POPULAR
            </div>
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <p className="text-gray-400 text-sm mb-4">For professionals</p>
              <div className="flex items-baseline mb-1">
                <span className="text-3xl font-bold">$9</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <p className="text-sm text-gray-300">Unlimited rows & all features</p>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-0.5 text-white" />
                  <span>Unlimited rows</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-0.5 text-white" />
                  <span>All features included</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-0.5 text-white" />
                  <span>Scheduling & automation</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="mr-2 mt-0.5 text-white" />
                  <span>Priority support</span>
                </li>
              </ul>
              <a href="#" className="btn-primary w-full text-center">Upgrade to Pro</a>
            </div>
          </div>
        </div>

        {/* Enterprise Section */}
        <div className="mt-16 p-8 border border-white/20 rounded-2xl bg-black/50 backdrop-blur-sm text-center max-w-3xl mx-auto opacity-0 animate-fade-in animate-delay-500">
          <h3 className="text-2xl font-bold mb-4">Enterprise Plan</h3>
          <p className="text-gray-300 mb-6">
            Need custom integrations, API access, or team support? Contact us for enterprise pricing.
          </p>
          <a href="#" className="inline-flex items-center btn-secondary">
            <MessageCircle size={18} className="mr-2" />
            Contact Us for Pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
