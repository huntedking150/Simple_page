import '../styles/contact.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/feedback', formData);
      alert('Feedback received');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Error submitting feedback');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Contact Us</h1>
      </div>
      <div className="row">
        <h4 style={{ textAlign: 'center' }}>We'd love to hear from you!</h4>
      </div>
      <form className="row input-container" onSubmit={handleSubmit}>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Name</label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="styled-input" style={{ float: 'right' }}>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <label>Phone Number</label>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <label>Message</label>
          </div>
        </div>
        <div className="col-xs-12">
          <Button type="submit" className="btn-lrg submit-btn">
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
