
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Dot } from 'recharts';

const MotionDashboard = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Data points for the trend line
  const data = [
    { month: 'Nov', clicks: 52 },
    { month: 'Dec', clicks: 120 },
    { month: 'Jan', clicks: 130 }, // Peak month
    { month: 'Feb', clicks: 115 },
    { month: 'Mar', clicks: 80 },
    { month: 'Apr', clicks: 55 }
  ];

  // Reset animation function
  const resetAnimation = () => {
    setAnimationStep(0);
    setShowText(false);
    setFadeOut(false);
  };

  // Animation sequence with loop
  useEffect(() => {
    const sequence = [
      { delay: 0, step: 1 }, // Start zoom-in
      { delay: 300, step: 2 }, // Show metrics cards
      { delay: 600, step: 3 }, // Start line animation
      { delay: 2000, step: 4 }, // Pulse on January
      { delay: 2800, step: 5 }, // Show text
      { delay: 3500, step: 6 }, // Start fade out
      { delay: 4500, step: 0 }, // Reset for loop
    ];

    const timeouts = sequence.map(({ delay, step }) => {
      return setTimeout(() => {
        if (step === 5) setShowText(true);
        if (step === 6) setFadeOut(true);
        if (step === 0) {
          // Reset all states for loop
          resetAnimation();
        } else {
          setAnimationStep(step);
        }
      }, delay);
    });

    // Set up the loop interval
    const loopInterval = setInterval(() => {
      resetAnimation();
      // Restart the sequence
      sequence.forEach(({ delay, step }) => {
        setTimeout(() => {
          if (step === 5) setShowText(true);
          if (step === 6) setFadeOut(true);
          if (step !== 0) setAnimationStep(step);
        }, delay);
      });
    }, 5000); // Loop every 5 seconds

    // Cleanup function
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
      clearInterval(loopInterval);
    };
  }, []);

  // Custom dot component for the peak month pulse
  const CustomDot = (props: any) => {
    const { cx, cy, payload } = props;
    const isPeak = payload.month === 'Jan';
    
    return (
      <Dot
        cx={cx}
        cy={cy}
        r={isPeak && animationStep >= 4 ? 6 : 4}
        fill="#3B82F6"
        className={isPeak && animationStep >= 4 ? 'animate-pulse' : ''}
      />
    );
  };

  return (
    <div className={`relative w-full h-[600px] bg-slate-900 rounded-2xl overflow-hidden transition-all duration-1000 ${
      animationStep >= 1 ? 'scale-105 opacity-100' : 'scale-100 opacity-100'
    } ${fadeOut ? 'opacity-30' : 'opacity-100'}`}>
      
      {/* Background with subtle parallax */}
      <div className={`absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 transition-transform duration-2000 ${
        animationStep >= 1 ? 'scale-110' : 'scale-100'
      }`} />

      {/* Main Content */}
      <div className="relative z-10 p-8 h-full">
        
        {/* Header */}
        <div className={`mb-8 transition-all duration-500 ${
          animationStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-3xl font-bold text-white mb-2">Search Performance</h2>
          <p className="text-slate-400">Comparing May 23 - May 23 vs May 23 - May 22</p>
        </div>

        {/* Metrics Cards */}
        <div className={`grid grid-cols-4 gap-6 mb-8 transition-all duration-700 ${
          animationStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {[
            { label: 'Total Clicks', value: '1,367', change: '0.0%' },
            { label: 'Impressions', value: '17,550', change: '0.0%' },
            { label: 'Average CTR', value: '779.0%', change: '0.0%' },
            { label: 'Average Position', value: '3.5', change: '0.0' }
          ].map((metric, index) => (
            <div 
              key={index}
              className={`bg-slate-800 rounded-xl p-6 border border-slate-700 transition-all duration-300 delay-${index * 100}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-slate-400 text-sm mb-2">{metric.label}</h3>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-green-400 text-sm flex items-center">
                <span className="mr-1">↗</span> {metric.change}
              </div>
            </div>
          ))}
        </div>

        {/* Performance Trends Chart */}
        <div className={`bg-slate-800 rounded-xl p-6 border border-slate-700 transition-all duration-500 ${
          animationStep >= 3 ? 'opacity-100' : 'opacity-70'
        }`}>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2">Performance Trends</h3>
            <p className="text-slate-400">Visualize key metrics over time</p>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94A3B8', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94A3B8', fontSize: 12 }}
                  domain={[0, 140]}
                />
                <Line
                  type="monotone"
                  dataKey="clicks"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  dot={<CustomDot />}
                  strokeDasharray={animationStep >= 3 ? "0" : "1000"}
                  strokeDashoffset={animationStep >= 3 ? "0" : "1000"}
                  style={{
                    transition: 'stroke-dashoffset 1.5s ease-out'
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Text Overlay */}
      {showText && (
        <div className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-500 ${
          showText ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-2 animate-fade-in">
              Tracking Growth.
            </h3>
            <p className="text-2xl text-slate-300 animate-fade-in animate-delay-300">
              Month by Month.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MotionDashboard;
