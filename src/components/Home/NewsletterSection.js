// import React from 'react';
// import { Link } from 'react-router-dom';

// const NewsletterSection = () => (
//   <section id="newsletter" className="py-5" style={{ backgroundColor: '#3b6ea0' }}>
//     <div className="container">
//       <div className="row align-items-center">
//         <div className="col-md-6 text-start text-md-start text-white mb-3">
//           <h3 style={{ fontSize: '40px', fontWeight: 700 }}>Get in touch with us</h3>
//           <p style={{ fontSize: '15px' }}>
//             Book your first consultation at just 
//             <span style={{ fontSize: '25px', fontWeight: 700, color: '#cce7d0' }}> Rs 100</span>
//           </p>
//         </div>
//         <div className="col-md-6">
//           <div className="form d-flex justify-content-center justify-content-md-end">
//             <input 
//               type="text" 
//               className="form-control me-2" 
//               style={{ 
//                 height: '4.127rem',
//                 padding: '0 1.25em',
//                 fontSize: '14px',
//                 border: '1px solid transparent',
//                 borderRadius: '4px',
//                 outline: 'none',
//                 borderTopRightRadius: 0,
//                 borderBottomRightRadius: 0 
//               }} 
//               placeholder="Your mobile number" 
//             />
//             <Link 
//               to="/booking" 
//               className="btn btn-primary normal"
//               style={{ 
//                 backgroundColor: '#9cbfe3',
//                 color: '#fff',
//                 border: 'none',
//                 borderTopLeftRadius: 0,
//                 borderBottomLeftRadius: 2 
//               }}
//             >
//               Book Now
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default NewsletterSection;




import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function NewsletterSection() {
  const [mobileNumber, setMobileNumber] = useState()
  return (
    <section id="newsletter" className="py-5" style={{ backgroundColor: '#3b6ea0' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-start text-md-start text-white mb-3">
            <h3 style={{ fontSize: '40px', fontWeight: 700 }}>Start with a consultation</h3>
            <p style={{ fontSize: '15px' }}>
              Book your first virtual consultation for just 
              <span style={{ fontSize: '25px', fontWeight: 700, color: '#cce7d0' }}> ₹100</span>
            </p>
          </div>
          <div className="col-md-6">
            <div className="form d-flex justify-content-center justify-content-md-end">
              <input 
                type="text" 
                className="form-control me-2"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                style={{ 
                  height: '4.127rem',
                  padding: '0 1.25em',
                  fontSize: '14px',
                  border: '1px solid transparent',
                  borderRadius: '4px',
                  outline: 'none',
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0 
                }} 
                placeholder="Your mobile number" 
              />
              <Link 
                to={`/booking?mobileNumber=${mobileNumber}`}
                className="btn btn-primary normal"
                style={{ 
                  backgroundColor: '#9cbfe3',
                  color: '#fff',
                  border: 'none',
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 2 
                }}
              >
                Book now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;

