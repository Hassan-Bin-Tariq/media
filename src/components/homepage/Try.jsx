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
import cover4 from "../../assets/cover4.png";
import vid from "../../assets/vid.mp4";
import party from "../../assets/party.mp4";
import cover5 from "../../assets/cover5.png";
import cover6 from "../../assets/new.png";
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
                {/* <img src={cover3} className="d-block w-100 h-50"></img> */}
                <video className="d-block w-100 h-50" loop="true" autoplay="autoplay" controls muted>
                <source src={party} type="video/mp4" ></source>
                </video> 
            </div> 
            <div className="container2">
                {/* <img src={cover4} className="d-block w-100 h-50"></img> */}
                <video className="d-block w-100 h-50" loop="true" autoplay="autoplay" controls muted>
                <source src={vid} type="video/mp4" ></source>
                </video>

            </div>
        {/* <div className="container2"></div>
        <div className="container3"></div> */}
            <div className="container2">
                <img src={cover6} className="d-block w-100 h-50"></img>
                <button>check</button>
            </div>
        </div>
        
    )
}

export default Try