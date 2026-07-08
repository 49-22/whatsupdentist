import React from 'react';
import { Link } from 'react-router-dom';

function TrustSection() {
  return (
    <section className="py-5" style={{ background: 'linear-gradient(135deg, #f7fbff 0%, #eef6ff 100%)' }}>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-7">
            <p className="text-uppercase fw-bold mb-3" style={{ color: '#3b6ea0', letterSpacing: '0.2em' }}>Why patients trust us</p>
            <h2 className="display-6 mb-3">A clear, honest first step for dental care</h2>
            <p className="fs-5 text-muted mb-4">
              We make the process simple: book a consultation, share your concerns, and receive thoughtful guidance before any treatment decision.
            </p>
            <div className="d-flex flex-wrap gap-3 mb-4">
              <Link to="/booking" className="custom-btn">Book consultation</Link>
              <Link to="/international-patients" className="btn btn-outline-primary px-4 py-3">International patients</Link>
            </div>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge rounded-pill px-3 py-2" style={{ backgroundColor: '#dfefff', color: '#2c567f' }}>✓ Transparent first consultation</span>
              <span className="badge rounded-pill px-3 py-2" style={{ backgroundColor: '#f7ebc8', color: '#8a5b00' }}>₹100 virtual consultation</span>
              <span className="badge rounded-pill px-3 py-2" style={{ backgroundColor: '#e6f7ea', color: '#2f6b3e' }}>Trusted local clinic guidance</span>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
              <div className="d-flex align-items-center mb-3">
                <div className="me-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', backgroundColor: '#dfefff', color: '#3b6ea0', fontSize: '1.25rem' }}>
                  ✓
                </div>
                <div>
                  <h5 className="mb-0">Transparent pricing</h5>
                  <p className="mb-0 text-muted">Consultation starts at ₹100</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="me-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', backgroundColor: '#dfefff', color: '#3b6ea0', fontSize: '1.25rem' }}>
                  ✦
                </div>
                <div>
                  <h5 className="mb-0">Guided treatment planning</h5>
                  <p className="mb-0 text-muted">Practical next steps with expert insight</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', backgroundColor: '#dfefff', color: '#3b6ea0', fontSize: '1.25rem' }}>
                  ⌂
                </div>
                <div>
                  <h5 className="mb-0">Location-based clinic support</h5>
                  <p className="mb-0 text-muted">Help finding a suitable local clinic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
