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
import ghous from "../../assets/ghous.jpg";
//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navlogo from "../../assets/Picture1.png";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useHistory } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
import icit from '../../assets/icit.jpg'
import c from '../../assets/c.png'
import cc from '../../assets/cc.png'
import ccc from '../../assets/ccc.png'
import cccc from '../../assets/cccc.png'
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
    FaCalendarPlus,
    FaUserFriends,
    FaUserCheck
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

   

    function checkAssigned(){
        axios.post("http://localhost:9002/GetGBmembers", ) //FETCH ALL GB MEMBERS TO CHECK ASSIGNED DUTIES
        .then(res => {
        
            var GeneralBodies = res.data.generalBodies;
            for(var g = 0; g<GeneralBodies.length; g++)
            {//GET YOUR DATA FROM HERE
                if(GeneralBodies[g].Duty.teacherEmail != undefined && GeneralBodies[g].Duty.teacherEmail === teachEmail)
                {
                    console.log(GeneralBodies[g].Duty.teacherEmail)
                    console.log(GeneralBodies[g].name)
                    console.log(GeneralBodies[g].email)
                    console.log(GeneralBodies[g].Duty.venue)
                    console.log(GeneralBodies[g].Duty.Date)
                    console.log(GeneralBodies[g].Duty.Slot)
                    ///////////////////////DYNAMIC CARDS////////////////////////////////
                            // let row = document.createElement('div');
                            // row.className = 'row'

                            let card = document.createElement('div');
                            card.className = 'cardDutyStudent';
                            

                            let cardBody = document.createElement('div');
                            cardBody.className = 'card-body-duty-student';

                            let underline = document.createElement('div');
                            underline.className = 'underline-duty-student';

                            let student = document.createElement('h3');
                            student.innerText ="Student: "+ GeneralBodies[g].name;
                            student.className = 'assign-student-card-title';

                            let email = document.createElement('h5');
                            email.innerText = "Email: "+ GeneralBodies[g].email;
                            email.className = 'assign-student-card-text';

                            let date = document.createElement('div');
                            date.innerText = "Free Slot: "+ GeneralBodies[g].Duty.Slot;
                            date.className = 'assign-student-card-text';

                            let venue = document.createElement('h5');
                            venue.innerText = "Venue: "+ GeneralBodies[g].Duty.venue;
                            venue.className = 'assign-student-card-text';

                            cardBody.appendChild(student);
                            cardBody.appendChild(underline);
                            cardBody.appendChild(email);
                            cardBody.appendChild(date);
                            cardBody.appendChild(venue);
                            card.appendChild(cardBody);
                            // i+=1;
                            $('#teacher-card-container').empty();
                            let container = document.querySelector("#teacher-card-container");
                            container.appendChild(card);

                            // let modelerr = document.getElementById("Name");
                            // modelerr.appendChild(card);
                }
            }
        })

    }
    const GetEvents = () => {
        // hidePass();
        showEvent();
        const xhr = new XMLHttpRequest();
        // eventts.forEach(checkAssigned);
        checkAssigned();
        let container = document.querySelector("#teacher-card-container");
        console.log(container.childNodes);
       
    }
    const showPass = () => {
        $(function () {
            $('#editProfile').show();
        });
       
         hideForm();
         hideEvent();
         hideAlbum();
    }

    const hidePass = () => {
        $(function () {
            $('#editProfile').hide();
        });
       
    }

    const showForm = () => {
        $(function () {
            $('#eventForm').show();
        });
        hideEvent();
        hidePass();
        hideAlbum();
    }
    const hideForm= () => {
    $(function () {
        $('#eventForm').hide();
    });
    
    }
    const showEvent = () => {
        
        $(function () {
            $('#teacher-card-container').show();
            
        });
        $(function () {
            $('#headingduty').show();
        });
       hidePass();
       hideForm();
       hideAlbum();
    }
    const hideEvent = () => {
        
        $(function () {
            $('#teacher-card-container').hide();
        });
        $(function () {
            $('#headingduty').hide();
        });
        
    //    hideeventdeets();
    }
    const showAlbum = () => {
        $(function () {
            $('#myGallery').show();
        });
        hideEvent();
        hidePass();
       hideForm();
    }
    const hideAlbum = () => {
        $(function () {
            $('#myGallery').hide();
        });
    }
   

    return (

        <>
        <div className="Mentorhomepage" >
            {/* SIDE BAR  */}   
            <nav class="nav__cont">
                    
                    <ul class="nav__one">
                    <button href="/" class="nav_welcome" >
                        Welcome, {teachName}
                    </button>
                    <button  onClick={showAlbum} class="nav__items" >
                                <FaImage className="sidebaricon"/> My Albums
                    </button>
                    <button  onClick={showForm} class="nav__items">
                                < FaCalendarPlus className="sidebaricon" /> Request for Event
                    </button>
                    <button  onClick={showPass} class="nav__items">
                                <FaUserEdit className="sidebaricon" /> Edit Profile
                    </button>
                    <button onClick={GetEvents} class="nav__items">
                                <FaUserCheck className="sidebaricon" /> Assigned Students
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
                    Welcome!
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                    <button  onClick={showAlbum} className="sidebarbtn" >
                                <FaGripHorizontal className="sidebaricon"/> My Albums
                    </button>
                    <button  onClick={showForm} className="sidebarbtn">
                                <FaUserEdit className="sidebaricon" /> Request for Event
                    </button>
                    <button  onClick={showPass} className="sidebarbtn">
                                <FaUserEdit className="sidebaricon" /> Edit Profile
                    </button>
                    <button  onClick={GetEvents} className="sidebarbtn">
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
            </div> */}
            {/*////////////// */} 
            <div className="mentor-flex2">
                
                    
                    {/* <button  className="flex2user">
                                <FaUserAlt />
                    </button> */}
                    {/* Div with card */}   
                    <Container className="cardBody">
                    <div className="student-container" id="myGallery">
                        <h2>Take a look at some of our picks for you</h2>
                        <div className='student-slider'>
                            <Carousel fade className="d-block w-100 h-100">
                                <Carousel.Item className="d-block w-100 h-100" interval={5000} backgroundColor="#f8f7f2">
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
                        <div id="eventForm">
                        <Row className="mt-2 text-center">
                            <h2 id="meetingheading">Generate Event Request</h2>
                            <Col lg={5} md={6} sm={6} className="p-5 m-auto shadow-sm rounded-lg">
                                <div>
                                    <Form.Group controlId="formBasicTitle">
                                        <Form.Label id="labelColor">Event Title</Form.Label>
                                        <Form.Control type="text" name="title" placeholder="Enter event title" onChange={handleChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicDescription">
                                        <Form.Label id="labelColor">Event Description</Form.Label>
                                        <Form.Control as="textarea" rows="3" name="description" placeholder="Event Description" onChange={handleChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicDate">
                                        <Form.Label id="labelColor">Event Date</Form.Label>
                                        <Form.Control type="date" name="date" placeholder="Event Date" onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicTime">
                                        <Form.Label id="labelColor">Event Start Time</Form.Label>
                                        <Form.Control type="time" name="StartTime" placeholder="Event Start Time" onChange={handleChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicTime">
                                        <Form.Label id="labelColor">Event End Time</Form.Label>
                                        <Form.Control type="time" name="EndTime" placeholder="Event End Time" onChange={handleChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicVenue">
                                        <Form.Label id="labelColor">Event Venue</Form.Label>
                                        <Form.Control type="text" name="venue" placeholder="Event Venue" onChange={handleChange} />
                                    </Form.Group>
                                    <Row className="mt-2">
                                    {/* Removed type="submit" from here */}
                                        <button variant="success btn-block" className="button6" onClick={SubmitEvent}> 
                                            Submit Request
                                        </button>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        </div>
                            
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
                        <h2 style={{paddingTop: "25px"}} id="headingduty">Assigned Student for Event</h2>
                        <div className= "mycards" id="teacher-card-container">
                            
                            {/* <div className="card-flex"></div> */}
                        </div>
                    
                    </Container>
                    <h6 className="mt-2 p-2 text-center text-secondary ">Copyright © 2022 Team Welp FAST CFD. All Rights Reserved.</h6>
                    {/* Div with card end */}
            </div>
        </div>
        </>
    );
}

export default TeacherHomepage
