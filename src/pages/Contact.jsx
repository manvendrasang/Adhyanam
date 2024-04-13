import React, { useState } from 'react';
import '../css/Contact.css';
import backgroundImage from '../assets/book.jpg';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setIsSubmitted(true);
  };

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h2 className="contact-heading">Contact Us</h2>
        {isSubmitted && <p className="contact-success">Thank you for contacting us! We'll get back to you soon.</p>}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="contact-label">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email" className="contact-label">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="message" className="contact-label">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required />

          <button type="submit" className="contact-submit">Submit</button>
        </form>
      </div>
      <div className='sidebar'>
        <h1>Hello</h1>
        <h2>how are you</h2>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
