// import React, { useEffect, useRef } from 'react';
// import HeroSection from './HeroSection';
// import IntroSection from './IntroSection';
// import ServiceSection from './ServiceSection';
// import FeatureCard from './FeatureCard';
// import TestimonialCard from './TestimonialCard';
// import NewsletterSection from './NewsletterSection';
// import { features, testimonials } from './data';

// // Import images - make sure these paths are correct
// import heroImage from '../../images/1.png';
// import introImage from '../../images/pooja2.jpeg';
// import serviceImage from '../../images/s1.png';

// const Home = () => {
//   const heroImageRef = useRef(null);
//   const introImageRef = useRef(null);
//   const serviceImageRef = useRef(null);

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: '0px',
//       threshold: 0.1
//     };

//     const observerCallback = (entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('slide-in');
//           observer.unobserve(entry.target);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);
//     const refs = [heroImageRef, introImageRef, serviceImageRef];

//     refs.forEach(ref => {
//       if (ref.current) observer.observe(ref.current);
//     });

//     return () => {
//       refs.forEach(ref => {
//         if (ref.current) observer.unobserve(ref.current);
//       });
//     };
//   }, []);

//   return (
//     <>
//       <style>
//         {`
//           .slide-image {
//             opacity: 0;
//             transform: translateX(-100%);
//             transition: opacity 2s ease-out, transform 2s ease-out;
//           }

//           .slide-image.slide-in {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         `}
//       </style>
//       <HeroSection heroImageRef={heroImageRef} heroImage={heroImage} />
//       <IntroSection introImageRef={introImageRef} introImage={introImage} />
      
//       <section id="feature" className="section-p1 py-5">
//         <div className="container">
//           <div className="row justify-content-center text-center">
//             {features.map((feature, index) => (
//               <FeatureCard key={index} {...feature} />
//             ))}
//           </div>
//         </div>
//       </section>

//       <ServiceSection serviceImageRef={serviceImageRef} serviceImage={serviceImage} />

//       <section id="client" className="py-5">
//         <div className="container text-center">
//           <h1 className="display-6 mb-4">Look What Our Clients Say</h1>
//           <div className="row">
//             {testimonials.map((testimonial, index) => (
//               <TestimonialCard key={index} {...testimonial} />
//             ))}
//           </div>
//         </div>
//       </section>

//       <NewsletterSection />
//     </>
//   );
// };

// export default Home;



// import React from 'react';
// import HeroSection from './HeroSection';
// import IntroSection from './IntroSection';
// import ServiceSection from './ServiceSection';
// import { FeatureSection } from './FeatureCard';
// import { TestimonialSection } from './TestimonialCard';
// import NewsletterSection from './NewsletterSection';

// function Home() {
//   return (
//     <>
//       <HeroSection />
//       <IntroSection />
//       <FeatureSection />
//       <ServiceSection />
//       <TestimonialSection />
//       <NewsletterSection />

//       <style jsx global>{`
//         .slide-image {
//           opacity: 0;
//           transform: translateX(-100%);
//           transition: opacity 2s ease-out, transform 2s ease-out;
//         }

//         .slide-image.slide-in {
//           opacity: 1;
//           transform: translateX(0);
//         }

//         .custom-btn {
//           display: inline-block;
//           padding: 10px 30px;
//           background-color: #3b6ea0;
//           color: white;
//           text-decoration: none;
//           border-radius: 4px;
//           transition: background-color 0.3s ease;
//         }

//         .custom-btn:hover {
//           background-color: #2d5780;
//           color: white;
//         }

//         .dark-mode {
//           background-color: #1f2937;
//           color: white;
//         }
//       `}</style>
//     </>
//   );
// }

// export default Home;





// import React from 'react';
// import HeroSection from './HeroSection';
// import IntroSection from './IntroSection';
// import ServiceSection from './ServiceSection';
// import { FeatureSection } from './FeatureCard';
// import { TestimonialSection } from './TestimonialCard';
// import NewsletterSection from './NewsletterSection';

// function Home() {
//   return (
//     <>
//       <HeroSection />
//       <IntroSection />
//       <FeatureSection />
//       <ServiceSection />
//       <TestimonialSection />
//       <NewsletterSection />

//       <style jsx global>{`
//         .slide-image {
//           opacity: 0;
//           transform: translateX(-100%);
//           transition: opacity 2s ease-out, transform 2s ease-out;
//         }

//         .slide-image.slide-in {
//           opacity: 1;
//           transform: translateX(0);
//         }

//         .custom-btn {
//           display: inline-block;
//           padding: 10px 30px;
//           background-color: #3b6ea0;
//           color: white;
//           text-decoration: none;
//           border-radius: 4px;
//           transition: background-color 0.3s ease;
//         }

//         .custom-btn:hover {
//           background-color: #2d5780;
//           color: white;
//         }

//         .dark-mode {
//           background-color: #1f2937;
//           color: white;
//         }

//         @media (max-width: 767px) {
//           .fe-box {
//             max-width: 200px;
//             margin-left: auto;
//             margin-right: auto;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

// export default Home;

import React from 'react';
import HeroSection from './HeroSection';
import IntroSection from './IntroSection';
import ServiceSection from './ServiceSection';
import { FeatureSection } from './FeatureCard';
import TrustSection from './TrustSection';
import { TestimonialSection } from './TestimonialCard';
import NewsletterSection from './NewsletterSection';

function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeatureSection />
      <TrustSection />
      <ServiceSection />
      <TestimonialSection />
      <NewsletterSection />

      <style jsx global>{`
        .slide-image {
          opacity: 0;
          transform: translateX(-100%);
          transition: opacity 2s ease-out, transform 2s ease-out;
        }

        .slide-image.slide-in {
          opacity: 1;
          transform: translateX(0);
        }

        .custom-btn {
          display: inline-block;
          padding: 10px 30px;
          background-color: #3b6ea0;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }

        .custom-btn:hover {
          background-color: #2d5780;
          color: white;
        }

        .dark-mode {
          background-color: #1f2937;
          color: white;
        }

        @media (max-width: 767px) {
          .fe-box, .cli-box {
            max-width: 200px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </>
  );
}

export default Home;

