import reactDom, {useState, useEffect} from 'react';
import './Home.css'
function App() {
    return (
        //This is not using css style sheet, style sheet require className ="";     
        //will need to update href with actual link  
        <div>
          <ul>
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#news">Appointment</a></li> 
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
          </ul>
        </div> 
        
    );
  }
  
  export default App; 