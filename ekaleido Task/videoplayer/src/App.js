import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';
import React, { Component } from 'react';
import { Container, Row, Col, Button,Input,Form } from "reactstrap";
// import video2 from "./components/Videos/video2.mp4"
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home'
import VideoPlayerStructure from './components/VideoPlayerStructure'



function App(){

  return(
<div className="App">
  <BrowserRouter>
  <Route exact path="/" component={Home} />
  <Route path="/:coursename" component={VideoPlayerStructure} />
  </BrowserRouter>
 
</div>

  )
}
export default App;