import React, { useState, useRef, useEffect } from 'react';
import "./Generalhomepage.css"
import { useHistory } from "react-router-dom"
import Table from 'react-bootstrap/Table'
import { Container, Nav, Row} from "react-bootstrap"
import {  useNavigate } from 'react';
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
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import {
    FaUserAlt,
    FaWindowClose,
    FaImage,
    FaGripHorizontal,
    FaTimes,
    FaUserEdit,
    FaBookOpen
  
  } from "react-icons/fa";
  import {AiOutlineLogout, AiOutlineFundView, AiFillNotification} from "react-icons/ai";
  import
  {
    IoMdNotificationsOutline
  } from "react-icons/io";
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
   
var i = 0;

const GeneralHomepage = (user) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShowOverlay(!show);
        setTarget(event.target);
    };

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

    //closing stuff on mouse click
    useEffect(()=>
    {
        let handler=()=>
        {

            setShowOverlay(false);

        };
        document.addEventListener("mousedown", handler);
    })
    //navigation hook for sidebar
    
    
    const [Mondayvalue, setValueMonday] = useState();
    const [Tuesdayvalue, setValueTuesday] = useState();
    const [Wednesdayvalue, setValueWednesday] = useState();
    const [Thursdayvalue, setValueThursday] = useState();
    const [Fridayvalue, setValueFriday] = useState();

    var studentSlots = [];
    var as;
    //fetching slots from db
    const getallSlots = () =>
    {
        studentSlots = [];
        console.log(user.setLoginUser.email)
        axios.post("http://localhost:9002/GetFreeSlots",{zip:zip,Email: user.setLoginUser.email})
        .then((res) => {
            const data = res.data;
            as=data.generalBodies[0].slots;
        }).catch(() => {
            alert('errrdjd');
        })
        let row = document.createElement('div');
        row.className = 'row'

        let card = document.createElement('div');
        card.className = 'card shadow cursor-pointer';
        

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';


        let student = document.createElement('h5');
        student.innerText ="Student: " + Name;
        student.className = 'card-title';

        let email = document.createElement('div');
        email.innerText = "Free Slots"+as;
        email.className = 'card-text';

        cardBody.appendChild(student);
        cardBody.appendChild(email);
        card.appendChild(cardBody);
        i+=1;
        let container = document.querySelector("#card-container2");
        container.appendChild(card);
        studentSlots.push(as);

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


   
    function displaySlots()
    {


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

    const showDuty = () => {
        $(function () {
            $('#duty').show();
        });
    }
    const hideDuty = () => {
    $(function () {
        $('#duty').hide();
    });
    }

return (
        
    <>
    <div className="gbbg">
        <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="welcome">
           <Navbar.Brand href="#"><h2>Welcome back, {Name}</h2></Navbar.Brand>
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
            <button  onClick={myfub} className="btnuser">
                <FaUserAlt className="user" />
              </button>
            </li>
            <li>
                <button  ref={ref} className="btnnotif" variant="success btn" onClick={handleClick} data-toggle="tooltip" data-placement="bottom" title="Notifications">
                    <IoMdNotificationsOutline/> 
                </button>
            </li>
            
          </ul>
          <Overlay
            show={showOverlay}
            target={target}
            placement="bottom"
            container={ref}
            containerPadding={20}
            >
                <Popover id="popover-contained" className='gbpopover'>
                <Popover.Header as="h1" className='popheader'>Assigned Duty</Popover.Header>
                <Popover.Body>
                    <strong> 
                    Date: {Date} <br></br>
                    Time Slot: {Time} 
                    </strong>
                </Popover.Body>
                </Popover>
            </Overlay>

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
                    <FaTimes className="close"></FaTimes>
                    </button>
                </li>
            </div>
            <div className="sidebardiv">
                <li class="nav-item w-100">
                    <button  onClick="/" className="btn-bg-transparent">
                        <FaImage /> My Albums
                    </button>
                </li>
                
                <li class="nav-item w-100">
                <button  className="btn-bg-transparent" variant="success btn-block" onClick={showTable}>
                        <FaBookOpen/> Current Slots
                </button>
                </li>
                <li class="nav-item w-100">
                <button  className="btn-bg-transparent" variant="success btn-block" onClick={showTable}>
                        <FaGripHorizontal/> Update Slots
                </button>
                </li>
                <li class="nav-item w-100">
                <button  onClick={handleShow} className="btn-bg-transparent">
                    <FaUserEdit />       Edit Profile
                </button>
                </li>
                <li class="nav-item w-100">
                <button className="btn-bg-transparent" id ="sleek" onClick={() => history.push("/login")}><AiOutlineLogout/>   Logout</button>
                </li>
            </div>
        </ul>
        </nav>
   
        <Container>
                <div className="name">
                    <h3 className="zx">Your current selected Free Slots </h3>
                </div>
                
                
                
                    {/* <div id="duty">
                            <h3 className="freeslots">You are currently assigned coverage for: <br></br>
                                                
                            </h3>
                            <br/>
                            <button  className="notifclose" variant="success btn-block" onClick={hideDuty}>
                                  OK
                            </button>
                    </div> */}
                
                
                

               

            <div id="mydiv" class="hidden">
                <div className='xmark'>
                    {/* <button className="hide"  onClick={hideTable}>
                        <FaTimes className="userhide" />
                    </button> */}
                </div>
                    <Row className="sm-3 text-center">
                            <h2 className='slots-h2'>Available Slots of the Week</h2>
                            <Table className='duty-table'>
                        
                                <tbody>
                                    <div className="tab">
                                <tr>
                                
                                <td>Monday</td>

                                <ToggleButtonGroup className="togo-group" type="checkbox" value={Mondayvalue} onChange={MondayhandleChange}>
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
                    <button className="submit-form" variant="success btn-block" onClick={SubmitForm}>
                        Submit Form
                    </button>
                </centre>

            </div>

               
        </Container>
    </div></>
);
}
export default GeneralHomepage