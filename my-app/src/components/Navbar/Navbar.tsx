import Reac, { Component } from "react";
import './Navbar.css'
import {MenuItems} from "./MenuItems"
import { isTemplateElement } from "@babel/types";
import styled from 'styled-components';
import { ButtonGroup, Button } from '@material-ui/core';

const Yolo = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
`

const StyledButton = styled(Button)`
  height: 3rem;
  width: 15rem;
  color: blue;
  

`


class Navbar extends Component{ //class used for states instead of functions
    render(){ //This is needed for Class?
        return(
            <div>
                <nav className="NavbarItems">
                <h1 className ="navbar-logo">React</h1>
                <div className="menu-icon">
                    
                </div>
                <ul>
                
                    <li><Yolo as ="a" href="#book">Book Now</Yolo></li>
                </ul>
                



            </nav>
    
            <StyledDiv>
                <ButtonGroup style={{color:'red'}}>
                    <StyledButton variant='contained' href='/'>Home</StyledButton>
                    <StyledButton variant='contained' href='/about'>About Me</StyledButton>
                    <StyledButton variant='contained' href='/experience'>Experience</StyledButton>
                    <StyledButton variant='contained' href='/contact'>Contact Me</StyledButton>
                </ButtonGroup>
            </StyledDiv>
            </div>
            

        )

    }
       
    


    
}

export default Navbar;  