
import React from 'react';
import MotionDashboard from './MotionDashboard';

const MotionDashboardSection = () => {
  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="section-title">See Your Data Come to Life</h2>
          <p className="section-subtitle">
            Watch how DataPulsify transforms raw GSC data into actionable insights with beautiful visualizations.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <MotionDashboard />
        </div>
        
        <div className="text-center mt-12">
          <a href="/lifetime-deal" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-full font-bold text-lg transition-all hover:from-blue-700 hover:to-purple-700 hover:scale-105 shadow-xl">
            Experience This Yourself - $47.99
          </a>
        </div>
      </div>
    </section>
  );
};

export default MotionDashboardSection;
