import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import LoginForm from './pages/LoginForm';
import UserProfile from './pages/UserProfile';
import AboutPage from './pages/AboutPage';
import Explore from './pages/Explore';
import Research from './pages/Research';
import { useState } from 'react';


function App() {
  //set hook to grab Register component's props
  const [userData, setUserData] = useState({});

  return (
    <div>
      < Header />     {/* Always visible */}
      {/* user Routes object to define route */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Register" element={<Register handleRegisterServerData={setUserData} />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/UserProfile" element={<UserProfile userData={userData} />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/Explore" element={<Explore />} />
      </Routes>
    </div>
  );
}

export default App;
