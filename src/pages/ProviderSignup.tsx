import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Building2, GraduationCap, Clock, FileText, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

export default function ProviderSignup() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialization: '',
    license: '',
    education: '',
    experience: '',
    hospital: '',
    workingHours: '',
    price: '',
    location: {
      latitude: 0,
      longitude: 0,
      address: '',
      city: '',
      state: '',
      country: '',
      pincode: '',
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    try {
      // Get geolocation
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            
            // Register with location
            await register({
              ...formData,
              location: {
                ...formData.location,
                latitude,
                longitude,
              }
            }, 'doctor');
            
            toast.success('Application submitted successfully! Please wait for verification.');
            navigate('/');
          },
          (error) => {
            console.error('Geolocation error:', error);
            // Register without location
            handleRegisterWithoutLocation();
          }
        );
      } else {
        // Register without location
        handleRegisterWithoutLocation();
      }
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    }
  };

  const handleRegisterWithoutLocation = async () => {
    try {
      await register(formData, 'doctor');
      toast.success('Application submitted successfully! Please wait for verification.');
      navigate('/');
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary-500"
                  placeholder="Dr. John Doe"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary-500"
                  placeholder="doctor@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary-500"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Professional Information</h2>
            <div>
              <label className="block text-sm font-medium mb-2">Medical License Number</label>
              <div className="relative">
                <FileText className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={formData.license}
                  onChange={(e) => setFormData({ ...formData, license: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary-500"
                  placeholder="License number"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Specialization</label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={formData.specialization}
                  onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary-500"
                  placeholder="e.g., Cardiology"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Years of Experience</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="number"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary-500"
                  placeholder="Years of experience"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Education</label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary-500"
                  placeholder="e.g., MD - Cardiology, MBBS"
                  required
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Practice Details</h2>
            <div>
              <label className="block text-sm font-medium mb-2">Hospital/Clinic Name</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={formData.hospital}
                  onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary-500"
                  placeholder="Hospital name"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Working Hours</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={formData.workingHours}
                  onChange={(e) => setFormData({ ...formData, workingHours: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary-500"
                  placeholder="e.g., Mon-Fri, 9 AM - 5 PM"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Consultation Fee (₹)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">₹</span>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary-500"
                  placeholder="e.g., 1000"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Practice Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={formData.location.address}
                  onChange={(e) => setFormData({
                    ...formData,
                    location: { ...formData.location, address: e.target.value }
                  })}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 focus:ring-2 focus:ring-primary-500"
                  placeholder="Full address"
                  required
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary-900 dark:text-white mb-2">
            Healthcare Provider Registration
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Step {step} of 3
          </p>
        </div>

        <div className="mb-8 relative">
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div
              className="h-2 bg-primary-600 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {renderStep()}
          
          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 border border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="ml-auto px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              {step === 3 ? 'Submit Application' : 'Continue'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}