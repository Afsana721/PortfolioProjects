import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Register from './pages/Register.jsx';
import LoginForm from './pages/LoginForm.jsx';
import UserProfile from './pages/UserProfile.jsx';
import AboutPage from './pages/AboutPage.jsx';
import Explore from './pages/Explore.jsx';
import Research from './pages/Research.jsx';
import React, { useState } from 'react';
import topics from "./data/topicsData.js";
//import context from TopicContext 
import { TopicsContext } from './context/TopicsContext.js';

function App() {
  //set hook to grab Register component's props
  const [userData, setUserData] = useState({});
  console.log("App.js userData:", userData);

  /* Initialize topic array inside here and use them in jsx as return.*/
  const topicArray = topics;

  return (
    <div>
      < Header />     {/* Always visible */}
      {/* user Routes object to define route */}
      <TopicsContext.Provider value={{ topicArray }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Register" element={<Register appsUserData={setUserData} />} />
          <Route path="/LoginForm" element={<LoginForm appsUserData={setUserData} />} />
          <Route path="/UserProfile" element={<UserProfile userData={userData} />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/Research" element={<Research />} />
          <Route path="/Explore" element={<Explore />} />
        </Routes>
      </TopicsContext.Provider>
      <Footer />          {/* Always visible */}
    </div>
  );
}

export default App;
