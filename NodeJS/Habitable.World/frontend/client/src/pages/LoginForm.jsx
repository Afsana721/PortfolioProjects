
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/loginForm.css';

//create a funcional component 

function LoginForm(props) {

    const navigate = useNavigate();

    //How to use username inside jsx - then comes to the state concept from react 
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    });      //initially nothing as userName.

    /*store username from event but the event will happens inside this funciton jsx or html 
    form, this funciton able gets access this username data as it accessiblity. */
    const handleLoginData = function (event) {
        /*take an object by distructured so it get objects key and values from the event's target object. */
        const { name, value } = event.target;

        setUserData((prevData) => ({
            ...prevData, [name]: value
        })
        );
    };

    //Create a function who take user login data and send to server 
    const handleServerLoginData = async function (event) {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/LoginForm', userData);
            console.log(response.data.message);
            setUserData({ username: '', email: '', password: '' });
            navigate("/UserProfile");
            props.appsUserData(response.data.user);
        }
        catch (error) {
            console.log("Error : " + error);
        }
    }
    return (
        <section className='loginSce'>
            <section>
                <h1>Please, attaches with apps by login</h1>
            </section>
            <section id='formSec'>
                <form onSubmit={handleServerLoginData}>
                    <label htmlFor="username">User Name</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={userData.username}
                        onChange={handleLoginData} />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={userData.email}
                        onChange={handleLoginData} />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={userData.password}
                        onChange={handleLoginData} />
                    <NavLink to="/forgot" className="forgot">Forgot Password?</NavLink>
                    <button type="submit">Login</button>
                </form>
            </section>
        </section>

    );
}

export default LoginForm;