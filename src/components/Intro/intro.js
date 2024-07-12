import React from "react";
import './intro.css'; // Import the CSS without assigning it to a variable
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
const Intro = () => {
    return (
        <div>
            <section id="intro">
                <div className="introContent" >
                    <span className="hello">Hello,</span>
                    <span className="introText">I'm <span className="introName">Kajal Rajodiya</span><br />Full Stack Developer</span>
                    <p className="introPara">Dynamic Fresher With Strong Skills in Backend and Frontend Development.</p>
                    <Link><button className="btn" >
                    <FontAwesomeIcon icon={faBriefcase} className="icon" />Hire Me
                    </button></Link>
                </div>
                <img src="" alt="" className="bg" />
            </section>
        </div>
    )
}

export default Intro;