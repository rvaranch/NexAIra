import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TrainingPage from './pages/TrainingPage';
import AgencyPage from './pages/AgencyPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/agency" element={<AgencyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
