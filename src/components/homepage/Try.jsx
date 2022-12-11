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
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

const Try = () => {

    return (
        <div className="home">
            
                <MDBCarousel showControls fade>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={1}
                        src='https://mdbootstrap.com/img/new/slides/041.jpg'
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={2}
                        src='https://mdbootstrap.com/img/new/slides/042.jpg'
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={3}
                        src='https://mdbootstrap.com/img/new/slides/043.jpg'
                        alt='...'
                    />
                    </MDBCarousel>
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