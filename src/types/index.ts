export interface Doctor {
  id: string;
  name: string;
  specialization: string[];
  hospital: string;
  rating: number;
  image: string;
  availableSlots: string[];
  experience: number;
  education: string;
  price: number;
  location: string;
}

export interface EmergencyHospital {
  id: string;
  name: string;
  distance: string;
  contact: string;
  address: string;
}

export interface Internship {
  id: string;
  doctorId: string;
  doctorName: string;
  hospital: string;
  duration: string;
  type: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}