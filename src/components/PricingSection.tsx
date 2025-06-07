
import React from 'react';
import { Check, AlertTriangle, Star, Shield, Clock } from 'lucide-react';

const PricingSection = () => {
  const features = [
    "Google Sheets Add-on (Full access)",
    "Beautiful Web Dashboard (All features)", 
    "75,000 rows per month (Handles 99% of sites)",
    "AI-powered insights (Automatic recommendations)",
    "White-label reporting (Agency-ready)",
    "Future updates included (Forever)",
    "Priority support (From someone who gets SEO)"
  ];

  const comparisons = [
    { tool: "Ahrefs", price: "$99/month", yearly: "$1,188/year" },
    { tool: "SEMrush", price: "$119/month", yearly: "$1,428/year" },
    { tool: "DataPulsify", price: "$198 once", yearly: "$0/year after", highlight: true }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-black">
      <div className="container-section">
        <h2 className="section-title">Simple Choice. Massive Value.</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Lifetime Deal Box */}
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-2 border-blue-500/50 rounded-2xl overflow-hidden shadow-2xl relative mb-12">
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-2 px-6 text-sm font-bold rounded-bl-2xl">
              🚀 LIFETIME DEAL - Limited Time
            </div>
            
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Complete DataPulsify Access</h3>
                
                {/* Pricing */}
                <div className="flex items-center justify-center mb-6">
                  <span className="text-2xl text-gray-400 line-through mr-4">$297</span>
                  <span className="text-5xl md:text-6xl font-bold text-white">$198</span>
                  <span className="text-xl text-gray-300 ml-3">Once</span>
                </div>
                
                <p className="text-lg text-green-400 font-semibold mb-8">Save $366 in year one alone</p>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center">
                <a href="#" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-full font-bold text-xl transition-all hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-xl inline-block mb-4">
                  Get Lifetime Access - $198
                </a>
                <p className="text-sm text-gray-400">60-Day Money-Back Guarantee</p>
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">vs. Monthly Tools:</h3>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div key={index} className={`flex justify-between items-center p-4 rounded-lg border ${
                  item.highlight 
                    ? 'bg-blue-900/30 border-blue-500/50' 
                    : 'bg-gray-800/30 border-gray-700'
                }`}>
                  <div className="font-semibold">{item.tool}</div>
                  <div className="text-right">
                    <div className="font-bold">{item.price}</div>
                    <div className="text-sm text-gray-400">{item.yearly}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee */}
          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-8 text-center">
            <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">60-Day Money-Back Guarantee</h3>
            <p className="text-gray-300">If DataPulsify doesn't save you at least 10 hours in the first month, get every penny back. No questions asked.</p>
          </div>

          {/* Urgency */}
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 text-center">
            <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-red-400">⚠️ Only 129 Lifetime Spots Remaining</h3>
            <p className="text-gray-300">After 349 users, it's $47/month forever. No extensions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
