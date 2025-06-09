
import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Waitlist from "./pages/Waitlist";
import LifetimeDeal from "./pages/LifetimeDeal";
import ThankYou from "./pages/ThankYou";
import AddOns from "./pages/AddOns";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

// Lazy load support pages
const QuickStartGuide = React.lazy(() => import('./pages/support/QuickStartGuide'));
const SettingUpGSC = React.lazy(() => import('./pages/support/SettingUpGSC'));
const GoogleSheetsAddon = React.lazy(() => import('./pages/support/GoogleSheetsAddon'));
const FirstDataExport = React.lazy(() => import('./pages/support/FirstDataExport'));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/lifetime-deal" element={<LifetimeDeal />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/add-ons" element={<AddOns />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/quick-start-guide" element={
            <Suspense fallback={<div>Loading...</div>}>
              <QuickStartGuide />
            </Suspense>
          } />
          <Route path="/support/setting-up-gsc" element={
            <Suspense fallback={<div>Loading...</div>}>
              <SettingUpGSC />
            </Suspense>
          } />
          <Route path="/support/google-sheets-addon" element={
            <Suspense fallback={<div>Loading...</div>}>
              <GoogleSheetsAddon />
            </Suspense>
          } />
          <Route path="/support/first-data-export" element={
            <Suspense fallback={<div>Loading...</div>}>
              <FirstDataExport />
            </Suspense>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
