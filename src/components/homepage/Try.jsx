import React from 'react'
import { useEffect } from "react";
import "./Try.css";
import * as THREE from 'three';
import { color } from '@mui/system';
import logo from "../../assets/Picture1.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Try = () => {

    return (
        <div className="home">
            
            <div className="homeCanvas">
                
            </div>
            <div className="homeContainer">
            <h3>THIS IS MY NEXT CANVAS</h3>
            <p>lorem ipsum jaskakhjkjshdkajjjjjjjjjjjjdhaknsk</p>
            </div> 
            <div className="container2">
            <h3>THIS IS MY NEXT CANVAS</h3>
            <p>lorem ipsum jaskakhjkjshdkajjjjjjjjjjjjdhaknsk</p>
            <p>lorem ipsum jaskakhjkjshdkajjjjjjjjjjjjdhaknsk</p>
            <p>lorem ipsum jaskakhjkjshdkajjjjjjjjjjjjdhaknsk</p>
            <h3>THIS IS MY NEXT CANVAS</h3>
            <p>lorem ipsum jaskakhjkjshdkajjjjjjjjjjjjdhaknsk</p>
            <p>lorem ipsum jaskakhjkjshdkajjjjjjjjjjjjdhaknsk</p>
            <p>lorem ipsum jaskakhjkjshdkajjjjjjjjjjjjdhaknsk</p>
            </div>
        {/* <div className="container2"></div>
        <div className="container3"></div> */}
            <div className="loginContainer"></div>
        </div>
        
      )
}

export default Try