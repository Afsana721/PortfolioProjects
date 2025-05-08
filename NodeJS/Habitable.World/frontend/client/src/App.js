import { Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Register from './pages/Register.jsx';
import LoginForm from './pages/LoginForm.jsx';
import UserProfile from './pages/UserProfile.jsx';
import AboutPage from './pages/AboutPage.jsx';
import Explore from './pages/Explore.jsx';
import Research from './pages/Research.jsx';
import React, { useEffect, useState } from 'react';
import topics from "./data/topicsData.js";
import axios from 'axios';
//import context from TopicContext 
import { TopicsContext } from './context/TopicsContext.js';

function App() {
  //set hook to grab Register component's props
  const [userData, setUserData] = useState({});

  /* Initialize topic array inside here and use them in jsx as return.*/
  const topicArray = topics;

  /* Set sleected Topic state when user click then jsx return selected tpoic 
    as jsx return, so fiber tree need data inside that object node.*/
  const [selectedTopic, setSelectedTopic] = useState({
    title: '',
    image: '',
    description: '',
    query: '',
    Nasa: '',
    GBIF: ''
  });
  /* Handler function to get li object's id when user click it*/
  const handleSelectClick = (topic) => {
    setSelectedTopic(topic);
  };

  //Create context to share data to Explore.jsx 
  //const topicsContext = React.createContext([{}]);

  //Set NASA and GBIF api data states in side hook object 
  const [nasaData, setNasaData] = useState([]);

  const [gbifData, setGbifData] = useState([]);


  //Nasa api handler function from frontend to server 
  const handleNasaData = async function (topicArray) {
    try {
      //Store response 
      const responses = await Promise.all(topicArray.map(async (topic) => {
        const response = await axios.get("http://localhost:5000/api/nasa",
          {
            params: {
              query: topic.Nasa, title: topic.title
            }
          });
        return { ...topic, nasaData: response.data }
      }));
      //Set state wit responses
      setNasaData(responses);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  //GBIF api handler function from frontend to server 
  const handleGbifData = async function (topicArray) {
    try {
      //Store response 
      const responses = await Promise.all(topicArray.map(async (topic) => {
        const response = await axios.get("http://localhost:5000/api/gbif",
          {
            params: {
              query: topic.GBIF, title: topic.title
            }
          });
        return { ...topic, gbifData: response.data }
      }));
      //Set state wit responses
      setGbifData(responses);
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  //use useEffect to call Nasa & Gbif function to get data from server 
  useEffect(() => {
    handleNasaData(topicArray);
    handleGbifData(topicArray);
  }, []);


  return (
    <div>
      < Header />     {/* Always visible */}
      {/* user Routes object to define route */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Register" element={<Register appsUserData={setUserData} />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/UserProfile" element={<UserProfile userData={userData} />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/Research" element={<Research />} />
        <TopicsContext.Provider value={{ topicArray, nasaData, gbifData, selectedTopic, handleSelectClick }} >
          <Route path="/Explore" element={<Explore />} />
        </TopicsContext.Provider>
      </Routes>
    </div>
  );
}

export default App;
