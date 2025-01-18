// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Field from '../components/Field';
import { getSuperadminCredentials } from '../service/superadminApi';
import backgroundImage from '../assets/doctorpic1.jpg'; // Make sure the path is correct
import Cookies from "js-cookie";
import { useAuth } from '../hooks/useAuth';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setRole } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const credentials = await getSuperadminCredentials();
      const validCredentials = credentials.find(
        (cred) => cred.username === email && cred.password === password
      );
  
       // Validate login credentials
    if (validCredentials) {
      setRole("superadmin"); // Set role instantly
      navigate("/dashboard");
    } else {
      alert("Incorrect credentials");
    }
    } catch (error) {
      console.error('Error fetching credentials:', error);
      alert('An error occurred while verifying credentials');
    }
  };
  

  const handleDoctorNavigation = () => {
    navigate('/doctor-login');
  };

  const handlePatientNavigation = () => {
    navigate('/patient-login'); // Update the route as needed
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
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
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
            Don't have an account?{' '}
            <a href="#" className="text-blue-500 font-semibold hover:underline">
              Register now
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
