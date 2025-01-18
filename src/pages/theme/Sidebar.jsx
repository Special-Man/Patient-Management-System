import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, PlusCircle, Calendar, LogOut } from "lucide-react";
import medsplusLogo from '../../assets/medsplus.png'; // Import the logo image

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      icon: Home,
      label: "Home",
      path: location.pathname.includes("/doctor-dashboard")
        ? "/doctor-dashboard"
        : "/dashboard",
    },
    {
      icon: Users,
      label: location.pathname.includes("/doctor-dashboard") ? "Patients" : "Patients",
      path: location.pathname.includes("/doctor-dashboard")
        ? "/doctor-dashboard/patient-details"
        : "/dashboard/add-doctor",
    },
    {
      icon: PlusCircle,
      label: location.pathname.includes("/doctor-dashboard") ? "Medicines" : "Medicines",
      path: location.pathname.includes("/doctor-dashboard")
        ? "/doctor-dashboard/medicines"
        : "/dashboard/medicines",
    },
    {
      icon: Calendar,
      label: location.pathname.includes("/doctor-dashboard") ? "Appointments" : "Appointments",
      path: location.pathname.includes("/doctor-dashboard")
        ? "/doctor-dashboard/appointments"
        : "/dashboard/appointments",
    },
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
        {menuItems.map(
          (item) =>
            item.label && (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors ${
                  location.pathname === item.path
                    ? "bg-blue-50 text-primary"
                    : ""
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            )
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
