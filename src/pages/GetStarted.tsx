import { motion } from 'framer-motion';
import { Stethoscope, UserCircle, GraduationCap, Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function GetStarted() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-900 dark:text-white">
            Welcome to
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {" "}MediSeva
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Join our trusted healthcare platform connecting patients with verified medical professionals. 
            Experience seamless healthcare delivery and professional growth opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/auth/provider')}
              className="inline-flex items-center px-8 py-4 rounded-xl bg-primary-600 text-white text-lg font-semibold hover:bg-primary-700 transition-all shadow-lg"
            >
              <Stethoscope className="mr-2" size={24} />
              Join as Healthcare Provider
              <ArrowRight className="ml-2" size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/auth/patient')}
              className="inline-flex items-center px-8 py-4 rounded-xl bg-secondary-600 text-white text-lg font-semibold hover:bg-secondary-700 transition-all shadow-lg"
            >
              <UserCircle className="mr-2" size={24} />
              Sign Up as Patient
              <ArrowRight className="ml-2" size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Shield size={32} />,
              title: "Verified Professionals",
              description: "All healthcare providers undergo thorough verification of credentials",
              color: "from-primary-600 to-primary-700"
            },
            {
              icon: <Stethoscope size={32} />,
              title: "Quality Healthcare",
              description: "Connect with top specialists and receive expert medical care",
              color: "from-secondary-600 to-secondary-700"
            },
            {
              icon: <GraduationCap size={32} />,
              title: "Professional Growth",
              description: "Opportunities for medical students and healthcare professionals",
              color: "from-accent-600 to-accent-700"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Verification Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto text-center p-6 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl text-white shadow-lg"
        >
          <Shield className="mx-auto mb-4" size={32} />
          <h3 className="text-xl font-semibold mb-2">Verified Healthcare Providers</h3>
          <p className="text-gray-100">
            Healthcare provider credentials will be verified within 2-3 business days before full platform access is granted.
            We ensure the highest standards of professional verification for patient safety.
          </p>
        </motion.div>
      </div>
    </div>
  );
}