import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Field from '../components/Field';
import { loginDoctor } from '../service/doctorApi';
import { loginPatient } from '../service/patientApi';
import backgroundImage from '../assets/doctorpic2.jpg';
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDoctorLogin, setIsDoctorLogin] = useState(true); // Toggle between Doctor and Patient
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (isDoctorLogin) {
        const response = await loginDoctor(email, password);
        console.log("Doctor login response:", response);
  
        Cookies.set("role", "doctor", { expires: 1 / 144 });
        Cookies.set("id", response.doctorId, { expires: 1 / 144 }); // Store the ID in cookies
  
        navigate("/doctor-dashboard");
      } else {
        const response = await loginPatient(email, password);
        console.log("Patient login response:", response);
  
        Cookies.set("role", "patient", { expires: 1 / 144 });
        Cookies.set("id", response.patient.id, { expires: 1 / 144 }); // Store the ID in cookies
  
        navigate("/patient");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert(error.response?.data?.error || "Invalid login credentials");
    }
  };
  
  

  const fields = [
    { label: 'Email', type: 'text', value: email, onChange: (e) => setEmail(e.target.value) },
    { label: 'Password', type: 'password', value: password, onChange: (e) => setPassword(e.target.value) },
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
        {/* Toggle between Doctor and Patient Login */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsDoctorLogin(true)}
            className={`px-4 py-2 rounded-l-lg ${isDoctorLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Doctor
          </button>
          <button
            onClick={() => setIsDoctorLogin(false)}
            className={`px-4 py-2 rounded-r-lg ${!isDoctorLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Patient
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Login {isDoctorLogin ? 'Doctor' : 'Patient'}
        </h2>
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

export default Login;
