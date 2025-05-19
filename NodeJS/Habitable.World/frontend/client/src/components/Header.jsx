//import images and react useState hook
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import pic1 from '../assets/NaturePic_1.jpeg';
import pic2 from '../assets/NaturePic_2.jpeg';
import pic3 from '../assets/NaturePic_3.jpeg';
import pic4 from '../assets/NaturePic_4.jpeg';
import pic5 from '../assets/NaturePic_5.jpeg';
import pic6 from '../assets/NaturePic_6.jpeg';
import pic7 from '../assets/NaturePic_7.jpeg';
import pic8 from '../assets/NaturePic_8.jpeg';
import LogoPic9 from '../assets/Nature_logo.jpeg';
import '../css/header.css';

const images = {
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8
};

function Header() {
  //Create an Array from images object 
  const imageList = Object.values(images);

  //Use useState hook and setup current image index from imageList
  const [imageIndex, setImageIndex] = useState(0);

  //handler to handle images 
  // const handleClickImageChange = function () {
  //   //set current index and increase with 1
  //   setImageIndex(function (current) {
  //     return (current + 1) % imageList.length;
  //   });
  // }
  
  //Using useEffect to rotating images 
  useEffect(() => {
  const interval = setInterval(() => {
    setImageIndex((current) => (current + 1) % imageList.length);
  }, 3000);

  return () => clearInterval(interval);
}, [imageList.length]);


  return (
    <section id="header">
      <nav className="nav">
        <ul id="items">
          <li id="logo-text">
            Nature Conservancy{/* no space here */}
            <img src={LogoPic9} alt="logo" />
          </li>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Register">Register</NavLink></li>
          <li><NavLink to="/LoginForm">Login</NavLink></li>
          <li><NavLink to="/UserProfile">User Profile</NavLink></li>
          <li><NavLink to="/Research">Research</NavLink></li>
          <li><NavLink to="/Explore">Explore</NavLink></li>
          <li><NavLink to="/AboutPage">About</NavLink></li>
        </ul>
      </nav>

      <img
        id="rotating-img"
        src={imageList[imageIndex]}
        alt="Rotating nature scene"/>
    </section>
  );
}

export default Header;

