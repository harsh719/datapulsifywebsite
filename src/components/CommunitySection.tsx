
import React from 'react';
import { Users, MessageSquare, Github, Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const CommunitySection = () => {
  return (
    <section id="community" className="gradient-bg py-14 md:py-20 lg:py-24">
      <div className="container-section">
        <h2 className="section-title">Join Our Community</h2>
        <p className="section-subtitle">
          Connect with other data professionals, share insights, and get help from our growing community.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Community Card 1 */}
          <div className="border border-white/10 bg-black/30 backdrop-blur-sm rounded-2xl p-5 md:p-6 transition-all hover:border-white/30 hover:translate-y-[-5px] opacity-0 animate-fade-in">
            <div className="flex items-center mb-4">
              <div className="p-2 md:p-3 rounded-full bg-white/5 mr-3 md:mr-4">
                <Users size={20} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold">User Forum</h3>
            </div>
            <p className="text-sm md:text-base text-gray-300 mb-4">
              Join discussions, share your use cases, and learn from other Datapulsify users.
            </p>
            <a href="#" className="text-white hover:underline inline-flex items-center text-sm md:text-base">
              Join our forum
              <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Community Card 2 */}
          <div className="border border-white/10 bg-black/30 backdrop-blur-sm rounded-2xl p-5 md:p-6 transition-all hover:border-white/30 hover:translate-y-[-5px] opacity-0 animate-fade-in animate-delay-150">
            <div className="flex items-center mb-4">
              <div className="p-2 md:p-3 rounded-full bg-white/5 mr-3 md:mr-4">
                <MessageSquare size={20} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold">Discord Channel</h3>
            </div>
            <p className="text-sm md:text-base text-gray-300 mb-4">
              Get real-time support, share tips, and connect with our team in our Discord community.
            </p>
            <a href="#" className="text-white hover:underline inline-flex items-center text-sm md:text-base">
              Join our Discord
              <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Community Card 3 */}
          <div className="border border-white/10 bg-black/30 backdrop-blur-sm rounded-2xl p-5 md:p-6 transition-all hover:border-white/30 hover:translate-y-[-5px] opacity-0 animate-fade-in animate-delay-300">
            <div className="flex items-center mb-4">
              <div className="p-2 md:p-3 rounded-full bg-white/5 mr-3 md:mr-4">
                <Github size={20} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold">Open Source</h3>
            </div>
            <p className="text-sm md:text-base text-gray-300 mb-4">
              Contribute to our project, suggest features, or report issues on our GitHub repository.
            </p>
            <a href="#" className="text-white hover:underline inline-flex items-center text-sm md:text-base">
              Visit our GitHub
              <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Testimonials / Community Stats */}
        <div className="border border-white/10 bg-black/50 backdrop-blur-sm rounded-2xl p-5 md:p-8 mt-8 md:mt-12 opacity-0 animate-fade-in animate-delay-500">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Our Growing Community</h3>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
              Join thousands of data professionals who trust Datapulsify for their GSC data needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold mb-1">500+</p>
              <p className="text-xs md:text-sm text-gray-400">Active Users</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold mb-1">50k+</p>
              <p className="text-xs md:text-sm text-gray-400">Queries Run</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold mb-1">30+</p>
              <p className="text-xs md:text-sm text-gray-400">Countries</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold mb-1">4.9/5</p>
              <p className="text-xs md:text-sm text-gray-400">User Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
