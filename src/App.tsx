import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Home } from "./pages/Home";
import { Price } from "./pages/Price";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/layout/Footer";
import NotificationBanner from "./components/layout/NotificationBanner";
import DownloadSection from "./components/DownloadSection";
import { BlogPage } from "./pages/BlogPage";
import { AboutPage } from "./pages/AboutPage";
import { TeamPage } from "./pages/TeamPage";
import { ResellerPage } from "./pages/ResellerPage";
import { useEffect } from "react";
import { ExcelToTallyPage } from "./pages/ExcelToTallyPage";
// Legal
import { Terms } from "./components/legal/Terms";
import { PrivacyPolicy } from "./components/legal/PrivacyPolicy";
import { Dmca } from "./components/legal/Dmca";
import { RefundPolicy } from "./components/legal/RefundPolicy";
import { Disclaimer } from "./components/legal/Disclaimer";
import { BankAnalyzer } from "./components/BankAnalyzer";
import { DsaPage } from "./pages/DsaPage";
import { MsmePage } from "./pages/MsmePage";
import { ForensicPage } from "./pages/ForensicPage";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import { Customization } from "./components/Customization";
import { TaxProfessionalPricing } from "./components/Pricing/TaxProfessionalPricing";
import Checkout from "./components/Checkout";
// import MouseMoveEffect from "./components/components/ui/mouse-move-effect";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="relative z-10">
          <NotificationBanner />
          <FloatingWhatsAppButton />
          <Header />
          {/* <MouseMoveEffect /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/price" element={<Price />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/download" element={<DownloadSection />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/reseller" element={<ResellerPage />} />
            <Route path="/bank-statement-analyzer" element={<BankAnalyzer />} />
            <Route path="/excel-to-tally" element={<ExcelToTallyPage />} />
            <Route path="/dsa" element={<DsaPage />} />
            {/* Legal */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/dmca" element={<Dmca />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/msme" element={<MsmePage />} />
            <Route path="/fund-trail-analyzer" element={<ForensicPage />} />
            <Route path="/customization" element={<Customization />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/tax-professional-plan"
              element={<TaxProfessionalPricing />}
            />
          </Routes>
          {location.pathname !== "/checkout" && <Footer />}
        </div>
      </div>
    </>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
