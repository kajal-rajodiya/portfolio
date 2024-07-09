import React from "react";
import './intro.css'; // Import the CSS without assigning it to a variable
import { Link } from "react-scroll";

// import bg from '../../assests/image.png';
// import button image
const Intro = () => {
    return (
        <div>
            <section id="intro">
                <div className="introContent" >
                    <span className="hello">Hello,</span>
                    <span className="introText">I'm <span className="introName">Kajal</span><br />Full Stack Developer</span>
                    <p className="introPara">I am a skilled Full Stack Developer</p>
                    <Link><button className="btn" >Hire Me</button></Link>
                </div>
                <img src="" alt="" className="bg" />
            </section>
        </div>
    )
}

export default Intro;