import { motion } from "framer-motion";
import { StatsSection } from "../components/StatsSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Placeholder */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />

        {/* Shield GIF */}
        <img
          src="/shielf.gif"
          alt="Shield"
          className="absolute top-6 w-20 h-20 md:w-28 md:h-28 " // Adjust size and position as needed
        />

        {/* Main Content */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-600 rounded-full mb-6">
              Streamline Your Healthcare Practice
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Modern Patient Management System
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Elevate your practice with our comprehensive solution for healthcare providers.
              Simplify scheduling, enhance patient care, and boost efficiency.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
              onClick={() => navigate("/login")} // Navigate to /login on click
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Stats and Features Sections */}
      <StatsSection />
      <FeaturesSection />

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        <p>© 2024 Patient Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
