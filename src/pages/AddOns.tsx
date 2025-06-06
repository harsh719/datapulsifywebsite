
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, Star, Zap } from 'lucide-react';

const AddOns = () => {
  const addOns = [
    {
      title: "Get Action Items",
      description: "Automatically extract actionable insights and tasks from your SEO data to prioritize your optimization efforts.",
      features: [
        "Automated action item extraction",
        "Priority-based task ranking", 
        "Integration with task management tools",
        "Custom action templates"
      ],
      gif: "https://drive.google.com/uc?export=view&id=14XzV3qvn70d0Z6oIYwaddm42UDqpQ9-O",
      popular: false
    },
    {
      title: "Keyword Tracking",
      description: "Advanced keyword position tracking with historical data, competitor analysis, and ranking insights.",
      features: [
        "Real-time keyword position tracking",
        "Historical ranking data",
        "Competitor keyword analysis",
        "SERP feature tracking",
        "Custom tracking intervals"
      ],
      gif: "https://drive.google.com/uc?export=view&id=1THzN-uevY-8GTu0t777v66ua6NyorDLf",
      popular: true
    },
    {
      title: "Quick-Win Optimizer",
      description: "Identify and execute quick SEO wins that can provide immediate ranking improvements with minimal effort.",
      features: [
        "Quick-win opportunity detection",
        "Impact vs effort analysis", 
        "One-click optimization suggestions",
        "Performance tracking",
        "ROI calculation"
      ],
      gif: "https://drive.google.com/uc?export=view&id=1dYG6bTwFufiUJmXVSxWwXiGLOwvexeyo",
      popular: false
    },
    {
      title: "SEO Data Intelligence",
      description: "Enhanced SEO data analysis with keyword types, categories, and advanced segmentation for better insights.",
      features: [
        "Advanced keyword categorization",
        "Search intent classification",
        "Semantic keyword grouping",
        "Content gap analysis",
        "Advanced reporting dashboards"
      ],
      gif: "https://drive.google.com/uc?export=view&id=1l8S8j6TRuTpbJbeqbKh8Bqudkmf0jD8k",
      popular: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 md:py-20">
          <div className="container-section">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Link 
                to="/thank-you" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Thank You Page
              </Link>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Powerful Add-ons
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Supercharge your Datapulsify experience with these specialized tools designed for advanced SEO professionals.
              </p>
            </div>

            {/* Add-ons Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {addOns.map((addon, index) => (
                <Card key={index} className="bg-black/30 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all overflow-hidden">
                  <CardContent className="p-0">
                    {/* GIF Section */}
                    <div className="relative bg-gray-800/50 p-4">
                      {addon.popular && (
                        <Badge className="absolute top-2 right-2 bg-amber-500 text-black z-10">
                          <Star size={12} className="mr-1" />
                          Popular
                        </Badge>
                      )}
                      <div className="bg-gray-900/50 rounded-lg overflow-hidden">
                        <iframe
                          src={addon.gif}
                          className="w-full h-48 md:h-56"
                          frameBorder="0"
                          allowFullScreen
                          title={`${addon.title} Demo`}
                        />
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-xl md:text-2xl font-bold mb-4">{addon.title}</h3>
                      
                      <p className="text-gray-300 mb-6">{addon.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        {addon.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle size={16} className="text-green-400 mr-3 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                        size="lg"
                      >
                        <Zap size={16} className="mr-2" />
                        Add to Plan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-gray-300 mb-6">
                  Have specific requirements? We can build custom add-ons tailored to your unique SEO workflow.
                </p>
                <Link to="/contact-us">
                  <Button variant="outline" size="lg">
                    Contact Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AddOns;
