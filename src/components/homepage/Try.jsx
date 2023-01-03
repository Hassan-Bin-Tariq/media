import React from 'react'
import "./Try.css";
import Carousel from 'react-bootstrap/Carousel';
import * as THREE from 'three';
import { color } from '@mui/system';
import {motion} from "framer-motion";
import covervid from "../../assets/cover-vid.mp4";
import story from "../../assets/green_media.mp4";
// import homecoming from "../../assets/landscapeHomecoming.mp4";
import  { useState,useRef,useEffect } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import fastold from '../../assets/fastold.jpg'
import team from '../../assets/team.jpg'
import icit from '../../assets/icit.jpg'
import c from '../../assets/c.png'
import cc from '../../assets/cc.png'
import ccc from '../../assets/ccc.png'
import cccc from '../../assets/cccc.png'
import one from '../../assets/c1.png'
import two from '../../assets/c2.png'
import three from '../../assets/c3.png'
import four from '../../assets/c4.png'
import five from '../../assets/c5.png'
import six from '../../assets/c6.png'
import seven from '../../assets/c7.png'
import eight from '../../assets/c8.png'
import nine from '../../assets/c9.png'
import ten from '../../assets/c10.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();

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
            {/* STARTING DIV =>DIV#01 */}    
            <div className="container1">
                
                 <video muted autoPlay="autoplay" className="d-block w-100 h-100">
                    
                    <source src={covervid} type="video/mp4"></source>
                 </video>
                {/* <img src={back} className="d-block w-100 h-100"></img> */}
                
            </div> 
            {/* CAROUSEL DIV =>DIV#02 */}
            <div className="carousel-container">
                {/* <div className="pic-div">
                    
                </div> */}
                <h1>check this out</h1>
                
                <div className="container2">
                    <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
                        <motion.div drag="x"
                        dragConstraints={{right:0,left:-width}}
                        className="inner-carousel">
                            <motion.div className="item">
                                <img src={one}></img>
                            </motion.div>
                            <motion.div className="item">
                            <img src={two}></img>
                            </motion.div>
                            <motion.div className="item">
                            <img src={four}></img>
                            </motion.div>
                            <motion.div className="item">
                            <img src={three}></img>
                            </motion.div>
                            <motion.div className="item">
                                <img src={five}></img>
                            </motion.div>
                            <motion.div className="item">
                            <img src={six}></img>
                            </motion.div>
                            <motion.div className="item">
                            <img src={seven}></img>
                            </motion.div>
                            <motion.div className="item">
                            <img src={ten}></img>
                            </motion.div>
                            <motion.div className="item">
                                <img src={nine}></img>
                            </motion.div>
                            <motion.div className="item">
                            <img src={eight}></img>
                            </motion.div>
                            
                        </motion.div>
                    </motion.div>
                </div> 
                <h1>check this out</h1>
            </div>
            {/* OUR STORY DIV =>DIV#03 */}
            <div className="container4">
                 <video muted autoPlay="autoplay" className="d-block w-100 h-100" loop="true">
                    <source src={story} type="video/mp4"></source>
                 </video>
            </div>
            {/* VIDEO DIV =>DIV#04 */}
            <section>
                <div className="container">
                    <div className='left'>
                        <video muted autoPlay="autoplay" className="d-block w-100 h-100" loop="true" onclick="this.pause()">
                            <source src={story} type="video/mp4"></source>
                        </video>
                    </div>
                    <div className='right' data-aos="slide-up" data-aos-duration='2000'>
                        <div class="content-landing">
                            <h1>A New Chapter of Innovation</h1>
                            <p>Mediascape focuses on delivering a consolidated solution for the ever-existing problem of creating a single platform, catering to the problems including communication, integration, publication, and innovation, when it comes to media deliverance and production, of Fast Photography Society.</p>
                            <a href="#" class="btn">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* CAROUSEL DIV =>DIV#05 */}
            <section>
                <div className="container">
                    <div className='left-opp'>
                    <Carousel fade className="d-block w-100 h-100">
                        <Carousel.Item className="d-block w-100 h-100" interval={2000}>
                            <img
                            className="d-block w-100 h-100"
                            src={icit}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                            className="d-block w-100 h-100"
                            src={cc}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                            className="d-block w-100 h-100"
                            src={ccc}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                            className="d-block w-100 h-100"
                            src={cccc}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                            className="d-block w-100 h-100"
                            src={c}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='right-opp' data-aos="slide-up" data-aos-duration='3000'>
                        <div class="content-landing">
                            <h5>INTRODUCING</h5>
                            <h1>HIGH QUALITY  </h1>
                            <p>Only the Highest quality images sorted and grouped for you,
                                so that all your favourite moments are just a click away!</p>
                            <a href="#" class="btn">View Collection</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* FAST DIV =>DIV#06 */}
            <section>
                <div className="container">
                    <div className='left2'>
                        <img className="d-block w-100 h-100"
                            src={fastold}>
                        </img>
                    </div>
                    <div className='right2' data-aos="slide-left" data-aos-duration='2000'>
                        <div class="content-landing">
                            <h3>A MARK OF</h3>
                            <h1>EXCELLENCE</h1>
                            <p> Mediascape is optimized to provide only the finest and brilliant 
                                performance. Our team believes in versatility and skillul 
                                execution. Results, only the best moments captured and delivered
                                on time.</p>
                            <a href="#" class="btn">Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* TEAM DIV =>DIV#07 */}
            <section>
                <div className="container">
                    <div className='left'>
                        <img className="d-block w-100 h-100" loop="true" onclick="this.pause()"
                            src={team}>
                        </img>
                    </div>
                    <div className='right' data-aos="slide-up" data-aos-duration='2000'>
                        <div class="content-landing">
                            
                            <h3>Meet the</h3>
                            <h1>FPS Family</h1>
                            <p>Fast Photography Society has been actively working as a photography 
                                & videography society for FAST-NU CFD Campus, since yeyar 2012.
                                FPS aims to provide coverage for university events, allowing
                                enthusiastic photographers to increase their skillset.</p>
                            <a href="#" class="btn">About Us</a>
                        </div>
                    </div>
                </div>
            </section>
            
                {/* <div className="container2"></div>
                <div className="container3"></div> */}
            
            
        </div>
        
        
    )
}

export default Try