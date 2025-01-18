import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, PlusCircle, Calendar, LogOut, Clipboard, Info } from "lucide-react";
import medsplusLogo from "../../assets/medsplus.png"; // Import the logo image

const PatientSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Home", path: "/patient" },
    { icon: PlusCircle, label: "Medicines", path: "/patient/medicines" },
    { icon: Calendar, label: "Appointments", path: "/patient/appointments" },
    { icon: Users, label: "Doctors", path: "/patient/doctors" },
    { icon: Clipboard, label: "Medical Record", path: "/patient/medical-record" },
    { icon: Info, label: "About Us", path: "/patient/about-us" },
  ];

  return (
    <aside className="w-[220px] bg-white h-screen fixed left-0 top-0 border-r border-gray-200">
      <div className="flex items-center gap-2 p-[14px] border-b border-gray-200">
        <img
          src={medsplusLogo} // Use the imported logo here
          alt="MedsPlus Logo"
          className="h-14 w-14"
        />
        <span className="font-semibold text-gray-800">Meds-Plus</span>
      </div>
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors ${
              location.pathname === item.path ? "bg-blue-50 text-primary" : ""
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default PatientSidebar;
