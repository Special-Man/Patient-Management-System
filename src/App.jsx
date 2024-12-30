import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import { Homepage } from './pages/Homepage';
import Layout from "./pages/theme/Layout";

import Login from "./pages/Login";
import AddDoctor from "./pages/AddDoctor";
import DoctorTable from "./pages/DoctorTable";
import LoginDoctor from "./pages/LoginDoctor";
import LoginPatient from "./pages/LoginPatient";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDetails from "./pages/PatientDetails";
import AddPatient from "./pages/AddPatient";
import AddMeds from "./pages/AddMeds";
import MedsDetails from "./pages/MedsDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route path="/back" element={<AddDoctor />} />
          </Route>

          <Route path="/doctor-login" element={<LoginDoctor />} />
          <Route path="/patient-login" element={<LoginPatient />} />

          <Route path="/doctor-dashboard" element={<Layout />}>
            <Route index element={<DoctorDashboard />} /> {/* Render Homepage by default */}
            <Route path="patient-details" element={<PatientDetails />} /> {/* AddDoctor route */}
            <Route path="add-patient" element={<AddPatient />} /> {/* AddDoctor route */}
            <Route path="add-meds" element={<AddMeds />} /> {/* AddDoctor route */}
            <Route path="meds-details" element={<MedsDetails />} /> {/* AddDoctor route */}




         
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
