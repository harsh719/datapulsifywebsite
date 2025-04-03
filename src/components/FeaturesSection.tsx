
import React from 'react';
import { 
  Link, 
  BarChart3, 
  RefreshCcw, 
  Database 
} from 'lucide-react';

const features = [
  {
    title: "One-Click GSC Integration",
    description: "Connect your Google Search Console in seconds and start pulling data instantly.",
    icon: Link,
    comingSoon: false
  },
  {
    title: "Custom Query Builder",
    description: "Filter, segment, and extract the exact data you need with easy-to-use query tools.",
    icon: Database,
    comingSoon: false
  },
  {
    title: "Automated Refresh & Scheduling",
    description: "Keep your reports always updated with automated sync options.",
    icon: RefreshCcw,
    comingSoon: true
  },
  {
    title: "Powerful Data Visualizations",
    description: "Turn raw GSC data into meaningful insights with built-in chart compatibility.",
    icon: BarChart3,
    comingSoon: true
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="gradient-bg py-20 md:py-32">
      <div className="container-section">
        <h2 className="section-title">Powerful Features</h2>
        <p className="section-subtitle">
          Everything you need to leverage Google Search Console data in your spreadsheets.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="feature-card opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 p-3 bg-black/50 rounded-lg w-fit">
                  <feature.icon size={28} className="text-white" />
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  {feature.comingSoon && (
                    <span className="text-xs py-0.5 px-2 bg-white/10 rounded-full text-gray-300">
                      Coming Soon
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
