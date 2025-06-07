
import React from 'react';
import { AlertTriangle, CheckCircle, Zap, Target } from 'lucide-react';

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container-section">
        <h2 className="section-title">The Problem Every SEO Knows Too Well</h2>
        
        {/* Problem Description */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8 mb-8">
            <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              You know the drill. It's Monday morning, client reports are due, and you're staring at another messy GSC export that's missing half the data you need. You spend 2 hours cleaning what should have taken 2 minutes to pull.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              Then your boss walks in asking for "a quick visual summary" and you're back to creating charts in PowerPoint like it's 2010.
            </p>
            <p className="text-2xl font-bold text-white">Sound familiar?</p>
          </div>
        </div>

        {/* Solution Bridge */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed text-center">
            Most GSC tools are built by developers who've never actually <em>done</em> SEO. They don't understand that you need <strong>click gap analysis at 3 AM</strong>, or that your boss wants to see <strong>exactly which pages dropped rankings</strong> in a beautiful dashboard that doesn't look like a spreadsheet screenshot.
          </p>
        </div>

        {/* What Makes Us Different */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">What Makes Us Different</h3>
          
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <p className="text-xl md:text-2xl font-bold text-white mb-4">
                I built DataPulsify during my 8th year as an SEO professional
              </p>
              <p className="text-lg text-gray-300">
                – right after spending another weekend manually piecing together client reports that should have been automated years ago.
              </p>
            </div>
            
            <p className="text-lg text-gray-300 mb-8 text-center leading-relaxed">
              DataPulsify isn't just another tool. It's a complete SEO data ecosystem with <strong>two powerful ways to work:</strong>
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/30 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-blue-400 mr-3" />
                  <h4 className="text-xl font-bold">Google Sheets Add-on</h4>
                </div>
                <p className="text-gray-300">Work where you already live – inside your familiar spreadsheets</p>
              </div>
              
              <div className="bg-black/30 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-purple-400 mr-3" />
                  <h4 className="text-xl font-bold">Beautiful Web Dashboard</h4>
                </div>
                <p className="text-gray-300">When you need to impress clients or dive deep into visual analysis</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 mt-8 text-center leading-relaxed">
              Every feature exists because I needed it. Every workflow is designed around how SEOs actually work, not how developers think we work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
