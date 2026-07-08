import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Booking() {
  const [params] = useSearchParams();
  const mobileNumber = params.get('mobileNumber');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: (mobileNumber && mobileNumber.match(/^((\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})$/)) ? mobileNumber : '',
    appointmentDate: '',
    appointmentTime: '',
    age: '',
    gender: '',
    concern: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, appointmentDate, appointmentTime, age, gender, email, concern } = formData;

    if (!name || !phone || !appointmentDate || !appointmentTime || !age || !gender || !concern) {
      alert("Please fill out all required fields.");
      return;
    }

    if (email && !email.includes('@')) {
      alert('Please enter a valid email address with "@".');
      return;
    }

    if (!(/^\d{10}$/.test(phone))) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    const url = `https://wa.me/918639001581?text=`
      + `Name: ${name}%0a`
      + (email ? `Email: ${email}%0a` : '')
      + `Phone: ${phone}%0a`
      + `Date: ${appointmentDate}%0a`
      + `Time: ${appointmentTime}%0a`
      + `Age: ${age}%0a`
      + `Gender: ${gender}%0a`
      + `Concern: ${concern}`;

    window.open(url, '_blank').focus();
  };

  return (
    
    <section id="date-input" className="container-fluid py-5">
      <div className="booking-hero">
        <h1>Start your dental consultation</h1>
        <p>Tell us about your concern, your preferred slot, and your contact details. We will help you move to the next best step with clarity.</p>
      </div>
      <form className="form-section mx-auto booking-shell" onSubmit={handleSubmit}>
        <h2 id="cd">Consultation details</h2>
        <hr />
        <p className="text-muted">A concise request helps us prepare your consultation and guide you more effectively.</p>

        <div className="form-grid">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="John" required onChange={handleChange} />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="abc@mail.com" onChange={handleChange} />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone number</label>
            <input type="tel" id="phone" name="phone" pattern="\d{10}" maxLength="10" placeholder="0000000000" defaultValue={formData.phone} required onChange={handleChange} />
          </div>

          <div className="input-group">
            <label htmlFor="appointmentDate">Select Appointment Date</label>
            <input type="date" id="appointmentDate" name="appointmentDate" required onChange={handleChange} />
          </div>

          <div className="input-group">
            <label htmlFor="appointmentTime">Select Appointment Time</label>
            <input type="time" id="appointmentTime" name="appointmentTime" min="14:00" max="16:00" required onChange={handleChange} />
          </div>

          <div className="input-group">
            <label htmlFor="ageInput">Enter Your Age</label>
            <input type="number" id="ageInput" name="age" min="0" required onChange={handleChange} />
          </div>

          <div className="input-group">
            <label htmlFor="genderSelect">Select Gender</label>
            <select id="genderSelect" name="gender" required onChange={handleChange}>
              <option value="" disabled selected>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="input-group" style={{ flexBasis: '100%' }}>
            <label htmlFor="concern">What would you like help with?</label>
            <textarea
              id="concern"
              name="concern"
              rows="4"
              placeholder="Share your dental concern, symptoms, or questions..."
              required
              onChange={handleChange}
              style={{ minHeight: '120px', resize: 'vertical' }}
            />
          </div>
        </div>

        <div className="mt-4 rounded-4 p-3" style={{ backgroundColor: '#f4f9ff', border: '1px solid #dfefff' }}>
          <p className="mb-0 text-muted">Your request will be sent directly to our team via WhatsApp so we can follow up quickly.</p>
        </div>

        <div className="text-center" style={{ marginTop: '5%' }}>
          <button type="submit" className="custom-btn mt-3">Send consultation request</button>
        </div>
      </form>
    </section>
  );
}

export default Booking;



