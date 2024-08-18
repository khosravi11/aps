import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const PlumbingQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    description: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');

    emailjs.sendForm('service_xz7oude', 'template_l178rz9', e.target, 'ZRnaxOFhnzpDdbvbK')
      .then((result) => {
        setFormStatus('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          serviceType: '',
          description: ''
        });
      }, (error) => {
        console.error('Error:', error);
        setFormStatus('An error occurred. Please try again.');
      });
  };

  return (
    <div className='mx-4'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-white fw-semibold">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-white fw-semibold">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label text-white fw-semibold">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label text-white fw-semibold">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="serviceType" className="form-label text-white fw-semibold">Service Type</label>
          <select
            className="form-select"
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            <option value="">Select Service Type</option>
            <option value="leakRepair">Leak Repair</option>
            <option value="drainCleaning">Drain Cleaning</option>
            <option value="installation">Installation</option>
            <option value="inspection">Inspection</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label text-white fw-semibold">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary bg-white text-primary fw-semibold">Submit</button>
        {formStatus && <p className="mt-3">{formStatus}</p>}
      </form>
    </div>
  );
};

export default PlumbingQuoteForm;
