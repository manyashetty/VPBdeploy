import React from 'react';
import "./Contact-card.css";
import emailjs from 'emailjs-com';
import { useState } from 'react';

const ContactCard = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.send(
      'service_0dyz47q',
      'template_d32tzph',
      formData,
      'fLao5YjopORu8pkPM'
    )
    .then((response) => {
      alert("Email sent Successfully");
      console.log('Email sent successfully', response);
    })
    .catch((error) => {
      console.error('Email sending failed', error);
    });
    setFormData({
      firstName: '',
      phoneNumber: '',
      email: '',
      message: '',
    });
  };


  return (
    <div class="card"  >
  <div class="card-body">
    <div className="container10">
    <h2>Contact Us</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
      <label htmlFor="firstName"></label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber"></label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <div>
            <label htmlFor="message"></label>
            </div>
            <div>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
            ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-outline-danger btn-subtle-danger">
            Send Message
          </button>
        </form>
    </div>
</div>
</div>
  );
};

export default ContactCard;
