// import React from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <section id="header" className="bg-light p-3">
//       <nav className="navbar navbar-expand-lg navbar-light" id="nav" style={{ backgroundColor: '#3b6ea0', padding: '30px' }}>
//         <div className="container">
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link className="nav-link text-white mx-3" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-white mx-3" to="/#intro">About Us</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-white mx-3" to="/#service">Services</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-white mx-3" to="/booking">Slot Booking</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </section>
//   );
// }

// export default Header;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function Header() {
//   const [nightMode, setNightMode] = useState(false);

//   useEffect(() => {
//     const savedMode = localStorage.getItem('nightMode');
//     if (savedMode) {
//       setNightMode(JSON.parse(savedMode));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('nightMode', JSON.stringify(nightMode));
//     if (nightMode) {
//       document.body.classList.add('dark-mode');
//     } else {
//       document.body.classList.remove('dark-mode');
//     }
//   }, [nightMode]);

//   const toggleNightMode = () => {
//     setNightMode(!nightMode);
//   };

//   return (
//     <section id="header" className={`bg-light p-3 ${nightMode ? 'dark-mode' : ''}`}>
//       <nav className="navbar navbar-expand-lg navbar-light" id="nav" style={{ backgroundColor: nightMode ? '#1f2937' : '#3b6ea0', padding: '30px' }}>
//         <div className="container">
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link className="nav-link text-white mx-3" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-white mx-3" to="/#intro">About Us</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-white mx-3" to="/#service">Services</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link text-white mx-3" to="/booking">Slot Booking</Link>
//               </li>
//             </ul>
//             <button onClick={toggleNightMode} className="btn btn-outline-light ms-3">
//               {nightMode ? 'Light Mode' : 'Night Mode'}
//             </button>
//           </div>
//         </div>
//       </nav>
//     </section>
//   );
// }

// export default Header;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Header() {
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
    setNightMode(!nightMode);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="header" className={`bg-light ${nightMode ? 'dark-mode' : ''}`}>
      <nav className={`navbar navbar-expand-lg navbar-${!nightMode ? 'light': 'dark'}`} id="nav" style={{ backgroundColor: nightMode ? '#1f2937' : '#3b6ea0', padding: '15px' }}>
        <div className="container">
          {/* Logo Section */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <div className="d-flex align-items-center">
              <span className="fs-1 me-2" role="img" aria-label="tooth">
                <img src={logo} alt="WhatsUp Dentist Logo" style={{ height: '100px', width: 'auto' }} className="me-2" />
              </span>
            </div>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white mx-2" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white mx-2" to="/" onClick={() => scrollToSection('feature')}>How it works</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white mx-2" to="/" onClick={() => scrollToSection('intro')}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white mx-2" to="/" onClick={() => scrollToSection('client')}>Testimonials</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white mx-2" to="/" onClick={() => scrollToSection('service')}>Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white mx-2" to="/" onClick={() => scrollToSection('newsletter')}>Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white mx-2" to="/booking">Slot Booking</Link>
              </li>
            </ul>
            <button onClick={toggleNightMode} className="btn btn-outline-light ms-2">
              {nightMode ? 'Light Mode' : 'Night Mode'}
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;

