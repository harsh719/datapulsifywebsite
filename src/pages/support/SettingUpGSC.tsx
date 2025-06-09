
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, AlertCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SettingUpGSC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full bg-black text-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="mb-8">
            <Link to="/support" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-4">
              <ArrowLeft size={16} className="mr-2" />
              Back to Support
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Setting up Google Search Console</h1>
            <p className="text-gray-300 text-lg">
              Learn how to properly set up Google Search Console for your website and connect it to Datapulsify.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-amber-500/10 border-amber-500/30">
              <CardHeader>
                <div className="flex items-center">
                  <AlertCircle size={24} className="text-amber-400 mr-3" />
                  <CardTitle className="text-amber-400">Prerequisites</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    <span>You own or manage a website</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    <span>You have a Google account</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-green-400 mr-2" />
                    <span>You can add HTML tags or upload files to your website</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Step 1: Access Google Search Console</CardTitle>
                <CardDescription className="text-gray-400">
                  Navigate to Google Search Console and sign in
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 list-decimal list-inside">
                  <li className="text-gray-300">
                    Go to{' '}
                    <a 
                      href="https://search.google.com/search-console" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 inline-flex items-center"
                    >
                      Google Search Console
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </li>
                  <li className="text-gray-300">Sign in with your Google account</li>
                  <li className="text-gray-300">Click "Start now" if this is your first time</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Step 2: Add Your Property</CardTitle>
                <CardDescription className="text-gray-400">
                  Add your website as a new property in GSC
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-white mb-2">Choose Property Type:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-medium text-green-400 mb-2">URL Prefix (Recommended)</h5>
                        <p className="text-sm text-gray-300 mb-2">Use this for specific URLs like:</p>
                        <ul className="text-sm text-gray-400 space-y-1">
                          <li>• https://example.com</li>
                          <li>• https://www.example.com</li>
                          <li>• https://subdomain.example.com</li>
                        </ul>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg">
                        <h5 className="font-medium text-blue-400 mb-2">Domain</h5>
                        <p className="text-sm text-gray-300 mb-2">Use this for entire domains:</p>
                        <ul className="text-sm text-gray-400 space-y-1">
                          <li>• example.com (includes all subdomains)</li>
                          <li>• Requires DNS verification</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300">Enter your website URL and click "Continue"</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Step 3: Verify Ownership</CardTitle>
                <CardDescription className="text-gray-400">
                  Prove that you own the website using one of several methods
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-medium text-white">Verification Methods:</h4>
                  <div className="space-y-3">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-medium text-green-400 mb-2">HTML Tag (Easiest)</h5>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-gray-300">
                        <li>Copy the meta tag provided by Google</li>
                        <li>Add it to your website's homepage HTML head section</li>
                        <li>Click "Verify" in Google Search Console</li>
                      </ol>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-medium text-blue-400 mb-2">HTML File Upload</h5>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-gray-300">
                        <li>Download the HTML file from Google</li>
                        <li>Upload it to your website's root directory</li>
                        <li>Ensure it's accessible via the provided URL</li>
                        <li>Click "Verify"</li>
                      </ol>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h5 className="font-medium text-purple-400 mb-2">Other Methods</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                        <li>Google Analytics tracking code</li>
                        <li>Google Tag Manager</li>
                        <li>DNS record (for domain properties)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Step 4: Wait for Data</CardTitle>
                <CardDescription className="text-gray-400">
                  Google needs time to collect and process your website data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-300">After verification:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-green-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Data typically appears within 1-3 days</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-green-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Historical data goes back up to 16 months</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-green-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">New data is updated daily</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Step 5: Connect to Datapulsify</CardTitle>
                <CardDescription className="text-gray-400">
                  Authorize Datapulsify to access your GSC data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2 list-decimal list-inside">
                  <li className="text-gray-300">Log in to your Datapulsify account</li>
                  <li className="text-gray-300">Go to Settings > Integrations</li>
                  <li className="text-gray-300">Click "Connect Google Search Console"</li>
                  <li className="text-gray-300">Authorize Datapulsify to access your GSC data</li>
                  <li className="text-gray-300">Select the properties you want to analyze</li>
                </ol>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-green-500/10 border border-green-500/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-400">🎉 You're Ready!</h3>
            <p className="text-gray-300 mb-4">
              Your Google Search Console is now set up and connected to Datapulsify. You can start 
              analyzing your search performance data right away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/support/quick-start-guide">
                <Button className="w-full sm:w-auto">Next: Quick Start Guide</Button>
              </Link>
              <Link to="/contact-us">
                <Button variant="outline" className="w-full sm:w-auto">Get Help</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SettingUpGSC;
