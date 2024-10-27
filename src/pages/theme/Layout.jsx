import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <div className="w-64 bg-gray-100 border-r border-gray-200"> {/* Sidebar with fixed width */}
          <Sidebar />
        </div>
        <div className="flex-1 p-6 overflow-y-auto"> {/* Main body takes up remaining space */}
          <Outlet />
        </div>
      </div>
      <Footer className="bg-gray-100 text-center py-4 border-t border-gray-200" />
    </div>
  );
};

export default Layout;
