import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import { Homepage } from './pages/Homepage';
import Layout from "./pages/theme/Layout";

import Login from "./pages/Login";
import AddDoctor from "./pages/AddDoctor";
import DoctorTable from "./pages/DoctorTable";
import LoginDoctor from "./pages/LoginDoctor";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route path="/back" element={<AddDoctor />} />
          </Route>

          <Route path="/doctor-login" element={<LoginDoctor />} />
          <Route path="/doctor-dashboard" element={<DoctorTable />} />

          

          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Homepage />} /> {/* Render Homepage by default */}
            <Route path="add-doctor" element={<AddDoctor />} /> {/* AddDoctor route */}
            <Route path="doctor-details" element={<DoctorTable />} /> {/* AddDoctor route */}
          
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
