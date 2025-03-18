import React, { createContext, useContext, useState, useEffect } from 'react';
import doctorsData from '../data/doctors.json';
import patientsData from '../data/patients.json';

type UserType = 'doctor' | 'patient';

interface User {
  id: string;
  email: string;
  name: string;
  profilePic: string;
  type: UserType;
  [key: string]: any;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, type: UserType) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  register: (data: any, type: UserType) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [doctors, setDoctors] = useState(doctorsData.doctors);
  const [patients, setPatients] = useState(patientsData.patients);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (email: string, password: string, type: UserType) => {
    const dataset = type === 'doctor' ? doctors : patients;
    const foundUser = dataset.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      throw new Error('Invalid credentials');
    }

    setUser({ ...foundUser, type });
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data };
      setUser(updatedUser);
      
      // Update the corresponding dataset
      if (user.type === 'doctor') {
        const updatedDoctors = doctors.map(d => 
          d.id === user.id ? { ...d, ...data } : d
        );
        setDoctors(updatedDoctors);
      } else {
        const updatedPatients = patients.map(p => 
          p.id === user.id ? { ...p, ...data } : p
        );
        setPatients(updatedPatients);
      }
    }
  };

  const register = async (data: any, type: UserType) => {
    const id = `${type[0]}${Math.random().toString(36).substr(2, 9)}`;
    const newUser = {
      id,
      ...data,
      profilePic: data.profilePic || `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=random`,
    };

    if (type === 'doctor') {
      setDoctors([...doctors, newUser]);
    } else {
      setPatients([...patients, newUser]);
    }

    setUser({ ...newUser, type });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}