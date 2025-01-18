import { motion } from "framer-motion";
const stats = [
  { number: "10k+", label: "Active Patients" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "24/7", label: "Support Available" },
  { number: "15+", label: "Years Experience" },
];
export const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 py-12">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-blue-100 hover:border-blue-200 transition-all duration-300"
        >
          <span className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</span>
          <span className="text-sm text-gray-600">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
};