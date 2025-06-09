
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Search, 
  Book, 
  Code, 
  Database, 
  Settings, 
  Zap, 
  Shield, 
  Download,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Documentation = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const docSections = [
    {
      title: 'Getting Started',
      icon: Book,
      description: 'Everything you need to know to get started with Datapulsify',
      articles: [
        { title: 'Quick Start Guide', link: '/support/quick-start-guide', description: 'Get up and running in under 10 minutes' },
        { title: 'Setting up Google Search Console', link: '/support/setting-up-gsc', description: 'Connect your GSC account to Datapulsify' },
        { title: 'Your First Data Export', link: '/support/first-data-export', description: 'Learn how to export your first dataset' },
        { title: 'Understanding GSC Data', link: '#', description: 'Learn about clicks, impressions, CTR, and position' }
      ]
    },
    {
      title: 'Google Sheets Integration',
      icon: Database,
      description: 'Use our powerful Google Sheets add-on for data analysis',
      articles: [
        { title: 'Installing the Add-on', link: '/support/google-sheets-addon', description: 'Step-by-step installation guide' },
        { title: 'Advanced Formulas', link: '#', description: 'Custom formulas for deeper analysis' },
        { title: 'Data Refresh & Automation', link: '#', description: 'Set up automatic data updates' },
        { title: 'Sharing & Collaboration', link: '#', description: 'Work with your team on GSC data' }
      ]
    },
    {
      title: 'API Documentation',
      icon: Code,
      description: 'Integrate Datapulsify with your existing tools',
      articles: [
        { title: 'API Authentication', link: '#', description: 'Get started with our REST API' },
        { title: 'Endpoints Reference', link: '#', description: 'Complete API endpoints documentation' },
        { title: 'Rate Limits', link: '#', description: 'Understanding API usage limits' },
        { title: 'SDKs & Libraries', link: '#', description: 'Official SDKs for popular languages' }
      ]
    },
    {
      title: 'Advanced Features',
      icon: Zap,
      description: 'Make the most of Datapulsify\'s powerful features',
      articles: [
        { title: 'Custom Filters', link: '#', description: 'Create complex data filters' },
        { title: 'Scheduled Reports', link: '#', description: 'Automate your reporting workflow' },
        { title: 'Data Visualization', link: '#', description: 'Create charts and graphs' },
        { title: 'Bulk Operations', link: '#', description: 'Process multiple properties at once' }
      ]
    },
    {
      title: 'Account Management',
      icon: Settings,
      description: 'Manage your account, billing, and team settings',
      articles: [
        { title: 'Account Settings', link: '#', description: 'Update your profile and preferences' },
        { title: 'Team Management', link: '#', description: 'Add and manage team members' },
        { title: 'Billing & Subscriptions', link: '#', description: 'Manage your subscription and payments' },
        { title: 'Security Settings', link: '#', description: 'Two-factor authentication and security' }
      ]
    },
    {
      title: 'Troubleshooting',
      icon: Shield,
      description: 'Common issues and how to resolve them',
      articles: [
        { title: 'Common Errors', link: '#', description: 'Solutions to frequent issues' },
        { title: 'Data Discrepancies', link: '#', description: 'Why data might not match GSC exactly' },
        { title: 'Performance Tips', link: '#', description: 'Optimize your queries for speed' },
        { title: 'Contact Support', link: '/contact-us', description: 'Get help from our team' }
      ]
    }
  ];

  const filteredSections = docSections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.articles.some(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen flex flex-col w-full bg-black text-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Documentation
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Complete guides, API reference, and tutorials to help you get the most out of Datapulsify. 
              Whether you're just getting started or building advanced integrations, we've got you covered.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-blue-500/10 border-blue-500/30">
              <CardHeader className="text-center">
                <Book size={32} className="mx-auto text-blue-400 mb-4" />
                <CardTitle className="text-white">New to Datapulsify?</CardTitle>
                <CardDescription className="text-gray-300">
                  Start with our quick start guide
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link to="/support/quick-start-guide">
                  <Button className="w-full">
                    Get Started
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-green-500/10 border-green-500/30">
              <CardHeader className="text-center">
                <Code size={32} className="mx-auto text-green-400 mb-4" />
                <CardTitle className="text-white">API Reference</CardTitle>
                <CardDescription className="text-gray-300">
                  Integrate with our REST API
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full" variant="outline">
                  View API Docs
                  <ExternalLink size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-purple-500/10 border-purple-500/30">
              <CardHeader className="text-center">
                <Download size={32} className="mx-auto text-purple-400 mb-4" />
                <CardTitle className="text-white">Google Sheets Add-on</CardTitle>
                <CardDescription className="text-gray-300">
                  Install our powerful add-on
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link to="/support/google-sheets-addon">
                  <Button className="w-full" variant="outline">
                    Installation Guide
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Documentation Sections */}
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Browse Documentation</h2>
            
            {filteredSections.map((section, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                      <section.icon size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">{section.title}</CardTitle>
                      <CardDescription className="text-gray-400 text-base">
                        {section.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.articles.map((article, articleIndex) => (
                      <div key={articleIndex} className="p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors">
                        {article.link.startsWith('/') ? (
                          <Link to={article.link} className="block">
                            <h4 className="text-white font-medium mb-2 hover:text-blue-400 transition-colors">
                              {article.title}
                            </h4>
                            <p className="text-gray-400 text-sm">{article.description}</p>
                          </Link>
                        ) : (
                          <a href={article.link} className="block">
                            <h4 className="text-white font-medium mb-2 hover:text-blue-400 transition-colors">
                              {article.title}
                            </h4>
                            <p className="text-gray-400 text-sm">{article.description}</p>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-16 bg-gray-900 rounded-xl p-8 border border-gray-800 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-white">Still have questions?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our documentation is constantly evolving. If you can't find what you're looking for, 
              our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us">
                <Button size="lg" className="w-full sm:w-auto">
                  Contact Support
                </Button>
              </Link>
              <Link to="/support">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-white hover:text-black">
                  Browse Support Center
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
