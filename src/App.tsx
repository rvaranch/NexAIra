import { useEffect } from 'react';
import Navbar from './components/Navbar';
import AgencyNavbar from './components/AgencyNavbar';
import Hero from './components/Hero';
import About from './components/About';
import OfferingsSplit from './components/OfferingsSplit';
import Services from './components/Services';
import AgencyServices from './components/AgencyServices';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIMarketingAgencyPage from './pages/AIMarketingAgencyPage';

function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '');
  const isAgencyPage = currentPath === '/ai-marketing-agency';

  useEffect(() => {
    document.title = isAgencyPage ? 'AI Marketing Agency | NexAIra' : 'NexAIra Tech Services LLP';
  }, [isAgencyPage]);

  if (isAgencyPage) {
    return (
      <div className="min-h-screen">
        <AgencyNavbar />
        <AIMarketingAgencyPage />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <OfferingsSplit />
      <About />
      <Services />
      <AgencyServices />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
