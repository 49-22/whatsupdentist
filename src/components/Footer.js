import React from 'react';

function Footer() {
  return (
    <section id="footer" className="py-5" style={{ backgroundColor: '#1f3f5e' }}>
      <div className="container text-center">
        <p style={{ color: '#cfe0f0', marginBottom: 0 }}>
          &copy; {new Date().getFullYear()} WhatsUp Dentist. Virtual consultations, clear guidance, and trusted treatment planning.
        </p>
        <a href="https://www.linkedin.com/company/whatsupdentist" target="_blank" rel="noreferrer" className="d-inline-flex align-items-center gap-2 mt-2" style={{ color: '#cfe0f0' }}>
          <i className="fa-brands fa-linkedin" aria-hidden="true" />
          WhatsUp Dentist on LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Footer;