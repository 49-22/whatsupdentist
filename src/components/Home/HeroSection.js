// import React from 'react';
// import { Link } from 'react-router-dom';

// const HeroSection = ({ heroImageRef, heroImage }) => (
//   <section id="hero" className="d-flex align-items-center justify-content-center text-center py-5">
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-6 text-lg-start text-center">
//           <h3 className="display-4 mb-2">Hey!</h3>
//           <h2 className="display-5 mb-3">Welcome to</h2>
//           <h1 className="display-1 text-success">WhatsUp Dentist!!</h1>
//           <p className="fs-5 mb-5">Your Virtual Smile Care Partner: Expert Advice Anytime, Anywhere</p>
//           <Link to="/booking" className="custom-btn mt-3">Book Now</Link>
//         </div>
//         <div className="col-lg-6 text-center d-none d-lg-block">
//           <img 
//             ref={heroImageRef}
//             src={heroImage} 
//             className="img-fluid slide-image" 
//             alt="Gunda Namratha" 
//           />
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default HeroSection;


// import React, { useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import heroImage from '../../images/1.png';

// function HeroSection() {
//   const heroImageRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('slide-in');
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (heroImageRef.current) {
//       observer.observe(heroImageRef.current);
//     }

//     return () => {
//       if (heroImageRef.current) {
//         observer.unobserve(heroImageRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section id="hero" className="d-flex align-items-center justify-content-center text-center py-5">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-6 text-lg-start text-center order-2 order-lg-1">
//             <h3 className="display-4 mb-2">Hey!</h3>
//             <h2 className="display-5 mb-3">Welcome to</h2>
//             <h1 className="display-1" style={{ color: '#3b6ea0' }}>WhatsUp Dentist!!</h1>
//             <p className="fs-5 mb-5">Your Virtual Smile Care Partner: Expert Advice Anytime, Anywhere</p>
//             <Link to="/booking" className="custom-btn mt-3">Book Now</Link>
//           </div>
//           <div className="col-lg-6 text-center mb-4 mb-lg-0 order-1 order-lg-2">
//             <img 
//               ref={heroImageRef}
//               src={heroImage} 
//               className="img-fluid slide-image" 
//               alt="Dental Care Hero" 
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import heroImage from '../../images/1.png';

// function HeroSection() {
//   return (
//     <section id="hero" className="d-flex align-items-center justify-content-center text-center py-5">
//       <div className="container">
//         <div className="row">
//           <div className="col-12 col-lg-6 text-center text-lg-start">
//             <h3 className="display-4 mb-2">Hey!</h3>
//             <h2 className="display-5 mb-3">Welcome to</h2>
//             <h1 className="display-1" style={{ color: '#3b6ea0' }}>WhatsUp Dentist!!</h1>
//             <p className="fs-5 mb-5">Your Virtual Smile Care Partner: Expert Advice Anytime, Anywhere</p>
//             <Link to="/booking" className="custom-btn mt-3">Book Now</Link>
//           </div>
//           <div className="col-lg-6 text-center d-none d-lg-block">
//             <img 
//               src={heroImage} 
//               className="img-fluid slide-image" 
//               alt="Dental Care Hero" 
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;



import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../images/1.png';

function HeroSection() {
  const heroImageRef = useRef(null);

  useEffect(() => {
    const image = heroImageRef.current;

    if (!image) {
      return undefined;
    }

    if (typeof window === 'undefined' || typeof window.IntersectionObserver === 'undefined') {
      image.classList.add('slide-in');
      return undefined;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(image);

    return () => {
      observer.unobserve(image);
    };
  }, []);

  return (
    <section id="hero" className="d-flex align-items-center justify-content-center text-center py-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            {/* <h3 className="display-4 mb-2">Hey!</h3> */}
            <h2 className="display-5 mb-3">Smile with confidence</h2>
            <h1 className="display-2" style={{ color: '#3b6ea0' }}>WhatsUp Dentist</h1>
            <p className="fs-5 mb-5">Trusted virtual dental consultations from India, with a clear path to affordable treatment and a smoother recovery journey.</p>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              <Link to="/booking" className="custom-btn mt-3">Book your consultation</Link>
              <Link to="/international-patients" className="btn btn-outline-primary mt-3 px-4 py-3">For international patients</Link>
            </div>
          </div>
          <div className="col-lg-6 text-center d-none d-lg-block">
            <div className="hero-visual-card slide-image" ref={heroImageRef}>
              <img 
                src={heroImage} 
                className="img-fluid hero-image" 
                alt="Dental Care Hero" 
              />
              <div className="hero-badge">Consultation at ₹100/-</div>
              <div className="hero-overlay-card">
                <h4>Affordable care, guided clearly</h4>
                <p>Virtual consultation, treatment direction, and local support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

