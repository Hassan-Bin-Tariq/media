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
import  { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
//import Picture1 from './assets/Picture1.png'
import logo from "../../assets/Picture1.png";

const Try = ({ setLoginUser }) => {
    const history = useHistory()
    //asd
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                //alert(res.data.message)
                setLoginUser(res.data.user)
                if(res.data.message === "Teacher")
                {
                    history.push("/teacherPortal")
                }
                else if (res.data.message === "Mentor")
                {
                    history.push("/mentorPortal")
                }
                else if (res.data.message === "Photography Head")
                {
                    history.push("/photographyPortal")
                }
                else if(res.data.message === "GeneralBody")
                {
                    history.push("/GeneralPortal")
                }
                else{
                    history.push("/studentPortal")
                }
            })
    }
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
            <div className="container3">
                <div className="signupdiv" >
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1>Sign Up Today</h1>
                    <h4>and see it for yourself!</h4>
                    </div>
               
                <div className="loginHome">
                    
                    <div>
                        <img className="homeimg" src={logo}/>
                        <br></br>
                        <h4>Already a Member? Login</h4> 
                        </div>
                    <br></br>


                        <div className="email">
                                <label id="mail">Email</label>
                                <br></br>
                                {/* <input className="emailtak"></input> */}
                                <input className="emailtak" type="text" name="email" value={user.email} onChange={handleChange}></input>
                            </div>
                    <br></br>
                    
                            <div className="pass">
                                <label >Password</label>
                                <br></br>
                                {/* <input className="passcode"></input> */}
                                <input className="passcode" type="password" name="password" value={user.password}  onChange={handleChange}></input>
                            </div>    
                            <br></br>

                        <div>
                            <button className="btnReg" onClick={login}>Login</button>
                            </div>
                        <div><h6>OR</h6></div>
                        <div><button className="btnlog" onClick={() => history.push("/register")}>Register</button></div>
                        <br></br>
                        <div>

                        
                    </div>
                </div>
                {/* <img src={cover6} className="d-block w-100 h-50"></img> */}
            </div>
            <footer className="mt-2 p-2 text-center text-secondary ">
                Copyright © 2022 Team Welp FAST CFD. All Rights Reserved.</footer>
        </div>
        
    )
}

export default Try