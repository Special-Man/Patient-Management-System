import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { Homepage } from "./pages/Homepage";
import Layout from "./pages/theme/Layout";
import PatientLayout from "./pages/theme/PatientLayout"; // New Layout for /patient route

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
import DoctorProfile from "./pages/doctor/DoctorProfile";
import PatientTable from "./pages/doctor/PatientTable";
import ViewPatient from "./pages/doctor/ViewPatient";
import Medicines from "./pages/doctor/Medicines";
import Appointments from "./pages/doctor/Appointments";
import AddAppointments from "./pages/doctor/components/AddAppointments";
import PatientDashboard from "./pages/patient/PatientDashboard";
import PatientMedicine from "./pages/patient/PatientMedicine";
import MedicineRecords from "./pages/patient/MedicineRecords";
import PatientsAppointments from "./pages/patient/PatientAppointments";
import PatientDoctor from "./pages/patient/PatientDoctor";
import Landing from "./pages/Landing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Landing />} />

          <Route path="/admin" element={<Login />} />
          <Route path="/login" element={<LoginDoctor />} />

          {/* Doctor Dashboard Layout */}
          <Route path="/doctor-dashboard" element={<Layout />}>
            <Route index element={<DoctorDashboard />} />
            <Route path="patient-details" element={<PatientTable />} />
            <Route path="add-patient" element={<AddPatient />} />
            <Route path="medicines" element={<Medicines />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="add-appointment" element={<AddAppointments />} />
            <Route path="meds-details" element={<MedsDetails />} />
            <Route path="view-patient/:id" element={<ViewPatient />} />
          </Route>

          {/* Superadmin Dashboard layout*/}
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Homepage />} />
          <Route path="medicines" element={<Medicines />} />
            <Route path="add-doctor" element={<AddDoctor />} />
            <Route path="doctor-details/:id" element={<DoctorProfile />} />
          </Route>

          {/* Patient Dashboard Layout */}
          <Route path="/patient" element={<PatientLayout />}>
            <Route index element={<PatientDashboard />} />
            <Route path="medicines" element={<PatientMedicine />} />
            <Route path="medical-record" element={<MedicineRecords />} />
            <Route path="appointments" element={<PatientsAppointments />} />
            <Route path="doctors" element={<PatientDoctor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
