import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function Booking() {
  const [params] = useSearchParams()
  const mobileNumber = params.get('mobileNumber')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: (mobileNumber && mobileNumber.match(/^((\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})$/)) ? mobileNumber : '', // guard against null
    appointmentDate: '',
    appointmentTime: '',
    age: '',
    gender: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, appointmentDate, appointmentTime, age, gender, email } = formData;

    if (!name || !phone || !appointmentDate || !appointmentTime || !age || !gender) {
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
      + `Gender: ${gender}`;

    window.open(url, '_blank').focus();
  };

  return (
    
    <section id="date-input" className="container-fluid">
      <div style={{ marginTop: '15%', marginLeft: '15%', marginBottom: '5%' }}>
        <h1>Dental Check-Up Booking</h1>
        <p>Check out our availability and book the date and time that works for you</p>
      </div>
      <form className="form-section mx-auto" style={{ maxWidth: '70%' }} onSubmit={handleSubmit}>
        <h1 id="cd">Client Details</h1>
        <hr />
        <p>Tell us a bit about yourself</p>

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
        </div>

        <div className="text-center" style={{ marginTop: '5%' }}>
          <button type="submit" className="custom-btn mt-3">Submit</button>
          <h3 className="redirect-message" style={{ marginTop: '5%' }}> &nbsp; NOTE : This will redirect you to WhatsApp</h3>
        </div>
      </form>
    </section>
  );
}

export default Booking;



