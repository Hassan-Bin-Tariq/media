import React from 'react'
import "./Try.css";
import Carousel from 'react-bootstrap/Carousel';
import * as THREE from 'three';
import { color } from '@mui/system';
import {motion} from "framer-motion";
import vid from "../../assets/vid.mp4";
import party from "../../assets/party.mp4";
import back from "../../assets/back.png";
import cover2 from "../../assets/cover2.png";
import  { useState,useRef,useEffect } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
//import Picture1 from './assets/Picture1.png'
import logo from "../../assets/Picture1.png";
import Header from '../Header/Header';

const Try = ({ setLoginUser }) => {
    const history = useHistory()
    const [width,setWidth]=useState(0);
    const carousel=useRef();
    useEffect(()=>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    },[]);
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
            <div className="container1">
                <img src={back} className="d-block w-100 h-100"></img>
                
            </div> 
            
            <div className="container2">
                <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
                    <motion.div drag="x"
                    dragConstraints={{right:0,left:-width}}
                     className="inner-carousel">
                        <motion.div className="item">
                            <img src={cover2}></img>
                        </motion.div>
                        <motion.div className="item">
                        <img src={back}></img>
                        </motion.div>
                        <motion.div className="item">
                        <img src={cover2}></img>
                        </motion.div>
                        <motion.div className="item">
                        <img src={back}></img>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div> 
            <div className="container2">
                

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