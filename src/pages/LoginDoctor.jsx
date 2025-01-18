// LoginDoctor.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Field from '../components/Field';
import { getDoctors } from '../service/doctorApi';
import backgroundImage from '../assets/doctorpic2.jpg';

const LoginDoctor = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch doctor credentials from the API
      const doctors = await getDoctors();

      // Find a match for the entered email and password
      const validDoctor = doctors.find(
        (doctor) => doctor.email === email && doctor.password === password
      );

      if (validDoctor) {
        console.log('Login successful:', validDoctor);
        // Redirect to the doctor dashboard route on successful login
        navigate('/doctor-dashboard');
      } else {
        alert('Incorrect credentials');
      }
    } catch (error) {
      console.error('Error fetching doctor credentials:', error);
      alert('An error occurred while verifying credentials');
    }
  };

  const fields = [
    { label: 'Email', type: 'text', value: email, onChange: (e) => setEmail(e.target.value) },
    { label: 'Password', type: 'password', value: password, onChange: (e) => setPassword(e.target.value) }
  ];

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for blur effect */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      {/* Login Form */}
      <div className="relative w-full max-w-sm bg-white bg-opacity-90 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login Doctor</h2>
        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <Field
              key={index}
              label={field.label}
              type={field.type}
              value={field.value}
              onChange={field.onChange}
            />
          ))}
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2 rounded" />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
          >
            Login
          </button>
          <p className="text-sm text-center text-gray-600 mt-4">
            So, You Don't have an account?{' '}
            <a href="#" className="text-blue-500 font-semibold hover:underline">
              Register now
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginDoctor;
