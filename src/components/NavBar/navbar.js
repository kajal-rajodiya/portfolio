import React from "react";
import './navbar.css'
// import contactimg
// import logo form '../..assets/logo.png
import {Link} from 'react-scroll';
const NavBar = () =>{
    return (
        <div>
            <nav className="navbar">
                <img src="" alt="" className="logo"/>
                <div className="desktopMenu" >
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">Clients</Link>
                </div>
                <button className="desktopMenuBtn">
                    Contact Me 
                </button>
            </nav>
        </div>
    )
}
export default NavBar;