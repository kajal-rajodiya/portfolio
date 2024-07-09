import React from "react";
import Intro from './intro.css';
import { Link } from "react-scroll";
// import bg from '../../assests/image.png';
// import button image

const Intro = ()=>{
    return(
        <div>
            <section id="intro">
                <div className="introConteant" >
                <span className="hello">Hello</span>
                <span className="introText">I'm<span className="introName">Kajal</span><br />Full Stack Developer</span>
                <p className="introPara">I am a slilled Full Stack Developer</p>
                <Link><button className="btn" ><img src="" alt="hire me" className="btnImg"/>Hire Me</button></Link>
                </div>
                <img src="" alt="" className="bg" />
            </section>
        </div>
    )
}
export default Intro;