
import React from 'react';
import { ArrowRight, Clock, DollarSign, AlertTriangle, CheckCircle } from 'lucide-react';

const FinalCtaSection = () => {
  const steps = [
    { step: 1, action: "Click the button", description: "Secure your lifetime spot" },
    { step: 2, action: "Connect GSC", description: "Takes 30 seconds" },
    { step: 3, action: "Choose your style", description: "Sheets, dashboard, or both" },
    { step: 4, action: "Pull your first data", description: "Watch the magic happen" },
    { step: 5, action: "Find your first opportunity", description: "Usually within 5 minutes" },
    { step: 6, action: "Impress everyone", description: "Clients, boss, colleagues" }
  ];

  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container-section">
        <h2 className="section-title">Your SEO Workflow Will Never Be The Same</h2>
        
        <div className="max-w-5xl mx-auto">
          {/* The Choice */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-red-400">Path 1:</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Keep doing what you're doing. Spend 2-3 hours every Monday wrestling with GSC exports, creating charts in PowerPoint, explaining data discrepancies to clients, and watching opportunities slip by.
              </p>
            </div>
            
            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Path 2:</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Get DataPulsify for $198 once – both the powerful Sheets add-on AND the beautiful dashboard – and transform how you work with SEO data forever.
              </p>
            </div>
          </div>

          {/* The Math */}
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-8 mb-12 text-center">
            <h3 className="text-2xl font-bold mb-6">The Math</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-sm text-gray-400">Time saved per month</div>
                <div className="text-2xl font-bold">15+ hours</div>
              </div>
              <div>
                <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-sm text-gray-400">Value of your time</div>
                <div className="text-2xl font-bold">$100/hour</div>
              </div>
              <div>
                <DollarSign className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-sm text-gray-400">Monthly value</div>
                <div className="text-2xl font-bold">$1,500+</div>
              </div>
              <div>
                <CheckCircle className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-sm text-gray-400">ROI</div>
                <div className="text-2xl font-bold">Week 1</div>
              </div>
            </div>
            <p className="text-lg text-gray-300 mt-6">DataPulsify cost: $198 once • Pays for itself in week 1</p>
          </div>

          {/* Main CTA */}
          <div className="text-center mb-12">
            <a href="#" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 px-12 rounded-full font-bold text-2xl transition-all hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-xl inline-block mb-4">
              🚀 Get Lifetime Access to Both Platforms - $198
            </a>
            <p className="text-gray-400">Google Sheets Add-on + Beautiful Dashboard • Only 129 spots left • 60-day guarantee</p>
          </div>

          {/* What Happens Next */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">What Happens Next</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((item, index) => (
                <div key={index} className="bg-gray-800/30 rounded-lg p-6 text-center border border-gray-700">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-semibold mb-2">{item.action}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Last Chance Warning */}
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-8 text-center mb-12">
            <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4 text-red-400">
              ⚠️ This lifetime deal expires when we hit 349 users or December 31st, 2024 – whichever comes first.
            </h3>
            <p className="text-lg text-gray-300 mb-4">
              Only 129 spots remaining. After that, it's $47/month with no grandfathering.
            </p>
            <p className="text-xl font-bold text-white">
              Don't let another Monday morning GSC wrestling match happen.
            </p>
          </div>

          {/* Secondary CTA */}
          <div className="text-center">
            <a href="#features" className="border-2 border-white text-white py-4 px-8 rounded-full font-medium text-lg transition-all hover:bg-white/10 inline-flex items-center">
              See Both Platforms in Action
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <p className="text-sm text-gray-400 mt-3 italic">
              Watch me pull data in Sheets AND create a stunning dashboard report in under 5 minutes
            </p>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-16 border-t border-gray-700 pt-8">
            <p className="text-gray-400 italic">
              Built with 8 years of SEO frustration and 6 months of obsessive coding.<br />
              Your fellow SEO who got tired of broken tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
