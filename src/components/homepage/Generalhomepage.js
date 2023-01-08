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
    // console.log(Name)
    // console.log(user.setLoginUser.day);
    // console.log(user.setLoginUser.time);

    
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

    let i = 0;
    function slotsPrinter(slot) {

        if(i === 0)
        {
            let MondayWritten = document.createElement('h4')
            MondayWritten.innerText = "Monday";
            MondayWritten.className="slotname"
            let firstSlot = document.createElement('h5');
            firstSlot.className="myslotsclass";
            let secondslot = document.createElement('h5');
            secondslot.className="myslotsclass";
            let thirdlot = document.createElement('h5');
            let forthslot = document.createElement('h5');
            let fifthslot = document.createElement('h5');
            let sixslot = document.createElement('h5');
            let nonslot = document.createElement('h5');

            for (let j = 0; j < slot.length; j++) {
                if(slot[j] === 1)
                {
                    firstSlot.innerText = " 1st Slot: 8:45 - 10:10";
                }
                if(slot[j] === 2)
                {
                    secondslot.innerText = "2nd Slot: 10:15 - 11:40";
                }
                if(slot[j] === 3)
                {
                    thirdlot.innerText = "11:45 - 1:10";
                }
                if(slot[j] === 4)
                {
                    forthslot.innerText = "1:15 - 1:40";
                }
                if(slot[j] === 5)
                {
                    fifthslot.innerText = "1:45 - 3:10";
                }
                if(slot[j] === 6)
                {
                    sixslot.innerText = "3:15 - 4:45";
                }
                if(slot[j] === 7)
                {
                    nonslot.innerText = "None";
                }
            }

            let monday= document.querySelector("#mondayHolder");
            monday.appendChild(MondayWritten);

            monday.appendChild(firstSlot);
            monday.appendChild(secondslot);
            monday.appendChild(thirdlot);
            monday.appendChild(forthslot);
            monday.appendChild(fifthslot);
            monday.appendChild(sixslot);
            monday.appendChild(nonslot);

        }

        else if(i === 1)
        {
            let TuesdayWritten = document.createElement('h4')
            TuesdayWritten.innerText = "Tuesday";

            let firstSlot = document.createElement('h5');
            let secondslot = document.createElement('h5');
            let thirdlot = document.createElement('h5');
            let forthslot = document.createElement('h5');
            let fifthslot = document.createElement('h5');
            let sixslot = document.createElement('h5');
            let nonslot = document.createElement('h5');

            for (let j = 0; j < slot.length; j++) {
                if(slot[j] === 1)
                {
                    firstSlot.innerText = "8:45 - 10:10";
                }
                if(slot[j] === 2)
                {
                    secondslot.innerText = "10:15 - 11:40";
                }
                if(slot[j] === 3)
                {
                    thirdlot.innerText = "11:45 - 1:10";
                }
                if(slot[j] === 4)
                {
                    forthslot.innerText = "1:15 - 1:40";
                }
                if(slot[j] === 5)
                {
                    fifthslot.innerText = "1:45 - 3:10";
                }
                if(slot[j] === 6)
                {
                    sixslot.innerText = "3:15 - 4:45";
                }
                if(slot[j] === 7)
                {
                    nonslot.innerText = "None";
                }
            }

            let tuesday = document.querySelector("#tuesdayHolder");
            tuesday.appendChild(TuesdayWritten);
            
            tuesday.appendChild(firstSlot);
            tuesday.appendChild(secondslot);
            tuesday.appendChild(thirdlot);
            tuesday.appendChild(forthslot);
            tuesday.appendChild(fifthslot);
            tuesday.appendChild(sixslot);
            tuesday.appendChild(nonslot);
        }

        else if(i === 2)
        {
            let WednesdayWritten = document.createElement('h4')
            WednesdayWritten.innerText = "Wednesday";

             let firstSlot = document.createElement('h5');
            let secondslot = document.createElement('h5');
            let thirdlot = document.createElement('h5');
            let forthslot = document.createElement('h5');
            let fifthslot = document.createElement('h5');
            let sixslot = document.createElement('h5');
            let nonslot = document.createElement('h5');

            for (let j = 0; j < slot.length; j++) {
                if(slot[j] === 1)
                {
                    firstSlot.innerText = "8:45 - 10:10";
                }
                if(slot[j] === 2)
                {
                    secondslot.innerText = "10:15 - 11:40";
                }
                if(slot[j] === 3)
                {
                    thirdlot.innerText = "11:45 - 1:10";
                }
                if(slot[j] === 4)
                {
                    forthslot.innerText = "1:15 - 1:40";
                }
                if(slot[j] === 5)
                {
                    fifthslot.innerText = "1:45 - 3:10";
                }
                if(slot[j] === 6)
                {
                    sixslot.innerText = "3:15 - 4:45";
                }
                if(slot[j] === 7)
                {
                    nonslot.innerText = "None";
                }
            }

            let wednesday = document.querySelector("#wednesdayHolder");
            wednesday.appendChild(WednesdayWritten);
            wednesday.appendChild(firstSlot);
            wednesday.appendChild(secondslot);
            wednesday.appendChild(thirdlot);
            wednesday.appendChild(forthslot);
            wednesday.appendChild(fifthslot);
            wednesday.appendChild(sixslot);
            wednesday.appendChild(nonslot);
        }

        else if(i === 3)
        {
            let ThursdayWritten = document.createElement('h4')
            ThursdayWritten.innerText = "Thursday";

            let firstSlot = document.createElement('h5');
            let secondslot = document.createElement('h5');
            let thirdlot = document.createElement('h5');
            let forthslot = document.createElement('h5');
            let fifthslot = document.createElement('h5');
            let sixslot = document.createElement('h5');
            let nonslot = document.createElement('h5');

            for (let j = 0; j < slot.length; j++) {
                if(slot[j] === 1)
                {
                    firstSlot.innerText = "8:45 - 10:10";
                }
                if(slot[j] === 2)
                {
                    secondslot.innerText = "10:15 - 11:40";
                }
                if(slot[j] === 3)
                {
                    thirdlot.innerText = "11:45 - 1:10";
                }
                if(slot[j] === 4)
                {
                    forthslot.innerText = "1:15 - 1:40";
                }
                if(slot[j] === 5)
                {
                    fifthslot.innerText = "1:45 - 3:10";
                }
                if(slot[j] === 6)
                {
                    sixslot.innerText = "3:15 - 4:45";
                }
                if(slot[j] === 7)
                {
                    nonslot.innerText = "None";
                }
            }

            let thursday = document.querySelector("#thursdayHolder");
            thursday.appendChild(ThursdayWritten);
            thursday.appendChild(firstSlot);
            thursday.appendChild(secondslot);
            thursday.appendChild(thirdlot);
            thursday.appendChild(forthslot);
            thursday.appendChild(fifthslot);
            thursday.appendChild(sixslot);
            thursday.appendChild(nonslot);
        }

        else if(i === 4)
        {
            let FridayWritten = document.createElement('h4')
            FridayWritten.innerText = "Friday";

            let firstSlot = document.createElement('h5');
            let secondslot = document.createElement('h5');
            let thirdlot = document.createElement('h5');
            let forthslot = document.createElement('h5');
            let fifthslot = document.createElement('h5');
            let sixslot = document.createElement('h5');
            let nonslot = document.createElement('h5');

            for (let j = 0; j < slot.length; j++) {
                if(slot[j] === 1)
                {
                    firstSlot.innerText = "8:45 - 10:10";
                }
                if(slot[j] === 2)
                {
                    secondslot.innerText = "10:15 - 11:40";
                }
                if(slot[j] === 3)
                {
                    thirdlot.innerText = "11:45 - 1:10";
                }
                if(slot[j] === 4)
                {
                    forthslot.innerText = "1:15 - 1:40";
                }
                if(slot[j] === 5)
                {
                    fifthslot.innerText = "1:45 - 3:10";
                }
                if(slot[j] === 6)
                {
                    sixslot.innerText = "3:15 - 4:45";
                }
                if(slot[j] === 7)
                {
                    nonslot.innerText = "None";
                }
            }

            let friday = document.querySelector("#fridayHolder");
            friday.appendChild(FridayWritten);
            
            friday.appendChild(firstSlot);
            friday.appendChild(secondslot);
            friday.appendChild(thirdlot);
            friday.appendChild(forthslot);
            friday.appendChild(fifthslot);
            friday.appendChild(sixslot);
            friday.appendChild(nonslot);
        }

        i+=1;
    }

    var studentSlots = [];
    var givenslots;
    //fetching slots from db
    const getallSlots = () =>
    {
        studentSlots = [];
        axios.post("http://localhost:9002/GetFreeSlots",{zip:zip,Email: user.setLoginUser.email})
        .then((res) => {
            const data = res.data;
            givenslots=data.generalBodies[0].slots;
            givenslots.forEach(slotsPrinter);
        }).catch(() => {
            alert('errrdjd');
        })

        // let row = document.createElement('div');
        // row.className = 'row'

        // let card = document.createElement('div');
        // card.className = 'card shadow cursor-pointer';
        

        // let cardBody = document.createElement('div');
        // cardBody.className = 'card-body';


        // let student = document.createElement('h5');
        // student.innerText ="Student: " + Name;
        // student.className = 'card-title';

        // let email = document.createElement('div');
        // email.innerText = "Free Slots"+as;
        // email.className = 'card-text';

        // cardBody.appendChild(student);
        // cardBody.appendChild(email);
        // card.appendChild(cardBody);
        // i+=1;
        // let container = document.querySelector("#card-container2");
        // container.appendChild(card);
        // studentSlots.push(as);

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

    // console.log(sub);
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
        hideSlots();
        hidePass();
        hideCurrent();
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
        const targetDiv = document.getElementById("editProfile");
        // if (targetDiv.style.display !== "none") {
        //     targetDiv.style.display = "none";
        //   } else {
            targetDiv.style.display = "block";
          //}
          //hideDuty();
          hideSlots();
          hideTable();
          hideCurrent();
    }
    const hidePass = () => {
        $(function () {
            $('#editProfile').hide();
        });
        showSlots();
    }
    const showSlots = () => {
        $(function () {
            $('#name').show();
        });
    }
    const hideSlots= () => {
    $(function () {
        $('#name').hide();
    });
    }
    const showCurrent = () => {
        $(function () {
            $('#currentdiv').show();
            getallSlots();
        });
        
        hideSlots();
        hidePass();
        hideTable();
    }
    const hideCurrent= () => {
    $(function () {
        $('#currentdiv').hide();
    });
    }
    function MondayDisabler()
    {
        
        var isChecked=document.getElementById("tbg-btn-7").checked;
        
        console.log(isChecked)
        if(isChecked === false)
        {
            document.getElementById("tbg-btn-7").disabled = false;

            document.getElementById("tbg-btn-1").disabled = true;
            document.getElementById("tbg-btn-2").disabled = true;
            document.getElementById("tbg-btn-3").disabled = true;
            document.getElementById("tbg-btn-4").disabled = true;
            document.getElementById("tbg-btn-5").disabled = true;
            document.getElementById("tbg-btn-6").disabled = true;
        }
        if(isChecked === true)
        {
            document.getElementById("tbg-btn-7").disabled = false;

            document.getElementById("tbg-btn-1").disabled = false;
            document.getElementById("tbg-btn-2").disabled = false;
            document.getElementById("tbg-btn-3").disabled = false;
            document.getElementById("tbg-btn-4").disabled = false;
            document.getElementById("tbg-btn-5").disabled = false;
            document.getElementById("tbg-btn-6").disabled = false;
        }

       
    }
    function TuesdayDisabler()
    {
        
        var isChecked=document.getElementById("tbg-btn-14").checked;
        
        console.log(isChecked)
        if(isChecked === false)
        {
            document.getElementById("tbg-btn-14").disabled = false;

            document.getElementById("tbg-btn-8").disabled = true;
            document.getElementById("tbg-btn-9").disabled = true;
            document.getElementById("tbg-btn-10").disabled = true;
            document.getElementById("tbg-btn-11").disabled = true;
            document.getElementById("tbg-btn-12").disabled = true;
            document.getElementById("tbg-btn-13").disabled = true;
        }
        if(isChecked === true)
        {
            document.getElementById("tbg-btn-14").disabled = false;

            document.getElementById("tbg-btn-8").disabled = false;
            document.getElementById("tbg-btn-9").disabled = false;
            document.getElementById("tbg-btn-10").disabled = false;
            document.getElementById("tbg-btn-11").disabled = false;
            document.getElementById("tbg-btn-12").disabled = false;
            document.getElementById("tbg-btn-13").disabled = false;
        }


    }
    

    function WednesdayDisabler()
    {
        
        var isChecked=document.getElementById("tbg-btn-21").checked;
        
        console.log(isChecked)
        if(isChecked === false)
        {
            document.getElementById("tbg-btn-21").disabled = false;

            document.getElementById("tbg-btn-15").disabled = true;
            document.getElementById("tbg-btn-16").disabled = true;
            document.getElementById("tbg-btn-17").disabled = true;
            document.getElementById("tbg-btn-18").disabled = true;
            document.getElementById("tbg-btn-19").disabled = true;
            document.getElementById("tbg-btn-20").disabled = true;
        }
        if(isChecked === true)
        {
            document.getElementById("tbg-btn-21").disabled = false;

            document.getElementById("tbg-btn-15").disabled = true;
            document.getElementById("tbg-btn-16").disabled = true;
            document.getElementById("tbg-btn-17").disabled = true;
            document.getElementById("tbg-btn-18").disabled = true;
            document.getElementById("tbg-btn-19").disabled = true;
            document.getElementById("tbg-btn-20").disabled = true;
        }


    }
    function ThursdayDisabler()
    {
        
        var isChecked=document.getElementById("tbg-btn-28").checked;
        
        console.log(isChecked)
        if(isChecked === false)
        {
            document.getElementById("tbg-btn-28").disabled = false;

            document.getElementById("tbg-btn-22").disabled = true;
            document.getElementById("tbg-btn-23").disabled = true;
            document.getElementById("tbg-btn-24").disabled = true;
            document.getElementById("tbg-btn-25").disabled = true;
            document.getElementById("tbg-btn-26").disabled = true;
            document.getElementById("tbg-btn-27").disabled = true;
        }
        if(isChecked === true)
        {
            document.getElementById("tbg-btn-28").disabled = false;

            document.getElementById("tbg-btn-22").disabled = true;
            document.getElementById("tbg-btn-23").disabled = true;
            document.getElementById("tbg-btn-24").disabled = true;
            document.getElementById("tbg-btn-25").disabled = true;
            document.getElementById("tbg-btn-26").disabled = true;
            document.getElementById("tbg-btn-27").disabled = true;
        }


    }
    
    function FridayDisabler()
    {
        
        var isChecked=document.getElementById("tbg-btn-35").checked;
        
        console.log(isChecked)
        if(isChecked === false)
        {
            document.getElementById("tbg-btn-35").disabled = false;

            document.getElementById("tbg-btn-29").disabled = true;
            document.getElementById("tbg-btn-30").disabled = true;
            document.getElementById("tbg-btn-31").disabled = true;
            document.getElementById("tbg-btn-32").disabled = true;
            document.getElementById("tbg-btn-33").disabled = true;
            document.getElementById("tbg-btn-34").disabled = true;
        }
        if(isChecked === true)
        {
            document.getElementById("tbg-btn-35").disabled = false;

            document.getElementById("tbg-btn-29").disabled = true;
            document.getElementById("tbg-btn-30").disabled = true;
            document.getElementById("tbg-btn-31").disabled = true;
            document.getElementById("tbg-btn-32").disabled = true;
            document.getElementById("tbg-btn-33").disabled = true;
            document.getElementById("tbg-btn-34").disabled = true;
        }


    }
    
    


