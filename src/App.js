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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/index';
import Booking from './components/Booking';
import InternationalPatients from './components/InternationalPatients';
import Footer from './components/Footer';
import './App.css';
import './style/darkMode.css';

// Create a context for the night mode
export const NightModeContext = React.createContext();

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