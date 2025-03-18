import { motion } from 'framer-motion';
import { Phone, MapPin, Ambulance } from 'lucide-react';
import toast from 'react-hot-toast';
import type { EmergencyHospital } from '../types';

export default function Emergency() {
  const hospitals: EmergencyHospital[] = [
    {
      id: '1',
      name: 'City General Hospital',
      distance: '2.5 km',
      contact: '+91 302930 393',
      address: '123 Healthcare Ave, City Center',
    },
    {
      id: '2',
      name: 'Metropolitan Emergency Center',
      distance: '3.8 km',
      contact: '+91 30294 393',
      address: '456 Medical Blvd, Downtown',
    },
    {
      id: '3',
      name: "St. John's Hospital",
      distance: '4.2 km',
      contact: '+91 3024 39304',
      address: '789 Emergency Road, Uptown',
    },
  ];

  const requestAmbulance = (hospital: EmergencyHospital) => {
    toast.success(
      `Emergency services contacted from ${hospital.name}. Help is on the way!`
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold mb-4">Emergency Services</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Quick access to emergency medical services - No login required
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hospitals.map((hospital, index) => (
          <motion.div
            key={hospital.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">{hospital.name}</h2>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin size={18} className="mr-2" />
                  <span>{hospital.distance} away</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone size={18} className="mr-2" />
                  <span>{hospital.contact}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 pl-6">
                  {hospital.address}
                </p>
              </div>

              <button
                onClick={() => requestAmbulance(hospital)}
                className="w-full flex items-center justify-center px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <Ambulance size={20} className="mr-2" />
                Request Ambulance
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-12 p-6 bg-red-50 dark:bg-red-900/20 rounded-xl text-center"
      >
        <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">
          Emergency Helpline
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          For immediate assistance, call <span className="font-bold">108</span>
        </p>
      </motion.div>
    </div>
  );
}
