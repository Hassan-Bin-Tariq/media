import React from "react"
import "./GShomepage.css"
import { useHistory } from "react-router-dom"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
//import Container from 'react-bootstrap/Container';
import icit from '../../assets/icit.jpg'
import c from '../../assets/c.png'
import cc from '../../assets/cc.png'
import ccc from '../../assets/ccc.png'
import cccc from '../../assets/cccc.png'
import ghous from "../../assets/ghous.jpg";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import {
    FaUserAlt,
    FaWindowClose,
    FaGripHorizontal,
    FaTimes,
    FaUserEdit,
    FaBookOpen,
    FaImage,
    FaMeetup
} from "react-icons/fa";
import {AiOutlineLogout} from "react-icons/ai";
import $ from "jquery"

const  GSHomepage = (user) => {
    const history = useHistory()
    var Name = user.setLoginUser.name
    console.log(Name)

    const CustomScrollbar = () => {
        useEffect(() => {
          document.body.classList.add('custom-scrollbar');
          return () => {
            document.body.classList.remove('custom-scrollbar');
          };
        }, []);}

    //meeting
    const [meeting, setMeeting] = useState({
        callerName:  user.setLoginUser.name,
        callerEmail: user.setLoginUser.email,
        callerID: user.setLoginUser._id,
        purpose: "",
        agenda:"",
        date:"",
        MeetingTime: "",
        venue: "",
        
    })

    const handleChangeMeeting = e => {
        var { name, value } = e.target
        if(name === "MeetingTime")
        {
            value = tConvert (value);
        }
        setMeeting({
            ...meeting,
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

    const ScheduleMeeting = () => {

        const { purpose,callerName,callerEmail,callerID,agenda,date,MeetingTime,venue } = meeting

        console.log(meeting)
        if(purpose && callerName && callerEmail && callerID && agenda && date && MeetingTime &&venue){
            axios.post("http://localhost:9002/scheduleMeeting", meeting)
            .then( 
                res => alert(res.data.message),
                alert("Meeting scheduled.")
            )
        }else 
        {
            alert("invalid input")
        }
        
    }
    const showAlbum = () => {
        $(function () {
            $('#myGallery').show();
        });
        hidePass();
        hidemeeting();
    }
    const hideAlbum = () => {
        $(function () {
            $('#myGallery').hide();
        });
    }
    const showPass = () => {
        $(function () {
            $('#editProfile').show();
        });
        hideAlbum();
        hidemeeting();
    }
    const hidePass = () => {
        $(function () {
            $('#editProfile').hide();
        });
    }
    const Passeditor = () =>
    {
        let OldPass = document.getElementById("oldpass").value;
        let newPass = document.getElementById("newpass").value;
        let rePass = document.getElementById("reNewPass").value;
        let useremail = user.setLoginUser.email;

        if(newPass === rePass)
        {
            console.log(OldPass,newPass,rePass,useremail)

            axios.post("http://localhost:9002/ChangePass",{Email: useremail,OldPassword: OldPass,newPassword: newPass}) 
            .then(res => {
                // alert(res.data.message)
                // eventts = res.data.event;
                // console.log(eventts)
            })
        }
        else{
            alert("Password not matched")
        }
    }
    
    const showmeeting = () => {
        $(function () {
            $('#meetingForm').show();
        });
        hideAlbum();
        hidePass();
    }
    const hidemeeting = () => {
        $(function () {
            $('#meetingForm').hide();
        });
    }

    return (
        <div className="studentmain"> 
            {/* SIDE BAR  */}  
            <nav class="nav__cont">
                    
                    <ul class="nav__one">
                    <button href="/" class="nav_welcome" >
                    Welcome, {Name}
                    </button>
                    <button  onClick={showAlbum} class="nav__items" >
                                <FaGripHorizontal className="sidebaricon"/> My Albums
                    </button>
                    <button  onClick={showPass} class="nav__items">
                                <FaUserEdit className="sidebaricon" /> Edit Profile
                    </button>
                    <button  onClick={showmeeting} class="nav__items">
                                < FaMeetup className="sidebaricon" /> Schedule Meeeting
                    </button>
                    <button class="nav__items" id ="sleek" onClick={() => history.push("/login")}>
                        <AiOutlineLogout className="sidebaricon"/> Logout
                    </button>
                
                    </ul>
        </nav>
       
            {/* <div style={{ display: 'flex', height: '100%', overflow: 'scroll initial',position:"-webkit-sticky",position:"sticky" }}>
                <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit', fontFamily:"Montserrat",fontSize: "18px" }}>
                    Welcome! {Name}
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                    <button  onClick={showAlbum} className="sidebarbtn" >
                                <FaGripHorizontal className="sidebaricon"/> My Albums
                    </button>
                    <button  onClick={showPass} className="sidebarbtn">
                                <FaUserEdit className="sidebaricon" /> Edit Profile
                    </button>
                    <button  onClick={showmeeting} className="sidebarbtn">
                                <FaUserEdit className="sidebaricon" /> Schedule Meeeting
                    </button>
                    <button className="sidebarbtn" id ="sleek" onClick={() => history.push("/login")}>
                        <AiOutlineLogout className="sidebaricon"/> Logout
                    </button>
                
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                    style={{
                        padding: '20px 5px',
                    }}
                    >
                    Mediascape
                    </div>
                </CDBSidebarFooter>
                </CDBSidebar>
            </div> */}
            {/*////////////// */} 
                    <div className="student-flex2">
                    {/* <button  className="flex2user">
                                <FaUserAlt />
                    </button> */}
                    <Container className="cardBody">
                    <div className="student-container" id="myGallery">
                        <h2>Take a look at some of our picks for you</h2>
                        <div className='student-slider'>
                            <Carousel fade className="d-block w-100 h-100">
                                <Carousel.Item className="d-block w-100 h-100" interval={5000}>
                                    <img
                                    className="d-block w-100 h-100"
                                    src={icit}
                                    alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <img
                                    className="d-block w-100 h-100"
                                    src={cc}
                                    alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <img
                                    className="d-block w-100 h-100"
                                    src={ccc}
                                    alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <img
                                    className="d-block w-100 h-100"
                                    src={cccc}
                                    alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <img
                                    className="d-block w-100 h-100"
                                    src={c}
                                    alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <p>Stay tuned for more personalized content!</p>
                    </div>

                    {/* Div with card */}  
                    <div  id="editProfile">
                        <div id="editPass" class="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
                        <div class="card p-4"> 
                        <div class=" image d-flex flex-column justify-content-center align-items-center"> 
                        <button id="editImageimg"> <img src={ghous} height="100" width="100" /></button> 
                        <br></br>
                        {/* <div><h2 class="edtpasheading">Edit Password</h2></div> */}
                        <div >
                            <br></br>
                            <h1 className="editpassheading">Edit Password</h1>
                        </div>
                        <br></br>
                        <div className="oldpass">
                        
                                <label >Current Password</label>
                                <br></br>
                                <input id = "oldpass" type="password" name="oldpassword" placeholder="Enter Current Password"></input>
                            </div>

                            <div className="pass">
                                <label >New Password</label>
                                <br></br>
                                <input id = "newpass" type="password" name="newpassword" placeholder="Enter New Password"></input>
                            </div>

                            <div className="repass">
                                <label >Re-enter Password</label>
                                <br></br>
                                <input id = "reNewPass" type="password" name="reEnterPassword" placeholder="Re-enter Your Password"></input>
                                
                        </div>
                        <button class="button-56" onClick={Passeditor}>Save Changes</button>
                        

                        </div>  
                        </div> 
                        </div> 
                        
                        </div>
                           
                    {/* Div with card end */}
                    <div id="meetingForm">
                        <Row className="mt-2 text-center">
                            <h2 id="meetingheading">Schedule Meeting</h2>
                            <Col lg={5} md={6} sm={6} className="p-5 m-auto shadow-sm rounded-lg">
                                <div>
                                    <Form.Group controlId="formBasicTitle">
                                        <Form.Label id="labelColor">Meeting purpose</Form.Label>
                                        <Form.Control type="text" name="purpose" placeholder="Enter meeting purpose" onChange={handleChangeMeeting}/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicDescription">
                                        <Form.Label id="labelColor">Meeting Agenda</Form.Label>
                                        <Form.Control as="textarea" rows="3" name="agenda" placeholder=" Enter meeting Agenda" onChange={handleChangeMeeting}/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicDate">
                                        <Form.Label id="labelColor">Meeting Date</Form.Label>
                                        <Form.Control type="date" name="date" placeholder="Enter meeting date" onChange={handleChangeMeeting} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicTime">
                                        <Form.Label id="labelColor">Meeting Time</Form.Label>
                                        <Form.Control type="time" name="MeetingTime" placeholder="Enter meeting time" onChange={handleChangeMeeting}/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicVenue">
                                        <Form.Label id="labelColor">Expected Venue</Form.Label>
                                        <Form.Control type="text" name="venue" placeholder="Enter expected venue" onChange={handleChangeMeeting} />
                                    </Form.Group>
                                    <Row className="mt-2">
                                    {/* Removed type="submit" from here */}
                                        <button variant="success btn-block" className="button6" onClick={ScheduleMeeting}> 
                                            Schedule Meeeting
                                        </button>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        </div>
                        </Container>
                        <div className="custom-scrollbar">
                        {/* Content */}
                        </div>
                        <h6 id="copyrights" className="mt-2 p-2 text-center text-secondary ">Copyright © 2022 Team Welp FAST CFD. All Rights Reserved.</h6>
            </div>
            
            
          
                
        </div>
        
        
    )
}

export default GSHomepage