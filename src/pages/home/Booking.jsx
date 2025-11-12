import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, CheckCircle } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    sessionGroup: '',
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
    // Handle form submission here
    alert('Booking request submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-300 to-purple-400 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-2">Booking</h1>
          <p className="flex items-center justify-center text-lg">
           Schedule a Counselling Season with Dola Nancy Bankole
          </p>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 mb-4">
              When completing the booking form please provide as much detail as possible. All requests will be responded to as soon as possible.
            </p>
          </div>

          <div>
            <div className="mb-6">
             
              
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Personal Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Personal email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Personal Phone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Personal phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Date and Time Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Counseling session date*
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                    Counseling session time*
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Session Group */}
              <div className="mb-8">
                <label htmlFor="sessionGroup" className="block text-sm font-medium text-gray-700 mb-2">
                  Counseling session groups*
                </label>
                <select
                  id="sessionGroup"
                  name="sessionGroup"
                  value={formData.sessionGroup}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select counseling type</option>
                  <option value="individual">Individual Counseling</option>
                  <option value="couples">Couples Counseling</option>
                  <option value="family">Family Counseling</option>
                  <option value="youth">Youth Counseling</option>
                  <option value="premarital">Premarital Counseling</option>
                  <option value="group">Group Therapy</option>
                </select>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="space-y-4 text-sm text-gray-600">
                <p>
                  I agree that this Booking Form is solely for the purpose of collating information needed by Dola Nancy Bankole in order to consider the invitation/request.
                </p>
                <p>
                  I agree that to the best of my knowledge, every information provided is correct.
                </p>
                <p>
                  I agree that Dola Nancy Bankole reserves the right to rescind/withdraw when it is discovered that any information provided by potential Counselee is false.
                </p>
                <p>
                  I agree that submission of this form and an acknowledgement of same by Dola Nancy Bankole does not in any way CONFIRM the request/invitation until expressly stated in a confirmation email that will be sent from the official Dola Nancy Bankole email.
                </p>
                <p>
                  I agree that the session will be confidential at an agreed date and time.
                </p>
              </div>
            </div>

            {/* Terms Acceptance Checkbox */}
            <div className="flex items-start mb-8">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                className="mt-1 mr-3 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="termsAccepted" className="text-sm text-gray-700 cursor-pointer">
                I accept all terms and conditions. (Please read terms and conditions)
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className={`font-semibold py-3 px-12 rounded-lg transition-colors duration-200 ${
                  formData.termsAccepted
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gray-400 text-white cursor-not-allowed'
                }`}
                disabled={!formData.termsAccepted}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        {/* <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Confirmation</h4>
              <p className="text-sm text-gray-600">
                You'll receive a confirmation email within 24 hours of submission
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Session Duration</h4>
              <p className="text-sm text-gray-600">
                Each counseling session typically lasts 50-60 minutes
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Confidential</h4>
              <p className="text-sm text-gray-600">
                All sessions are completely confidential and secure
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Booking;