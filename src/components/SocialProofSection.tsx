
import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProofSection = () => {
  const testimonials = [
    {
      quote: "Finally, someone who gets it. I've been doing SEO for 6 years and this is the first tool that actually works the way I think.",
      name: "Sarah M.",
      position: "SEO Manager"
    },
    {
      quote: "The dashboard presentations have completely changed how our clients see our work. We've increased our retainer fees by 40% since using DataPulsify.",
      name: "Mike R.",
      position: "Agency Owner"
    },
    {
      quote: "I was spending 3 hours every Monday on data prep. Now it takes 10 minutes and looks 10x better.",
      name: "Jessica L.",
      position: "In-House SEO"
    }
  ];

  return (
    <section className="gradient-bg py-20 md:py-32">
      <div className="container-section">
        <h2 className="section-title">Built by SEOs, Loved by SEOs</h2>
        
        {/* Rating Badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-600/20 border border-yellow-500/30 rounded-full py-3 px-6">
            <div className="flex mr-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9/5 rating from 200+ SEO professionals</span>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all">
              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              
              <blockquote className="text-lg text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-gray-700 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-gray-400 text-sm">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
