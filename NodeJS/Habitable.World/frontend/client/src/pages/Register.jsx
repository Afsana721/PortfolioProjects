import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import go_ahead from '../assets/go_ahead.png';
import '../css/register.css';
import axios from 'axios';

// Passes props to Register component 
function Register(props) {

  const navigate = useNavigate();
  //Create a hook useState object where store user register input data when user type. 
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    profession: '',
    concern: '',
    address: ''
  });


  // Handle register user input field data and update state inside fiber tree.
  /* After user types then react takes data from these fields and set on the fiber node for the specific elements objects */
  /* HandleRegisterData function expression take event object and extract object's name/key and value properties */
  const handleRegisterData = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  // Handle form submission and send data to server
  const handleRegisterServerData = async (event) => {
    event.preventDefault();
    console.log("Submitting form");
    try {
      const response = await axios.post('http://localhost:5000/Register', userData);
      console.log(response.data.message);
      //appsUserData(response.data);
      props.appsUserData(response.data);
      console.log("Registered:", response.data)


      // Optional: reset form if needed
      setUserData({
        username: '',
        email: '',
        password: '',
        profession: '',
        concern: '',
        address: ''
      });
      // Redirect to LoginForm route
      navigate('/LoginForm');
    } catch (error) {
      console.log("Error:", error);
    }
  };


  return (
    <section className="register-wrapper">
      <h1>Registration</h1>
      <p>Save your credentials</p>
      <section>
        <form onSubmit={handleRegisterServerData}>
          <label htmlFor="username">UserName</label>
          <input type="text" name="username" id="username" value={userData.username} onChange={handleRegisterData} />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={userData.email} onChange={handleRegisterData} />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={userData.password} onChange={handleRegisterData} />

          <label htmlFor="profession">Profession</label>
          <input type="text" name="profession" id="profession" value={userData.profession} onChange={handleRegisterData} />

          <label htmlFor="concern">Concern</label>
          <input type="text" name="concern" id="concern" value={userData.concern} onChange={handleRegisterData} />

          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" value={userData.address} onChange={handleRegisterData} />
          <button type="submit">Submit</button>
        </form>
      </section>

      <section id="reg_login">
        <p>Existing Account holder, pls use Login button</p>
        <NavLink to="/LoginForm" className="nav-link">
          Login <img src={go_ahead} alt="Next icon" />
        </NavLink>
      </section>
    </section>
  );
};

export default Register;
