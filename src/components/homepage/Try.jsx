import React from 'react'
import { useEffect } from "react";
import "./Try.css";
import Carousel from 'react-bootstrap/Carousel';
import * as THREE from 'three';
import { color } from '@mui/system';
import icit from "../../assets/icit.jpg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import convo1 from "../../assets/convo1.png";
import crop1 from "../../assets/crop1.png";
import crop2 from "../../assets/crop2.png";
import cover1 from "../../assets/cover1.png";
import cover2 from "../../assets/cover2.png";
import cover3 from "../../assets/cover3.png";
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

const Try = () => {

    return (
        <div className="home">
            
            <Carousel fade>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100 h-100"
                    src={convo1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100 h-50"
                    src={crop2}
                    alt="Second slide"
                    />
                </Carousel.Item >
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100 h-50"
                    src={crop1}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
            <div className="container2">
                <img src={cover3} className="d-block w-100 h-50"></img>
            </div> 
            <div className="container2">
                <img src={cover1} className="d-block w-100 h-50"></img>
            </div>
        {/* <div className="container2"></div>
        <div className="container3"></div> */}
            <div className="container2">
                <img src={convo1} className="d-block w-100 h-50"></img>
            </div>
        </div>
        
    )
}

export default Try