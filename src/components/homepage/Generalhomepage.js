import React from "react"
import "./Generalhomepage.css"
import { useHistory } from "react-router-dom"
import Table from 'react-bootstrap/Table'
import {Button, Container, Nav, Row} from "react-bootstrap"
import { useState, useNavigate } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import axios from "axios"
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import logoNav from "../../assets/logo-copy.png";
//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navlogo from "../../assets/Picture1.png";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
    FaUserAlt,
    FaWindowClose,
    FaUserEdit,
    FaBookOpen
  
  } from "react-icons/fa";
  import {AiOutlineLogout, AiOutlineFundView} from "react-icons/ai";
//import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
//import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
//import PhotoCamera from '@material-ui/icons/PhotoCamera';
//import IconButton from '@material-ui/core/IconButton';
import $ from "jquery"



var Mondayslots = [];
var Tuesdayslots = [];
var Wednesdayslots = [];
var Thursdayslots = [];
var Fridayslots = [];
var sub = false;
    var emails = [];
    var dict = {};
    var requiredSlots = [];
    var assignSlots={};
    var names=[];
    var selectedDate;
    var studentSlots = [];
    var freestuEmails = [];
    var GeneralBodies;
    var timeslost = [];
    var showevents;

const GeneralHomepage = (user) => {

    const [zip, setZip] = useState();
    const history = useHistory()
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    var Name = user.setLoginUser.name
    var Date= user.setLoginUser.day
    var Time= user.setLoginUser.time
    console.log(Name)
    console.log(user.setLoginUser.day);
    console.log(user.setLoginUser.time);

    
    //usestate handler for offcanvas to show assigned duties
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //////

    //navigation hook for sidebar
    
    
    const [Mondayvalue, setValueMonday] = useState();
    const [Tuesdayvalue, setValueTuesday] = useState();
    const [Wednesdayvalue, setValueWednesday] = useState();
    const [Thursdayvalue, setValueThursday] = useState();
    const [Fridayvalue, setValueFriday] = useState();

    //fetching slots from db
    const getallSlots = () =>
    {
        console.log(user.setLoginUser.email)
        axios.post("http://localhost:9002/GetFreeSlots",{zip:zip,Email: user.setLoginUser.email})
        .then((res) => {
            const data = res.data;
            console.log(data.generalBodies[0].slots);
        }).catch(() => {
            alert('errrdjd');
        })
        
    }

    const MondayhandleChange = (val) => setValueMonday(
        val,
        Mondayslots.push(val)  //SETTING THE VALUE AND PUSHING IT IN LIST
    );
    const TuesdayhandleChange = (val) => setValueTuesday(
        val,
        Tuesdayslots.push(val)
    );
    const WednesdayhandleChange = (val) => setValueWednesday(
        val,
        Wednesdayslots.push(val)
    );
    const ThursdayhandleChange = (val) => setValueThursday(
        val,
        Thursdayslots.push(val)
    );
    const FridayhandleChange = (val) => setValueFriday(
        val,
        Fridayslots.push(val)
    );

    console.log(sub);
    if (sub === true)
    {
        
        axios.post("http://localhost:9002/addslots",{zip:zip,Email: user.setLoginUser.email}) //SENDING ALL SLOTS AND LOGGED IN USER EMAIL TO BACKEND TO UPDATE HIS SLOTS
        .then(res => {
            //alert(res.data.message)
            // eventts = res.data.event;
            // console.log(eventts)
        })
        sub = false;
    }

    //var menu_btn = document.querySelector("#menu-btn");
    //var sidebar = document.querySelector("#sidebar");
    //var container = document.querySelector(".my-container");

const myfub = () =>
{
    var sidebar = document.querySelector("#sidebar");
    var container = document.querySelector(".my-container");
    sidebar.classList.toggle("active-nav")
        container.classList.toggle("active-cont")
}


    const SubmitForm = () => {
        var Mondaysize = (Object.keys(Mondayslots).length) - 1; //SINCE IT IS APPENDING IN LIST SO THE FINAL LIST WOULD BE IN LAST INDEX
        //console.log(Mondayslots[Mondaysize]); // SIZE WILL BE POINTING AT LAST INDEX WHERE OUR FINAL SLOTS ARE
        
        var Tuesdaysize = (Object.keys(Tuesdayslots).length) - 1;
        //console.log(Tuesdayslots[Tuesdaysize]); 

        var Wednesdaysize = (Object.keys(Wednesdayslots).length) - 1;
        //console.log(Wednesdayslots[Wednesdaysize]); 

        var Thursdaysize = (Object.keys(Thursdayslots).length) - 1;
        //console.log(Thursdayslots[Thursdaysize]); 

        var Fridaysize = (Object.keys(Fridayslots).length) - 1;
        //console.log(Fridayslots[Fridaysize]); 

        var allSlots = [];
        allSlots.push( Mondayslots[Mondaysize]);
        allSlots.push( Tuesdayslots[Tuesdaysize]);
        allSlots.push( Wednesdayslots[Wednesdaysize]);
        allSlots.push( Thursdayslots[Thursdaysize]);
        allSlots.push( Fridayslots[Fridaysize]);

        //console.log(user.setLoginUser.email)
        //console.log(allSlots)

        //handleChange();
        sub = true;
    
        setZip(allSlots);
    }   
const showTable = () => {
    $(function () {
        $('#mydiv').show();
    });
}
const hideTable = () => {
    $(function () {
        $('#mydiv').hide();
    });
}

    return (
        
        <>
        <div className="bg">
        <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
           <Navbar.Brand href="/try"><img src={navlogo}></img></Navbar.Brand>
        </div>
        

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
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
            </li>
            <li>
            <button  onClick={myfub} className="btclose">
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
            <button  onClick={handleShow} className="btn-bg-transparent">
                    <AiOutlineFundView/>  View Assigned Duty
                </button>
            </li>
            
            <li class="nav-item w-100">
            <button  className="btn-bg-transparent" variant="success btn-block" onClick={showTable}>
                       <FaBookOpen/> Show Table
                    </button>
                    </li>
                    <li class="nav-item w-100">
            <button className="btn-bg-transparent" id ="sleek" onClick={() => history.push("/login")}><AiOutlineLogout/>   Logout</button>
            </li>
                    </div>
        </ul>
    </nav>
   
<Container>
                
                <Offcanvas className="slide" show={show} onHide={handleClose}>
                    <div className="canvas">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Assigned Duties</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>

                            <centre>
                                You are currently assigned coverage for: <br></br>
                                Date: {Date} <br></br>
                                Time Slot: {Time} <br></br>
                                <br></br>

                                <label className="data-upload" variant="primary">
                                    Upload Event Data
                                    <input type='file' accept='image/*'></input>
                                </label>
                            </centre>

                        </Offcanvas.Body>
                    </div>
                </Offcanvas>
                <h1 className="shadow-sm mt-3 p-3 text-center rounded">Welcome, {Name} !</h1>
                <button  onClick={getallSlots}>Show previous given slots</button>

<div id="mydiv" class="hidden">
    <div className='xmark'>
<button className="hide"  onClick={hideTable}>
<FaWindowClose className="userhide" />
                    </button>
                    </div>
                <Row className="sm-3 text-center">
    <h2>Available Slots of the Week</h2>
    <Table >
        
        <tbody>
        <div className="tab">
            <tr>
                
                <td>Monday</td>

                <ToggleButtonGroup type="checkbox" value={Mondayvalue} onChange={MondayhandleChange}>
                    <ToggleButton className="togo" id="tbg-btn-1" value={1} color="purple">
                        8:45 - 10:10
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-2" value={2}>
                        10:15 - 11:40
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-3" value={3}>
                        11:45 - 1:10
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-4" value={4}>
                        1:15 - 1:40
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-5" value={5}>
                        1:45 - 3:10
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-6" value={6}>
                        3:15 - 4:45
                    </ToggleButton>
                    <ToggleButton className="none" variant="danger" id="tbg-btn-7" value={7}>
                        None
                    </ToggleButton>
                </ToggleButtonGroup>
            </tr>
            <tr>
                <td>Tuesday</td>
                <ToggleButtonGroup type="checkbox" value={Tuesdayvalue} onChange={TuesdayhandleChange}>
                    <ToggleButton className="togo" id="tbg-btn-8" value={1}>
                        8:45 - 10:10
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-9" value={2}>
                        10:15 - 11:40
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-10" value={3}>
                        11:45 - 1:10
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-11" value={4}>
                        1:15 - 1:40
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-12" value={5}>
                        1:45 - 3:10
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-13" value={6}>
                        3:15 - 4:45
                    </ToggleButton>
                    <ToggleButton className="none" variant="danger" id="tbg-btn-14" value={7}>
                        None
                    </ToggleButton>
                </ToggleButtonGroup>
            </tr>
            <tr>
                <td>Wednesday</td>
                <ToggleButtonGroup type="checkbox" value={Wednesdayvalue} onChange={WednesdayhandleChange}>
                    <ToggleButton className="togo" id="tbg-btn-15" value={1}>
                        8:45 - 10:10
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-16" value={2}>
                        10:15 - 11:40
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-17" value={3}>
                        11:45 - 1:10
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-18" value={4}>
                        1:15 - 1:40
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-19" value={5}>
                        1:45 - 3:10
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-20" value={6}>
                        3:15 - 4:45
                    </ToggleButton>
                    <ToggleButton className="none" variant="danger" id="tbg-btn-21" value={7}>
                        None
                    </ToggleButton>
                </ToggleButtonGroup>
            </tr>
            <tr>
                <td>Thursday</td>
                <ToggleButtonGroup type="checkbox" value={Thursdayvalue} onChange={ThursdayhandleChange}>
                    <ToggleButton className="togo" id="tbg-btn-22" value={1}>
                        8:45 - 10:10
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-23" value={2}>
                        10:15 - 11:40
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-24" value={3}>
                        11:45 - 1:10
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-25" value={4}>
                        1:15 - 1:40
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-26" value={5}>
                        1:45 - 3:10
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-27" value={6}>
                        3:15 - 4:45
                    </ToggleButton>
                    <ToggleButton className="none" variant="danger" id="tbg-btn-28" value={7}>
                        None
                    </ToggleButton>
                </ToggleButtonGroup>
            </tr>
            <tr>
                <td>Friday</td>
                <ToggleButtonGroup type="checkbox" value={Fridayvalue} onChange={FridayhandleChange}>
                    <ToggleButton variant="outline-info light"className="togo" id="tbg-btn-29" value={1}>
                        8:45 - 10:10
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-30" value={2}>
                        10:15 - 11:40
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-31" value={3}>
                        11:45 - 1:10
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-32" value={4}>
                        1:15 - 1:40
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-33" value={5}>
                        1:45 - 3:10
                    </ToggleButton>
                    <ToggleButton className="togo" id="tbg-btn-34" value={6}>
                        3:15 - 4:45
                    </ToggleButton>
                    <ToggleButton className="none" variant="danger" id="tbg-btn-35" value={7}>
                        None
                    </ToggleButton>
                </ToggleButtonGroup>
                
            </tr>
            </div>
        </tbody>
    </Table>
</Row>
<centre>
    <button className="submit" variant="success btn-block" onClick={SubmitForm}>
        Submit Form
    </button>
</centre>

</div>

                <h6 >Copyright © 2022 Team Welp FAST CFD. All Rights Reserved.</h6>
            </Container>
            </div></>
    );
}
export default GeneralHomepage