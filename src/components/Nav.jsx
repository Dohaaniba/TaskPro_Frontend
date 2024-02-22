import React from "react";
import '../css/Nav.scss';
import { NavLink } from 'react-router-dom';

function Nav(){
    return(
        
            <nav>
        <a>
            <img className="logo" src="./logo.png" alt="logo" />
        </a>
        
        <NavLink to="/signup">  <button className="signup">sign up</button> </NavLink>
        
        
    </nav>
        
        
    )
}
export default Nav;