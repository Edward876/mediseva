import { motion } from 'framer-motion';
import { Star, Mail, Calendar } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import type { Doctor } from '../types';
import DoctorSearch from '../components/DoctorSearch';
import SymptomChat from '../components/SymptomChat';

export default function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const doctors: Doctor[] = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialization: ['Cardiology', 'Internal Medicine'],
      hospital: 'City General Hospital',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
      availableSlots: ['10:00 AM', '2:00 PM', '4:00 PM'],
      experience: 12,
      education: 'MD - Cardiology, MBBS',
      price: 1000,
      location: 'New York'
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialization: ['Neurology', 'Neurosurgery'],
      hospital: 'Metropolitan Medical Center',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300',
      availableSlots: ['9:00 AM', '1:00 PM', '5:00 PM'],
      experience: 15,
      education: 'MD - Neurology, MBBS',
      price: 1500,
      location: 'Los Angeles'
    },
    {
      id: '3',
      name: 'Dr. Emily Rodriguez',
      specialization: ['Pediatrics', 'Child Psychology'],
      hospital: 'Children\'s Medical Center',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
      availableSlots: ['11:00 AM', '3:00 PM', '4:30 PM'],
      experience: 8,
      education: 'MD - Pediatrics, MBBS',
      price: 800,
      location: 'Chicago'
    }
  ];

  const bookAppointment = (doctor: Doctor, slot: string) => {
    toast.success(`Appointment booked with ${doctor.name} at ${slot}`);
    setSelectedDoctor(null);
  };

  const contactForInternship = (doctor: Doctor) => {
    toast.success(`Email sent to ${doctor.name} for internship opportunity`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Find and Book Top Doctors
      </motion.h1>

      <DoctorSearch />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor, index) => (
          <motion.div
            key={doctor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{doctor.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{doctor.hospital}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {doctor.specialization.map((spec) => (
                  <span
                    key={spec}
                    className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-100 rounded-full text-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400" size={20} />
                <span className="ml-1 font-semibold">{doctor.rating}</span>
                <span className="mx-2">•</span>
                <span>{doctor.experience} years exp.</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedDoctor(doctor)}
                  className="flex-1 flex items-center justify-center px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                >
                  <Calendar size={18} className="mr-2" />
                  Book
                </button>
                <button
                  onClick={() => contactForInternship(doctor)}
                  className="flex items-center justify-center px-4 py-2 border-2 border-teal-500 text-teal-500 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-colors"
                >
                  <Mail size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedDoctor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full"
          >
            <h3 className="text-xl font-semibold mb-4">Book Appointment</h3>
            <p className="mb-4">Available slots for {selectedDoctor.name}:</p>
            <div className="grid gap-2">
              {selectedDoctor.availableSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => bookAppointment(selectedDoctor, slot)}
                  className="w-full px-4 py-2 text-left bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-colors"
                >
                  {slot}
                </button>
              ))}
            </div>
            <button
              onClick={() => setSelectedDoctor(null)}
              className="mt-4 w-full px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </motion.div>
        </div>
      )}

      <SymptomChat />
    </div>
  );
}