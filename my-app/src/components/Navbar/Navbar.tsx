import Reac, { Component } from "react";
import './Navbar.css'
import {MenuItems} from "./MenuItems"
import { isTemplateElement } from "@babel/types";

class Navbar extends Component{ //class used for states instead of functions
    render(){ //This is needed for Class?
        return(
            <nav className="NavbarItems">
                <h1 className ="navbar-logo">React</h1>
                <div className="menu-icon">
                    
                </div>
                <ul>
                <li><a href="#home" >Home</a></li>
                    <li><a href="#news">Appointment</a></li> 
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
                



            </nav>

        )

    }
       
    


    
}

export default Navbar;  