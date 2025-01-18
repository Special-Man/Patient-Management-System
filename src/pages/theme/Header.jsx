import React, { useState, useEffect } from "react";
import medsplusLogo from "../../assets/medsplus.png"; // Import the logo image
import { BellIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { fetchAllDoctors, fetchAllPatients } from "../../service/appointmentApi"; // Import API services

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    role: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const userId = Cookies.get("id");
    const role = Cookies.get("role"); // Check the role from cookies
    setUserInfo((prev) => ({ ...prev, role }));

    if (userId && role) {
      const fetchUserData = async () => {
        try {
          let userData;
          if (role === "doctor") {
            const doctors = await fetchAllDoctors();
            userData = doctors.find((doctor) => doctor.id === parseInt(userId));
            if (userData) {
              setUserInfo({
                name: `Dr. ${userData.first_name} `,
                email: userData.email,
                role,
              });
            }
          } else if (role === "patient") {
            const patients = await fetchAllPatients();
            userData = patients.find((patient) => patient.id === parseInt(userId));
            if (userData) {
              setUserInfo({
                name: `${userData.first_name}`,
                email: userData.email,
                role,
              });
            }
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData();
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLogout = () => {
    // Clear cookies
    Cookies.remove("id");
    Cookies.remove("role");

    // Redirect to login page
    navigate("/");
  };

  return (
    <div>
      <header className="bg-white pt-5">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <img src={medsplusLogo} alt="Meds-Plus Logo" className="h-8 w-auto" />
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
                <BellIcon />
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="flex items-center gap-2 rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="User"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-700">{userInfo.name}</p>
                    <p className="text-xs text-gray-500">{userInfo.role}</p>
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
                      <p className="text-sm font-medium text-gray-700">{userInfo.name}</p>
                      <p className="text-xs text-gray-500">{userInfo.email}</p>
                    </div>
                    <hr className="my-1" />
                    <button
                      type="button"
                      onClick={handleLogout}
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
