
import React from 'react';
import { Check, BarChart2, Database, RefreshCw } from 'lucide-react';

const steps = [
  {
    title: "Connect Your GSC Account",
    description: "One-click integration with Google Search Console",
    icon: Check
  },
  {
    title: "Choose Data & Customize Queries",
    description: "Select exactly what data you want to analyze",
    icon: Database
  },
  {
    title: "Sync to Google Sheets & Automate",
    description: "Seamlessly pull data into your spreadsheets",
    icon: RefreshCw
  },
  {
    title: "Analyze & Share Insights",
    description: "Transform data into actionable insights",
    icon: BarChart2
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-black py-20 md:py-32">
      <div className="container-section">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Getting started with Datapulsify is easy. Here's how you can begin analyzing your GSC data in minutes.
        </p>

        <div className="mt-16 relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gray-800"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.title} 
                className="relative flex flex-col items-center text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step number with icon */}
                <div className="mb-6 relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 border border-gray-700 text-white mb-4 shadow-lg">
                    <step.icon size={28} />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          
          {/* Illustration below the steps */}
          <div className="mt-16 p-4 md:p-8 border border-gray-800 rounded-xl bg-gray-900/50 opacity-0 animate-fade-in animate-delay-500">
            <div className="aspect-[16/5] bg-gray-900 rounded-lg overflow-hidden relative">
              {/* Decorative illustration of data flowing */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-8 w-full px-8">
                  {/* GSC Icon */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-2">
                      <span className="text-2xl font-bold">G</span>
                    </div>
                    <span className="text-xs text-gray-400">GSC</span>
                  </div>
                  
                  {/* Flow animation */}
                  <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden relative">
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white to-gray-500 animate-pulse-slow"></div>
                  </div>
                  
                  {/* Sheets Icon */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-2">
                      <div className="w-8 h-8 bg-gray-700 rounded"></div>
                    </div>
                    <span className="text-xs text-gray-400">Sheets</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
