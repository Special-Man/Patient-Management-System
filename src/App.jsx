import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import AddDoctor from "./pages/AddDoctor";
import Login from "./pages/Login";
import Layout from "./pages/theme/Layout";
import Homepage from "./pages/Homepage"; // Import Homepage here
import DoctorTable from "./pages/DoctorTable";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route path="/back" element={<AddDoctor />} />
          </Route>
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
