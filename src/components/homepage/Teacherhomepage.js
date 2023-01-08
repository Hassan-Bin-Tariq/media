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
  } from "react-icons/fa";
  import {AiOutlineLogout} from "react-icons/ai";
  import $ from "jquery"
const TeacherHomepage = (user) => {
    // const history = useHistory()
    var teachName = user.setLoginUser.name
    var teachEmail = user.setLoginUser.email
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

    const showPass = () => {
        $(function () {
            $('#editProfile').show();
        });
       
         hideForm();
    }

    const hidePass = () => {
        $(function () {
            $('#editProfile').hide();
        });
       
    }

    const showForm = () => {
        $(function () {
            $('#form').show();
        });
    }
    const hideForm= () => {
    $(function () {
        $('#form').hide();
    });
    
    }

    function checkAssigned(){
        axios.post("http://localhost:9002/GetGBmembers", ) //FETCH ALL GB MEMBERS TO CHECK ASSIGNED DUTIES
        .then(res => {
        
            var GeneralBodies = res.data.generalBodies;
            for(var g = 0; g<GeneralBodies.length; g++)
            {//GET YOUR DATA FROM HERE
                if(GeneralBodies[g].Duty.teacherEmail != undefined && GeneralBodies[g].Duty.teacherEmail === teachEmail)
                {
                    console.log(GeneralBodies[g].Duty.teacherEmail)
                }
            }
        })

    }

    return (

        <>
        <div className="Mentorhomepage" >
            {/* SIDE BAR  */}         
            <div style={{ display: 'flex', height: '100%', overflow: 'scroll initial',position:"-webkit-sticky",position:"sticky" }}>
                <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit', fontFamily:"Montserrat",fontSize: "18px" }}>
                    Welcome!
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                    <button  onClick="/" className="sidebarbtn" >
                                <FaGripHorizontal className="sidebaricon"/> My Albums
                    </button>
                    <button  onClick={showForm} className="sidebarbtn">
                                <FaUserEdit className="sidebaricon" /> Request for Event
                    </button>
                    <button  onClick={showPass} className="sidebarbtn">
                                <FaUserEdit className="sidebaricon" /> Edit Profile
                    </button>
                    <button  onClick={checkAssigned} className="sidebarbtn">
                                <FaUserEdit className="sidebaricon" /> Check Assigned Students
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
            </div>
            {/*////////////// */} 
            <div className="mentor-flex2">
                
                    
                    <button  className="flex2user">
                                <FaUserAlt />
                    </button>
                    {/* Div with card */}
                    {console.log("Event",event)}    
                    <Container className="cardBody">
                        <div id="form">
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
                        </div>
                        <div id="editProfile">
                            <div>
                                <h2>Edit Profile Settings</h2>
                            </div>
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
                        <button className="editpass" onClick={Passeditor}>Edit Password</button>
                        

                        </div>
                        <h6 className="mt-2 p-2 text-center text-secondary ">Copyright © 2022 Team Welp FAST CFD. All Rights Reserved.</h6>
                    </Container>
                    {/* Div with card end */}
            </div>
        </div>
        </>
    );
}

export default TeacherHomepage
