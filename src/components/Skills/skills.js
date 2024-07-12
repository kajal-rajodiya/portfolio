import React from "react";
import "./skills.css";
 import  Frontend from '../../assets/react-native-logo.png';
 import Backend from '../../assets/java-coffee-cup-logo.png';
 import Database from '../../assets/mysql-logo.png';

const Skills = () => {
    return (
        <section id="skills">
         <span className="skillsTitle">What I Do</span>
         <span className="skillsDesciption">Motivated Computer Science Engineering graduate fresher with 2 months of experience in Java, MySQL, React.js, HTML, CSS, and Spring Boot. Certified by CDAC and ready to embark on a software development career. Available to join immediately. </span>
        <div className="skillsBars">
            <div className="skillsBar">
                <img src={Frontend} alt="Frontend" className="skillsBarImg"/>
                <div className="skillsBarText">
                    <h2>Frontend Development</h2>
                    <p>I excel in frontend development, using HTML, CSS, and JavaScript to craft user-friendly interfaces. My aim is to create responsive designs that enhance user experience and ensure seamless navigation.</p>
                </div>
            </div>
        </div>

        <div className="skillsBars">
            <div className="skillsBar">
                <img src={Backend} alt="Backend" className="skillsBarImg"/>
                <div className="skillsBarText">
                    <h2>Backend Development</h2>
                    <p>I specialize in building strong backend systems using Java and Spring Boot. My expertise includes creating efficient RESTful APIs and seamlessly integrating them with databases. I focus on writing clean, reliable code to ensure smooth server-side operations for your applications.</p>
                </div>
            </div>
        </div>

        <div className="skillsBars">
            <div className="skillsBar">
                <img src={Database} alt="Database" className="skillsBarImg"/>
                <div className="skillsBarText">
                    <h2>Database Management</h2>
                    <p>I have hands-on experience in database management, proficient in MySQL for efficiently storing and retrieving data. My focus is on designing robust database architectures to ensure reliable data handling and seamless application performance.</p>
                </div>
            </div>
        </div>
        </section>
    );
}
export default Skills;