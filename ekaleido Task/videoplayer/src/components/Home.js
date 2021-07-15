// import logo from './logo.svg';
// import './App.css';
// import ReactPlayer from 'react-player';
import React, { Component } from 'react';
import { Container, Row, Col, Button,Input,Form } from "reactstrap";

import {Link} from 'react-router-dom'
import Aspirants from '../components/Images/Aspirants.jpg';



class App extends Component{
render(){
  return(
  <div style={{height:"865px", 

  width:"100%"}}>
<div >

 <Link to="/reactjs">
   
 <Button 
     className="button"> <h3>Click Here To watch it now</h3></Button>
    
 </Link>
 </div>
   <div style={{height:"865px", 

   width:"100%",
   background: `url(${Aspirants})`,
   backgroundSize: "cover",
   }}
    >
</div>
</div>

  )
}
}
export default App;