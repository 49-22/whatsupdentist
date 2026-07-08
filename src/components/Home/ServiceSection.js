// import React from 'react';
// import { Link } from 'react-router-dom';

// const ServiceSection = ({ serviceImageRef, serviceImage }) => (
//   <section id="service" className="py-5">
//     <div className="container">
//       <div className="row align-items-center">
//         <div className="col-md-6 mb-4 mb-md-0">
//           <img 
//             ref={serviceImageRef} 
//             src={serviceImage} 
//             className="img-fluid slide-image" 
//             alt="Our Services" 
//           />
//         </div>
//         <div className="col-md-6 text-center">
//           <h3 className="fs-1 mb-3">Online Consultation</h3>
//           <p className="fs-5 mt-3" style={{ lineHeight: 2, padding: '0 15px' }}>
//             At <i>WhatsUp Dentist</i>, we offer comprehensive online consultation services, providing you with expert dental care from the comfort of your home. Whether you need a second opinion or have specific dental concerns, Dr. Darahasa is here to assist through a convenient and secure online platform.
//           </p>
//           <Link to="/booking" className="custom-btn mt-3">Book Now</Link>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default ServiceSection;



// import React, { useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import serviceImage from '../../images/s1.png';

// function ServiceSection() {
//   const serviceImageRef = useRef(null);

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

//     if (serviceImageRef.current) {
//       observer.observe(serviceImageRef.current);
//     }

//     return () => {
//       if (serviceImageRef.current) {
//         observer.unobserve(serviceImageRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section id="service" className="py-5">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-md-6 mb-4 mb-md-0 order-2 order-lg-1">
//             <img 
//               ref={serviceImageRef}
//               src={serviceImage} 
//               className="img-fluid slide-image" 
//               alt="Our Services" 
//             />
//           </div>
//           <div className="col-md-6 text-center order-1 order-lg-2">
//             <h3 className="fs-1 mb-3">Online Consultation</h3>
//             <p className="fs-5 mt-3" style={{ lineHeight: 2, padding: '0 15px' }}>
//               At <i>WhatsUp Dentist</i>, we offer comprehensive online consultation services, providing you with expert dental care from the comfort of your home. Whether you need a second opinion or have specific dental concerns, Dr. Darahasa is here to assist through a convenient and secure online platform.
//             </p>
//             <Link to="/booking" className="custom-btn mt-3">Book Now</Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ServiceSection;



// import React, { useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import serviceImage from '../../images/s1.png';

// function ServiceSection() {
//   const serviceImageRef = useRef(null);

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

//     if (serviceImageRef.current) {
//       observer.observe(serviceImageRef.current);
//     }

//     return () => {
//       if (serviceImageRef.current) {
//         observer.unobserve(serviceImageRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section id="service" className="py-5">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-12 col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
//             <img 
//               ref={serviceImageRef}
//               src={serviceImage} 
//               className="img-fluid slide-image" 
//               alt="Our Services" 
//             />
//           </div>
//           <div className="col-12 col-lg-6 order-2 order-lg-1 text-center text-lg-start">
//             <h3 className="fs-1 mb-3">Online Consultation</h3>
//             <p className="fs-5 mt-3" style={{ lineHeight: 2 }}>
//               At <i>WhatsUp Dentist</i>, we offer comprehensive online consultation services, providing you with expert dental care from the comfort of your home. Whether you need a second opinion or have specific dental concerns, Dr. Darahasa is here to assist through a convenient and secure online platform.
//             </p>
//             <Link to="/booking" className="custom-btn mt-3">Book Now</Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ServiceSection;



import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import serviceImage from '../../images/s1.png';

function ServiceSection() {
  const serviceImageRef = useRef(null);

  useEffect(() => {
    const image = serviceImageRef.current;

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
    <section id="service" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 order-1 order-md-1 mb-4 mb-md-0">
            <img 
              ref={serviceImageRef}
              src={serviceImage} 
              className="img-fluid slide-image" 
              alt="Our Services" 
            />
          </div>
          <div className="col-12 col-md-6 order-2 order-md-2 text-center text-md-start">
            <h3 className="fs-1 mb-3">Your first step toward better dental care</h3>
            <p className="fs-5 mt-3 " style={{ lineHeight: 2 }}>
              At <i>WhatsUp Dentist</i>, the journey begins with a focused consultation for just ₹100. Patients can share their concerns, photos, and questions in a simple process that helps create a tailored treatment recommendation and a clear way forward.
            </p>
            <Link to="/booking" className="custom-btn mt-3 ">Reserve your consultation</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;

