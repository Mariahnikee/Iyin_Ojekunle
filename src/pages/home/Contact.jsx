import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    sessionType: '',
    message: '',
    termsAccepted: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Your request has been submitted successfully!');
    // Optionally send data to email or API
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-[#CFFAF4] to-[#dd6449] text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-2">Contact / Booking</h1>
          <p className="flex items-center justify-center text-lg">
            Schedule a Speaking Engagement, Mentorship, or Consultation with Iyin Ojekunle
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 mb-4">
              Please provide as much detail as possible. Iyin will respond to all requests promptly.
            </p>
          </div>

          {/* Name & Contact Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006D6F]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name*</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006D6F]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006D6F]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006D6F]"
              />
            </div>
          </div>

          {/* Session Type */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Request Type*</label>
            <select
              name="sessionType"
              value={formData.sessionType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006D6F]"
            >
              <option value="">Select type</option>
              <option value="speaking">Speaking Engagement</option>
              <option value="mentorship">Mentorship</option>
              <option value="consultation">Consultation</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Message / Details</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Provide details about your request"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006D6F]"
              rows={5}
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start mb-8">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleInputChange}
              className="mt-1 mr-3 h-4 w-4 text-[#006D6F] border-gray-300 rounded"
            />
            <label className="text-sm text-gray-700 cursor-pointer">
              I accept the terms and conditions.
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className={`font-semibold py-3 px-12 rounded-lg transition-colors duration-200 ${
                formData.termsAccepted
                  ? 'bg-[#006D6F] hover:bg-[#008B8D] text-white'
                  : 'bg-gray-400 text-white cursor-not-allowed'
              }`}
              disabled={!formData.termsAccepted}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
