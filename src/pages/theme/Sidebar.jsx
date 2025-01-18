import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div>
      <div className="flex h-screen flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <ul className="mt-6 space-y-1">
            <li>
              <Link
                to="/dashboard"
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                General
              </Link>
            </li>
            
            <li>
              <Link
                to={location.pathname.includes("/doctor-dashboard") ? "/doctor-dashboard/add-patient" : "/dashboard/add-doctor"}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                {location.pathname.includes("/doctor-dashboard") ? "Add Patient" : "Add Doctor"}
              </Link>
            </li>

            <li>
              <Link
                to={location.pathname.includes("/doctor-dashboard") ? "/doctor-dashboard/add-meds" : "/dashboard/add-doctor"}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                {location.pathname.includes("/doctor-dashboard") ? "Add Meds" : ""}
              </Link>
            </li>

            <li>
              <Link
                to={location.pathname.includes("/doctor-dashboard") ? "/doctor-dashboard/meds-details" : "/dashboard/add-doctor"}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                {location.pathname.includes("/doctor-dashboard") ? "Medicine Details" : ""}
              </Link>
            </li>
            
            <li>
              
              <Link
                to={location.pathname.includes("/doctor-dashboard") ? "/doctor-dashboard/patient-details" : "/dashboard/doctor-details"}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                {location.pathname.includes("/doctor-dashboard") ? "Patient Details" : "Doctor Details"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
