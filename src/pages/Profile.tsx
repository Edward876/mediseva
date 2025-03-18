import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { MapPin, Mail, Phone, User, Calendar, Droplet, GraduationCap, Building2, Clock, FileText } from 'lucide-react';

export default function Profile() {
  const { user } = useAuth();

  const renderPatientInfo = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Phone className="text-gray-400" size={20} />
          <span>{user.phone}</span>
        </div>
        <div className="flex items-center space-x-3">
          <Droplet className="text-gray-400" size={20} />
          <span>Blood Group: {user.bloodGroup}</span>
        </div>
        <div className="flex items-center space-x-3">
          <Calendar className="text-gray-400" size={20} />
          <span>Age: {user.age}</span>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <MapPin className="text-gray-400" size={20} />
          <span>{user.address}</span>
        </div>
      </div>
    </div>
  );

  const renderDoctorInfo = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <GraduationCap className="text-gray-400" size={20} />
          <span>{user.education}</span>
        </div>
        <div className="flex items-center space-x-3">
          <FileText className="text-gray-400" size={20} />
          <span>License: {user.license}</span>
        </div>
        <div className="flex items-center space-x-3">
          <Clock className="text-gray-400" size={20} />
          <span>Experience: {user.experience} years</span>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Building2 className="text-gray-400" size={20} />
          <span>{user.hospital}</span>
        </div>
        <div className="flex items-center space-x-3">
          <Clock className="text-gray-400" size={20} />
          <span>{user.workingHours}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <img
            src={user.profilePic}
            alt={user.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-primary-500"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2 text-center md:text-left">{user.name}</h1>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="text-gray-400" size={20} />
                <span className="capitalize">{user.type}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-gray-400" size={20} />
                <span>{user.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          {user.type === 'patient' ? renderPatientInfo() : renderDoctorInfo()}
        </div>
      </motion.div>
    </div>
  );
}