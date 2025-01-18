import { motion } from "framer-motion";
import { Calendar, Clock, Users, Shield } from "lucide-react";
const features = [
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description: "Streamline appointment booking with our intuitive calendar system",
  },
  {
    icon: Users,
    title: "Patient Portal",
    description: "Secure access to medical records and communication with healthcare providers",
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Instant notifications for appointments and medical results",
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "HIPAA-compliant security measures to protect patient information",
  },
];
export const FeaturesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 py-16">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-blue-100 hover:border-blue-200 transition-all duration-300"
        >
          <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-sm">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};