return (
        
    <>
    <div className="Mentorhomepage">
        {/* SIDE BAR  */}         
        <div style={{ display: 'flex', height: '100%', overflow: 'scroll initial',position:"-webkit-sticky",position:"sticky" }}>
                <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit', fontFamily:"Montserrat",fontSize: "18px" }}>
                    Welcome, {Name}
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                    <button  onClick="/" className="sidebarbtn">
                        <FaImage className="sidebaricon"/> My Albums
                    </button>
                    <button  className="sidebarbtn" onClick={showCurrent}>
                        <FaBookOpen className="sidebaricon"/> Current Slots
                    </button>
                    
                    <button  className="sidebarbtn" onClick={showTable}>
                            <FaGripHorizontal className="sidebaricon"/> Update Slots
                    </button>
                    <button  onClick={showPass} className="sidebarbtn">
                        <FaUserEdit className="sidebaricon"/>       Edit Profile
                    </button>
                    <button className="sidebarbtn" id ="sleek" onClick={() => history.push("/login")}>
                        <AiOutlineLogout className="sidebaricon"/>   Logout</button>
                   
                
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
        {/*gb popover///*/}
             <div id='overllay'>
           

                </div>
            {/*////////////// */}
            <div className="mentor-flex2">
                
                    
                <button  className="flex2user">
                            <FaUserAlt />
                </button>
                <Container className='cardBody'>
                        
                        
                    <div className="currentslotdiv" id="currentdiv">
                        <div id="name">
                            <h3 className="zx">Here's your current available time slots </h3>
                        </div>
                        {getallSlots()};
                        {/* Holders for current slots */}
                        <div class = "dayDiv" id='mondayHolder'></div>
                        <div class = "dayDiv" id='tuesdayHolder'></div>
                        <div class = "dayDiv" id='wednesdayHolder'></div>
                        <div class = "dayDiv" id='thursdayHolder'></div>
                        <div class = "dayDiv" id='fridayHolder'></div>
                        {/* end of holders */}
                    </div>
                    <div id="mydiv" class="hidden">
                                <Row className="sm-3 text-center">
                                        <h2 className='slots-h2'>Select desired available slots of the Week</h2>
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
                                                <ToggleButton onClick={MondayDisabler} className="none" variant="danger" id="tbg-btn-7" value={7}>
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
                                                <ToggleButton  onClick={TuesdayDisabler} className="none" variant="danger" id="tbg-btn-14" value={7}>
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
                                                <ToggleButton onClick={WednesdayDisabler}className="none" variant="danger" id="tbg-btn-21" value={7}>
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
                                                <ToggleButton onClick={ThursdayDisabler} className="none" variant="danger" id="tbg-btn-28" value={7}>
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
                                                <ToggleButton onClick={FridayDisabler} className="none" variant="danger" id="tbg-btn-35" value={7}>
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
                
                        
                            {/* <div id="duty">
                                    <h3 className="freeslots">You are currently assigned coverage for: <br></br>
                                                        
                                    </h3>
                                    <br/>
                                    <button  className="notifclose" variant="success btn-block" onClick={hideDuty}>
                                        OK
                                    </button>
                            </div> */}
                        
                </Container>
            </div>
        
        


        
    </div></>
);
}
export default GeneralHomepage