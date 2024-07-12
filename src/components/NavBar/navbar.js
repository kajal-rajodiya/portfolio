import React from "react";
import './navbar.css'
import {Link} from 'react-scroll';
const NavBar = () =>{
    return (
        <div>
            <nav className="navbar">
                <a ><img src=""/></a>
                <div className="desktopMenu" >
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">Clients</Link>
                </div>
                <button className="desktopMenuBtn">
                <i className="fas fa-envelope"></i> Contact Me 
                </button>
            </nav>
        </div>
    )
}
export default NavBar;