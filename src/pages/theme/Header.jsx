import React, { useState } from "react";
import medsplusLogo from '../../assets/medsplus.png'; // Import the logo image

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <header className="bg-white pt-5">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo with imported image */}
            <div className="flex items-center">
              <img
                src={medsplusLogo} // Use the imported logo here
                alt="MedsPlus Logo"
                className="h-14 w-14"
              />
            </div>

            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <span className="sr-only">Home</span>
                <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* SVG path here */}
                </svg>
              </a>
            </div>

            <div className="flex-1 md:flex md:items-center md:gap-4">
              {/* Search Bar */}
              <input
                type="text"
                placeholder="Search here..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full max-w-xs rounded border border-gray-300 px-3 py-1.5 text-sm shadow-sm focus:border-teal-500 focus:outline-none"
              />
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="hidden md:relative md:block">
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
                >
                  <span className="sr-only">Toggle dashboard menu</span>
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="size-10 object-cover"
                  />
                </button>

                {isMenuOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                    role="menu"
                  >
                    <div className="p-2">
                      <a
                        href="#"
                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        role="menuitem"
                      >
                        My profile
                      </a>
                    </div>

                    <div className="p-2">
                      <form method="POST" action="#">
                        <button
                          type="submit"
                          className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                          role="menuitem"
                        >
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
                              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                            />
                          </svg>
                          Logout
                        </button>
                      </form>
                    </div>
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
