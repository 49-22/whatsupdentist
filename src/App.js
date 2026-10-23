// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './components/Home';
// import Booking from './components/Booking';
// import Footer from './components/Footer';
// import './App.css';


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/booking" element={<Booking />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/index';
import Booking from './components/Booking';
import InternationalPatients from './components/InternationalPatients';
import Footer from './components/Footer';
import './App.css';
import './style/darkMode.css';

// Create a context for the night mode
export const NightModeContext = React.createContext();

const routeMetadata = {
  '/': {
    title: 'Virtual Dental Consultation | WhatsUp Dentist',
    description: "Get a dentist's first opinion from home. Book a virtual dental consultation for ₹100, share a short video of your concern, and receive clear next steps.",
    index: true
  },
  '/international-patients': {
    title: 'Dental Care in India for International Patients | WhatsUp Dentist',
    description: 'Plan dental care in India with a virtual consultation, clear treatment guidance, and help finding a suitable clinic before you travel.',
    index: true
  },
  '/booking': {
    title: 'Book a Virtual Dental Consultation | WhatsUp Dentist',
    description: 'Request a virtual dental consultation with WhatsUp Dentist and share your preferred appointment details.',
    index: false
  }
};

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = routeMetadata[pathname] || routeMetadata['/'];
    const canonicalUrl = `https://whatsupdentist.com${pathname === '/' ? '/' : pathname}`;
    document.title = metadata.title;

    const setMeta = (selector, attribute, value) => {
      const element = document.querySelector(selector);
      if (element) element.setAttribute(attribute, value);
    };

    setMeta('meta[name="description"]', 'content', metadata.description);
    setMeta('meta[name="robots"]', 'content', metadata.index ? 'index, follow, max-image-preview:large' : 'noindex, follow');
    setMeta('meta[property="og:title"]', 'content', metadata.title);
    setMeta('meta[property="og:description"]', 'content', metadata.description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'content', metadata.title);
    setMeta('meta[name="twitter:description"]', 'content', metadata.description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
}

function App() {
  const [nightMode, setNightMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('nightMode');
    if (savedMode) {
      setNightMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('nightMode', JSON.stringify(nightMode));
    if (nightMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [nightMode]);

  const toggleNightMode = () => {
    setNightMode(prevMode => !prevMode);
  };

  return (
    <NightModeContext.Provider value={{ nightMode, toggleNightMode }}>
      <Router>
        <RouteMetadata />
        <div className={`App ${nightMode ? 'dark-mode' : ''}`}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/international-patients" element={<InternationalPatients />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </NightModeContext.Provider>
  );
}

export default App;