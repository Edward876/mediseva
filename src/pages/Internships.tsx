import { motion } from 'framer-motion';
import { Building2, Clock, GraduationCap, Mail } from 'lucide-react';
import toast from 'react-hot-toast';
import type { Internship } from '../types';

export default function Internships() {
  const internships: Internship[] = [
    {
      id: '1',
      doctorId: '1',
      doctorName: 'Dr. Sarah Johnson',
      hospital: 'City General Hospital',
      duration: '3 months',
      type: 'Cardiology'
    },
    {
      id: '2',
      doctorId: '2',
      doctorName: 'Dr. Michael Chen',
      hospital: 'Metropolitan Medical Center',
      duration: '6 months',
      type: 'Neurology'
    },
    {
      id: '3',
      doctorId: '3',
      doctorName: 'Dr. Emily Rodriguez',
      hospital: 'Children\'s Medical Center',
      duration: '4 months',
      type: 'Pediatrics'
    }
  ];

  const applyForInternship = (internship: Internship) => {
    toast.success(`Application sent for ${internship.type} internship under ${internship.doctorName}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold mb-4">Medical Internships</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Find clinical exposure opportunities with top healthcare professionals
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {internships.map((internship, index) => (
          <motion.div
            key={internship.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-100 rounded-full text-sm font-medium">
                {internship.type}
              </span>
            </div>
            
            <h2 className="text-xl font-semibold mb-4">{internship.doctorName}</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Building2 size={18} className="mr-2" />
                {internship.hospital}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Clock size={18} className="mr-2" />
                {internship.duration}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <GraduationCap size={18} className="mr-2" />
                Clinical Exposure
              </div>
            </div>

            <button
              onClick={() => applyForInternship(internship)}
              className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <Mail size={18} className="mr-2" />
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}