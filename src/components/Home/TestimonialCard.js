// import React from 'react';

// const TestimonialCard = ({ text, author }) => (
//   <div className="col-md-3 mb-4">
//     <div className="cli-box p-4 shadow border rounded bg-light h-100 bg-primary-light">
//       <p>{text}<br /><i>-{author}</i></p>
//     </div>
//   </div>
// );

// export default TestimonialCard;


// import React from 'react';
// import { testimonials } from './data';

// function TestimonialCard({ text, author }) {
//   return (
//     <div className="col-md-3 mb-4">
//       <div className="cli-box p-4 shadow border rounded bg-light h-100 bg-primary-light">
//         <p>{text}<br /><i>-{author}</i></p>
//       </div>
//     </div>
//   );
// }

// export function TestimonialSection() {
//   return (
//     <section id="client" className="py-5">
//       <div className="container text-center">
//         <h1 className="display-6 mb-4">Look What Our Clients Say</h1>
//         <div className="row">
//           {testimonials.map((testimonial, index) => (
//             <TestimonialCard key={index} {...testimonial} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TestimonialCard;

import React from 'react';
import { testimonials } from './data';

function TestimonialCard({ text, author }) {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div className="cli-box p-4 shadow border rounded bg-light h-100 bg-primary-light mx-auto" style={{ maxWidth: '280px' }}>
        <p className="mb-0">{text}<br /><i>-{author}</i></p>
      </div>
    </div>
  );
}

export function TestimonialSection() {
  return (
    <section id="client" className="py-5">
      <div className="container">
        <h1 className="display-6 mb-4 text-center">What patients appreciate most</h1>
        <p className="text-center text-muted mb-5">Simple guidance, clear communication, and a thoughtful path to care.</p>
        <div className="row justify-content-center text-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialCard;

