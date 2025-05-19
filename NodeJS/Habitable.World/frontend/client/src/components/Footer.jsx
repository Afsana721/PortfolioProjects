//Import footer background image
import footer from '../assets/footer-background.jpg';
import '../css/footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {


    return (
        <footer>
            <img src={footer} className="footer-image"  alt="footer_world" />
            <section>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Register">Register</NavLink></li>
                        <li><NavLink to="/LoginForm">Login</NavLink></li>
                        <li><NavLink to="/UserProfile">User Profile</NavLink></li>
                        <li><NavLink to="/Research">Research</NavLink></li>
                        <li><NavLink to="/Explore">Explore</NavLink></li>
                        <li><NavLink to="/AboutPage">About</NavLink></li>
                    </ul>
                </nav>
            </section>
        </footer>
    );
};


export default Footer;