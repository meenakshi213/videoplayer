// import logo from './logo.svg';
// import './App.css';
// import ReactPlayer from 'react-player';
import React, { Component ,useState} from 'react';
import { Container, Row, Col, Button,Input,Form } from "reactstrap";

import {BrowserRouter,Route} from 'react-router-dom'





function VideoPlayerStructure(props){
    console.log("pro",props)

    const courseName=props.match.params.coursename;
  const courses={
    reactjs:[
      {title:"Episode 1",vid:"0Kl1ucZuSZ8"},
      {title:"Episode 2",vid:"7xdt3z85hu4"},
      {title:"Episode 3",vid:"WeWXC_ivl5s"},
      {title:"Episode 4",vid:"MYQB8SNy8Gc"},
      {title:"Episode 5",vid:"5H8xQF0PwvA"}
    ]
  }

  const [vid,uid]= useState(courses[courseName][0].vid)
  const [title,utitle]= useState(courses[courseName][0].title)
  const renderVideo=()=>{
    return(
      <div>
        <h1>{title}</h1>
      <div class="video-container">
      <iframe width="853" height="480" src={"//www.youtube.com/embed/"+vid+"?rel=0"} frameBorder="0" allowFullScreen></iframe>
      {/* <iframe width="853" height="480" src={"//www.youtube.com/embed/"+Q8TXgCzxEnw+"?rel=0"} frameBorder="0" allowFullScreen></iframe> */}
    </div>
    </div>
    )
  }
  return(
<div >
  
 
 {renderVideo()}
 
 <div className="collection">
        {/* <a href="#!" className="collection-item">Alvin</a>
        <a href="#!" className="collection-item active">Alvin</a>
        <a href="#!" className="collection-item">Alvin</a>
        <a href="#!" className="collection-item">Alvin</a> */}
        
    { courses[courseName].map(item=>{
     

      return <Button 
     className="button"
      onClick={()=>{
          uid(item.vid)
          utitle(item.title)
        }}>{item.title}</Button>

 
   })
}
      </div>
</div>

  )
}
export default VideoPlayerStructure;