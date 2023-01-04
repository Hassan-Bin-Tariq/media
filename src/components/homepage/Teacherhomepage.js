import React from "react"
import "./Teacherhomepage.css"
// import { useHistory } from "react-router-dom"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import logoNav from "../../assets/logo-copy.png";
//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navlogo from "../../assets/Picture1.png";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useHistory } from "react-router-dom"
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
    FaUserAlt,
    FaWindowClose,
    FaUserEdit,
    FaBookOpen
  
  } from "react-icons/fa";
  import {AiOutlineLogout} from "react-icons/ai";

const TeacherHomepage = (user) => {
    // const history = useHistory()
    var teachName = user.setLoginUser.name
    //var teachEmail = user.setLoginUser.email
    //var teachID = user.setLoginUser._id

    //console.log(teachName)
    //console.log(user.setLoginUser.email)

    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory();
    const [ event, setEvent] = useState({
        teacherName: teachName,
        teacherEmail: user.setLoginUser.email,
        teacherID: user.setLoginUser._id,
        title: "",
        description:"",
        date:"",
        StartTime: "",
        EndTime: "",
        venue: "",
        status: "Not Checked"
    })

    const myfub = () =>
    {
    var sidebar = document.querySelector("#sidebar");
    var container = document.querySelector(".my-container");
    sidebar.classList.toggle("active-nav")
    container.classList.toggle("active-cont")
    }
    const handleChange = e => {
        var { name, value } = e.target
        if(name === "StartTime" || name === "EndTime")
        {
            value = tConvert (value);
        }
        setEvent({
            ...event,
            [name]: value
        })
    }
    function tConvert (time) {
        // Check correct time format and split into components
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    
        if (time.length > 1) { // If time format correct
          time = time.slice (1);  // Remove full string match value
          time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
          time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join (''); // return adjusted time or original string
    }

    const SubmitEvent = () => {

        const { title,teacherName,teacherEmail,teacherID,description,date,StartTime,EndTime,venue,status } = event

        if(title && teacherName && teacherEmail && teacherID && description && date && StartTime && EndTime && venue && status){
            axios.post("http://localhost:9002/SendEventRequest", event)
            .then( 
                res => alert(res.data.message),
                //history.push("./login")
            )
        }else {
            alert("invalid input")
        }
        //alert("Submited")
    }

    return (

        <>
        <nav className="main-nav">
            {/* 1st logo part  */}
            <div className="welcome">
           <Navbar.Brand href="#"><h2>Welcome, {teachName}</h2></Navbar.Brand>
        </div>

            {/* 2nd menu part  */}
            <div
                className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                <ul>
                    <li>
                        <NavLink to="/try">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">about</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Get Started</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">contact</NavLink>
                    </li>
                </ul>
            </div>

            {/* 3rd social media links */}
            <div className="social-media">
                <ul className="social-media-desktop">
                    <li>

                    </li>
                    
                    <li>
                        <button onClick={myfub} className="btclose">
                            <FaUserAlt className="user" />
                        </button>
                    </li>

                </ul>

                {/* hamburget menu start  */}
                <div className="hamburger-menu">
                    <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu />
                    </a>
                </div>
            </div>
        </nav>
        <nav class="navbar navbar-expand d-flex flex-column align-item-start" id="sidebar">
        
        <ul class="navbar-nav d-flex flex-column mt-5 w-100">
        <div className="closebtn">
        <li class="nav-item w-100">
            
            <button  onClick={myfub} className="btclose">
            <FaWindowClose className="close"></FaWindowClose>
                </button>
                
            </li>
            </div>
            <div className="sidebardiv">
            <li class="nav-item w-100">
            <button  onClick={handleShow} className="btn-bg-transparent">
            <FaUserEdit />       Edit Profile
                </button>
            </li>
            <li class="nav-item w-100">
            </li>
            <li class="nav-item w-100">
                <button className="btn-bg-transparent" id ="sleek" onClick={() => history.push("/login")}><AiOutlineLogout/>   Logout</button>
                </li>
                    </div>
        </ul>
    </nav>
            {console.log("Event",event)}    
            <Container>
            <div className="name">

              

             </div>
                <Row className="mt-2 text-center">
                    <h2>Generate Event Request</h2>
                    <Col lg={5} md={6} sm={6} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicTitle">
                                <Form.Label>Event Title</Form.Label>
                                <Form.Control type="text" name="title" placeholder="Enter event title" onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicDescription">
                                <Form.Label>Event Description</Form.Label>
                                <Form.Control as="textarea" rows="3" name="description" placeholder="Event Description" onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicDate">
                                <Form.Label>Event Date</Form.Label>
                                <Form.Control type="date" name="date" placeholder="Event Date" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicTime">
                                <Form.Label>Event Start Time</Form.Label>
                                <Form.Control type="time" name="StartTime" placeholder="Event Start Time" onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicTime">
                                <Form.Label>Event End Time</Form.Label>
                                <Form.Control type="time" name="EndTime" placeholder="Event End Time" onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicVenue">
                                <Form.Label>Event Venue</Form.Label>
                                <Form.Control type="text" name="venue" placeholder="Event Venue" onChange={handleChange} />
                            </Form.Group>
                            <Row className="mt-2">
                            {/* Removed type="submit" from here */}
                                <button variant="success btn-block" className="sub" onClick={SubmitEvent}> 
                                    Submit Request
                                </button>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-2 p-2 text-center text-secondary ">Copyright © 2022 Team Welp FAST CFD. All Rights Reserved.</h6>
            </Container>
        </>
    );
}

export default TeacherHomepage
