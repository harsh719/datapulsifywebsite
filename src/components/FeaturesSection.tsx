
import React from 'react';
import { 
  FileSpreadsheet, 
  BarChart3, 
  Zap, 
  Filter,
  Database,
  Eye,
  Brain,
  FileImage,
  RefreshCw,
  Target
} from 'lucide-react';

const FeaturesSection = () => {
  const sheetFeatures = [
    {
      title: "One-Click GSC Integration",
      description: "Connect your Google Search Console in seconds. No technical setup, no API keys, no headaches. Just authorize once and pull data forever.",
      icon: Zap
    },
    {
      title: "Smart Query Builder", 
      description: "Filter data the way you actually think about it: 'Show me pages that rank 4-10 but get no clicks' or 'Find keywords we lost rankings for this month'",
      icon: Filter
    },
    {
      title: "Raw Data Mastery",
      description: "Export exactly what you need with no sampling limits. Your data stays in your Google Sheets forever, formatted exactly how you want it.",
      icon: Database
    },
    {
      title: "Advanced Analytics",
      description: "Click gap analysis, automated rank tracking with historical data, and custom queries for any SEO scenario.",
      icon: BarChart3
    }
  ];

  const dashboardFeatures = [
    {
      title: "Visual Click Gap Analysis",
      description: "See opportunities jump off the screen with interactive charts that highlight missed traffic. Color-coded rankings make it impossible to miss quick wins.",
      icon: Eye
    },
    {
      title: "Performance Trend Visualizations",
      description: "Month-over-month ranking movements that tell a story, CTR trends with context, position distribution visualizations that impress clients.",
      icon: BarChart3
    },
    {
      title: "AI-Powered Insights",
      description: "Get automatic recommendations: 'Your page X could gain 40% more clicks with a title tweak' or 'These 12 keywords are about to break into page 1'",
      icon: Brain
    },
    {
      title: "Client-Ready Reporting",
      description: "Create reports so beautiful, clients think you hired a designer. Drag-and-drop builder, white-label branding, one-click PDF exports.",
      icon: FileImage
    }
  ];

  return (
    <section id="features" className="gradient-bg py-20 md:py-32">
      <div className="container-section">
        <h2 className="section-title">Two Powerful Platforms. One Seamless Workflow.</h2>
        <p className="section-subtitle">
          Choose your weapon: Deep spreadsheet analysis or stunning visual insights. Or use both – they sync perfectly.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 mt-16">
          {/* Google Sheets Add-on */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center mb-4 p-3 bg-green-600/20 rounded-full border border-green-500/30">
                <FileSpreadsheet className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Google Sheets Add-on</h3>
              <p className="text-lg text-blue-400 mb-2">Work Where You Live</p>
              <p className="text-gray-400 italic">Perfect for data analysts and spreadsheet power users</p>
            </div>
            
            <div className="space-y-6">
              {sheetFeatures.map((feature, index) => (
                <div key={index} className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-start">
                    <div className="bg-green-600/20 rounded-lg p-2 mr-4 flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Web Dashboard */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center mb-4 p-3 bg-purple-600/20 rounded-full border border-purple-500/30">
                <BarChart3 className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Beautiful Web Dashboard</h3>
              <p className="text-lg text-purple-400 mb-2">Impress Everyone</p>
              <p className="text-gray-400 italic">When you need stunning visuals and effortless insights</p>
            </div>
            
            <div className="space-y-6">
              {dashboardFeatures.map((feature, index) => (
                <div key={index} className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-start">
                    <div className="bg-purple-600/20 rounded-lg p-2 mr-4 flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cross-Platform Magic */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/30 max-w-4xl mx-auto">
            <RefreshCw className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Cross-Platform Magic</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Dashboard insights sync instantly with your sheets. Export visualizations to spreadsheets. Import sheet calculations to dashboard. Best of both worlds, zero friction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
