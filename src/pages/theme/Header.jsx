import React, { useState } from "react";
import medsplusLogo from '../../assets/medsplus.png'; // Import the logo image
import { BellIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing tokens, resetting state)
    navigate("/"); // Redirect to the home page
  };

  return (
    <div>
      <header className="bg-white pt-5">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo with imported image */}
       

            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <span className="sr-only">Home</span>
          
              </a>
            </div>

            {/* Search Bar */}
            <div className="flex-1">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full max-w-md rounded border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-teal-500 focus:outline-none"
            />
          </div>

              {/* Notification Bell */}
          <div className="relative flex items-center space-x-4">
            <button
              type="button"
              className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="sr-only">Notifications</span>
          <BellIcon/>
            </button>

          {/* Profile Dropdown */}
          <div className="relative">
              <button
                type="button"
                onClick={toggleMenu}
                className="flex items-center gap-2 rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Doctor"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-700">Dr. Amirul Haque</p>
                  <p className="text-xs text-gray-500">Urologist</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>

                  {/* Dropdown Menu */}
              {isMenuOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 rounded-lg border border-gray-100 bg-white shadow-lg"
                  role="menu"
                >
                  <div className="p-2">
                    <p className="text-sm font-medium text-gray-700">Dr. Amirul Haque</p>
                    <p className="text-xs text-gray-500">jdoe@acme.com</p>
                  </div>
                  <hr className="my-1" />
                  <button
                  type="button"
                  onClick={handleLogout} // Attach the logout handler
                  className="block w-full rounded-lg px-4 py-2 text-left text-sm text-red-700 hover:bg-red-50"
                  role="menuitem"
                >
                  Logout
                </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      </header>
    </div>
  );
};

export default Header;
