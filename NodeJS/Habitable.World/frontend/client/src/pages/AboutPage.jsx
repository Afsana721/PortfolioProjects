import react_logo from '../assets/React_Logo.png';
import technology_Human from '../assets/technology_Human.jpg';
import DOM_Virtual from '../assets/DOM_Virtual.jpg';
import machine_language from '../assets/machine_language.jpg';
import references from '../assets/references.jpg';
import technology from '../assets/technology.jpg';
import { useRef } from 'react';
import "../css/aboutPage.css";

function AboutPage() {

    //Using useRef make a reference to a specific DOM element
    const programmingRef = useRef(null);

    //Creating function to make a callback when user action happens 
    const scrollToProgramming = () => {
        programmingRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className="about">
            <header id="head">
                <h1>What Is a software Application?</h1>
                <img src={react_logo} alt="React Logo" />
                <p>Application software is a type of computer program that performs a specific,
                    educational, and business function. Each application is designed to assist
                    end-users in accomplishing a variety of tasks, which may be related to
                    productivity, creativity, or communication.
                    <a href="https://www.geeksforgeeks.org/what-is-application-software/"
                        target='_blank' rel="noreferrer">info</a></p>
            </header>

            <section id="technology">
                <h2>Purpose of Applications</h2>
                <img src={technology_Human} alt="Purpose of Apps" />
                <p>Application software refers to programs designed to perform specific tasks for
                    users. Unlike system software, which manages and operates computer hardware,
                    application software helps users accomplish particular activities, such as word
                    processing, data management, or graphic design.
                    <a href="https://en.wikipedia.org/wiki/Application_software" target='_blank'
                        rel="noreferrer">
                        info</a></p>
                <button onClick={scrollToProgramming}>Programming Scection</button>
            </section>

            <section id="programming">
                <h2>How programming Languages mimics the Brain</h2>
                <p>DOM vs. memory processing</p>
                <img src={DOM_Virtual} alt="DOM manipulation" />
                <p>Programming languages share some similarities with the human brain in how they
                    are learned and processed, particularly in the areas of language processing and
                    logical reasoning.
                    <a href="https://www.weforum.org/stories/2016/01/how-computers-could-mimic-brains/"
                        target='_blank' rel="noreferrer">info</a></p>
            </section>

            <section ref={programmingRef} id="language">
                <h2>Programming Languages</h2>
                <img src={machine_language} alt="Programming" />
                <p>A programming language is a formal system of notation used to express instructions
                    for a computer. It defines how to represent and manipulate data, including different
                    types of data like numbers, text, and logical values. These data types are used to manage
                    user expressions by providing a structure for storing and processing information, ultimately
                    allowing the program to respond to user input and perform actions based on that input.
                    <a href="https://www.britannica.com/technology/computer-programming-language"
                        target='_blank' rel="noreferrer">info</a></p>
            </section>

            <section id="data">
                <h2>Data & Memory</h2>
                <p>Connection to how the human brain stores references</p>
                <img src={references} alt="Remembering" />
                <p>In computer science, data refers to information that can be interpreted and used
                    by a computer, while memory is the electronic holding place for this data and instructions,
                    allowing the computer to access it quickly. Memory is crucial because it allows the
                    computer to store data and instructions for immediate use, facilitating the processing
                    of information by the CPU.
                    <a href="https://www.geeksforgeeks.org/computer-memory/" target='_blank'
                        rel="noreferrer">info</a></p>
            </section>

            <section id="human_computer">
                <h2>Tech Timeline & human-computer interation</h2>
                <img src={technology} alt="Evolving" />
                <p>Human-Computer Interaction (HCI) evolved alongside technology, starting with
                    command-line interfaces in the 1950s and 1960s, then transitioning to graphical
                    user interfaces (GUIs) in the 1980s with the rise of personal computers. HCI
                    research initially focused on improving usability and efficiency of computer
                    systems, but expanded to encompass emotional and social aspects of human-computer
                    interaction. Today, HCI encompasses a wide range of interactions, including mobile
                    devices, virtual reality, and artificial intelligence.
                    <a href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction"
                        target='_blank' rel="noreferrer">info</a></p>
            </section>
        </main>
    )
};

export default AboutPage;