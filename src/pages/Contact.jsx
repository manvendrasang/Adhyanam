// ContactForm.jsx
import React, { useState } from 'react';
import '../css/Contact.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to server
    console.log(formData);
    // Clear form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Set submitted state to true
    setIsSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      {isSubmitted && <p className="contact-success">Thank you for contacting us! We'll get back to you soon.</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="contact-label">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email" className="contact-label">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message" className="contact-label">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ContactForm;
