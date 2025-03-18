import { motion } from 'framer-motion';
import { ArrowRight, Stethoscope, GraduationCap, Ambulance } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
          Your Health, Our
          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            {" "}Priority
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Connect with top doctors, find internships, and get emergency assistance
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/doctors"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:opacity-90 transition-opacity"
          >
            Find Doctors <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link
            to="/emergency"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
          >
            Emergency Services
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
        {[
          {
            icon: <Stethoscope size={32} />,
            title: "Expert Doctors",
            description: "Connect with experienced healthcare professionals",
            color: "from-primary-500 to-primary-600"
          },
          {
            icon: <GraduationCap size={32} />,
            title: "Medical Internships",
            description: "Find clinical exposure opportunities",
            color: "from-secondary-500 to-secondary-600"
          },
          {
            icon: <Ambulance size={32} />,
            title: "24/7 Emergency",
            description: "Quick access to emergency services",
            color: "from-accent-500 to-accent-600"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 dark:border-gray-700"
          >
            <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
      >
        {[
          { value: "500+", label: "Doctors" },
          { value: "1000+", label: "Students Placed" },
          { value: "50+", label: "Hospitals" },
          { value: "24/7", label: "Support" }
        ].map((stat, index) => (
          <div key={index} className="p-4 sm:p-6 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-center">
            <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{stat.value}</div>
            <div className="text-sm opacity-90">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}