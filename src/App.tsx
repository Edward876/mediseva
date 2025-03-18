import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Internships from './pages/Internships';
import Emergency from './pages/Emergency';
import GetStarted from './pages/GetStarted';
import ProviderSignup from './pages/ProviderSignup';
import PatientSignup from './pages/PatientSignup';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
            <Navbar />
            <div className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/doctors" element={
                  <ProtectedRoute>
                    <Doctors />
                  </ProtectedRoute>
                } />
                <Route path="/internships" element={
                  <ProtectedRoute>
                    <Internships />
                  </ProtectedRoute>
                } />
                <Route path="/emergency" element={<Emergency />} />
                <Route path="/get-started" element={<GetStarted />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/auth/provider" element={<ProviderSignup />} />
                <Route path="/auth/patient" element={<PatientSignup />} />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } />
                <Route path="/settings" element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                } />
              </Routes>
            </div>
            <Toaster position="bottom-right" />
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;