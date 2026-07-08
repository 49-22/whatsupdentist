import React from 'react';
import { Link } from 'react-router-dom';

function InternationalPatients() {
  return (
    <section className="py-5" style={{ marginTop: '90px' }}>
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-7">
            <p className="text-uppercase fw-bold mb-3" style={{ color: '#3b6ea0', letterSpacing: '0.2em' }}>
              For international patients
            </p>
            <h1 className="display-5 mb-4">World-class dental care in India at a fraction of overseas costs.</h1>
            <p className="fs-5 text-muted mb-4">
              Patients from abroad choose India for trusted dental treatment, transparent pricing, and the convenience of a virtual consultation before travel. We help you understand the treatment plan, expected cost, and the most suitable dental clinic near your location.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/booking" className="custom-btn">Start your consultation</Link>
              <a href="https://wa.me/918639001581" target="_blank" rel="noreferrer" className="btn btn-outline-primary px-4 py-3">
                WhatsApp us
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="p-4 rounded-4 shadow-sm border" style={{ background: 'linear-gradient(135deg, #f4f9ff 0%, #eef6ff 100%)' }}>
              <h3 className="mb-3">Why patients choose us</h3>
              <ul className="list-unstyled fs-5">
                <li className="mb-2">✓ Online consultation for just ₹100</li>
                <li className="mb-2">✓ Clear treatment guidance before travel</li>
                <li className="mb-2">✓ Help finding a trusted local clinic</li>
                <li className="mb-2">✓ Significant savings compared with many overseas procedures</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-4">
          <div className="col-md-4">
            <div className="p-4 rounded-4 border h-100 bg-white shadow-sm">
              <h4>Step 1</h4>
              <p>Book a consultation and share your dental concerns and current photos.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 rounded-4 border h-100 bg-white shadow-sm">
              <h4>Step 2</h4>
              <p>Receive a clear plan and a treatment estimate tailored to your situation.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 rounded-4 border h-100 bg-white shadow-sm">
              <h4>Step 3</h4>
              <p>We guide you to a suitable clinic based on your location and treatment needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InternationalPatients;
