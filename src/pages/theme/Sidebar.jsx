import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
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
                to="/dashboard/billing"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Billing
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/add-doctor"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Add Doctor
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/doctor-details"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Doctor Details
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
