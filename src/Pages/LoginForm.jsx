import React, { useState } from 'react';

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform login logic here (e.g., API call)
      console.log('Logging in with:', { phoneNumber, password });
    }
  };

  // Validate the phone number and password
  const validateForm = () => {
    if (!phoneNumber || !password) {
      setError('Both fields are required.');
      return false;
    }
    // Phone number validation: must be 11 digits and start with 0
    if (!/^(0\d{10})$/.test(phoneNumber)) {
      setError('Phone number must be 11 digits and start with 0.');
      return false;
    }
    // Password validation (at least 6 characters)
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return false;
    }
    setError('');
    return true;
  };

  return (
    <div className="text-white min-h-screen bg-gray-800 flex justify-center items-center py-10">
      <div className="bg-gray-700 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        {/* Error message */}
        {error && <div className="text-red-500 text-sm text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Phone Number Input */}
          <div className="mb-4 text-white">
            <label className="block text-sm font-medium" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6 text-white">
            <label className="block text-sm font-medium " htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>

        {/* Forgot Password Link */}
        <div className="mt-4 text-center">
          <a href="#" className="text-white hover:underline text-sm">
            Forgot Password?
          </a>
        </div>
        <div className="mt-4 text-center">
          <a href="/register" className="text-white hover:underline text-sm">
           Not Register ? Click Here..
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
