import React from "react"
import "./Mentorhomepage.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import Navbar from 'react-bootstrap/Navbar';
import { useHistory } from "react-router-dom"
import emailjs from "emailjs-com";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import {Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import navlogo from "../../assets/Picture1.png";
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
    FaImage,
    FaGripHorizontal,
    FaTimes,
    FaUserEdit,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {AiOutlineLogout} from "react-icons/ai";
import Sidebar from "../Header/Sidebar";
import $ from "jquery"

var EventTitle;
var EventDescription;

const MentorHomepage = (user) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const history = useHistory()
    var Name = user.setLoginUser.name
    var i = 0;
    var eventts;

    axios.post("http://localhost:9002/GetEventRequest", )
    .then(res => {
        //alert(res.data.message)
        eventts = res.data.event;
        eventts.forEach(myFunction);
        console.log(eventts)
    })
    function sendMail(event)
    {
        var str1 = event.target.id.replace ( /[^\d.]/g, '' );
        var EventID = eventts[str1]._id;

        axios.post("http://localhost:9002/StatusAccept",{id: EventID} ) //changing status to accepted in DB
        .then(res => {
            //alert(res.data.message)
            eventts = res.data.event;
            console.log(eventts)
        })

        //console.log(event.target.id)
        var str1 = event.target.id.replace ( /[^\d.]/g, '' );
        
        var Teacheremail = eventts[str1].teacherEmail;
        var TeacherName = eventts[str1].teacherName;
        var EventTitle = eventts[str1].title;
        var EventDate= eventts[str1].date;
        // emailjs.send("service_xsod6da","template_x40k3wu",{
        //     to_name: TeacherName,
        //     event_subject: "Request Status for event: " + EventTitle,
        //     message: "Your request for event "+ EventTitle+ " to be held on "+EventDate+
        //     " has been approved by Mentor!",
        //     reply_to: "mediascape0@gmail.com",
        //     to_email: Teacheremail,
        // },"nv_Jq-1YJR57e3z-E");

        // alert("Acceptance e-mail sent to requesting party!" );

    }
    //send mail to teacher in case of Rejected Event Request
    function sendRejection(event) 
    {
        var str1 = event.target.id.replace ( /[^\d.]/g, '' );
        var EventID = eventts[str1]._id;

        axios.post("http://localhost:9002/StatusReject",{id: EventID} ) //changing status to accepted in DB
        .then(res => {
            //alert(res.data.message)
            eventts = res.data.event;
            console.log(eventts)
        })
        

        
        console.log(event.target.id)
        var str1 = event.target.id.replace ( /[^\d.]/g, '' );
        var Teacheremail = eventts[str1].teacherEmail;
        var TeacherName = eventts[str1].teacherName;
        var EventTitle = eventts[str1].title;
        var EventDate= eventts[str1].date;

        // emailjs.send("service_xsod6da","template_x40k3wu",{
        //     to_name: TeacherName,
        //     event_subject: "Request Status for event: " + EventTitle,
        //     message: "Your request for event "+ EventTitle+ " to be held on "+EventDate+
        //     " has been rejected by Mentor.",
        //     reply_to: "mediascape0@gmail.com",
        //     to_email: Teacheremail,
        // },"nv_Jq-1YJR57e3z-E");
        // alert("Rejection e-mail sent to requesting party!" );
    }
    
    function doNothing(){

    }
    function CheckDetails  (event) {
        console.log(event.target.id)
        var str1 = event.target.id.replace ( /[^\d.]/g, '' );
        EventTitle = eventts[str1].title;
        EventDescription = eventts[str1].description;       
        handleShow();
    }
    function myFunction(item) {
        if(item.status === "Not Checked"){
            let mycard = document.createElement('div');
            mycard.className = 'mycard'

            let imgBx = document.createElement('div');
            imgBx.className = 'imgBx'

            let imgTitleText = document.createElement('h2');
            imgTitleText.innerText = "Event:";

            let imgTitle = document.createElement('h3');
            imgTitle.innerText = item.title;

            let imgTeacherText = document.createElement('h2');
            imgTeacherText.innerText = "Requesting Teacher:";

            let imgTeacher = document.createElement('h3');
            imgTeacher.innerText = item.teacherName;

            let image = document.createElement('img');
            // image.src = "https://i.pinimg.com/564x/3e/b2/f7/3eb2f70bbd7cbc175f2ae3ffa7a6486d.jpg"
            // image.src = "C://Users/ACS/Desktop/media/src/assets/ghous.jpg"
            image.src=ghous

            //DETAILS STARTING

            let details = document.createElement('div');
            details.className = 'details'

            let descriptionWritten = document.createElement('h4');
            descriptionWritten.innerText = 'Description:'

            let description = document.createElement('h5');
            description.innerText = item.description;

            let Venue = document.createElement('h4')
            Venue.innerText = "Venue: "+item.venue;

            let Date = document.createElement('h4')
            Date.innerText = "Date: "+item.date;

            let timewritten = document.createElement('h4');
            timewritten.innerText = 'EVENT TIME'

            let timeul = document.createElement('ul');
            timeul.className = 'size'

            let starttime = document.createElement('li');
            starttime.innerText = "Start: "+item.StartTime
            let endtime = document.createElement('li');
            endtime.innerText = "End: "+item.EndTime

            let divgroup = document.createElement('div');
            divgroup.className = 'group'

            let acceptbtn = document.createElement('button');
            acceptbtn.innerText = 'Accept'
            acceptbtn.id = i
            acceptbtn.addEventListener("click",sendMail,false);

            let rejectbtn = document.createElement('button');
            rejectbtn.innerText = 'Reject'
            rejectbtn.id = i
            rejectbtn.addEventListener("click",sendRejection,false);

            //EVERYTHING IS APPENDED BY FOLLOWING THE HERARICHY OF LINK PROVIDED 
            
            details.appendChild(descriptionWritten);
            details.appendChild(description);
            details.appendChild(Venue);
            details.appendChild(Date);
            details.appendChild(timewritten);

            timeul.appendChild(starttime);
            timeul.appendChild(endtime);
            details.appendChild(timeul);

            // divgroup.appendChild(divpricewritten);
            divgroup.appendChild(acceptbtn);
            divgroup.appendChild(rejectbtn);
            details.appendChild(divgroup);

            imgBx.appendChild(image);
            imgBx.appendChild(imgTitleText);
            imgBx.appendChild(imgTitle);
            imgBx.appendChild(imgTeacherText);
            imgBx.appendChild(imgTeacher);
            mycard.appendChild(details);
            mycard.appendChild(imgBx);
            
            // cardbody.appendChild(mycard);
            $('#card-container').empty();
            let container = document.querySelector("#card-container");
            container.appendChild(mycard);    
        }
        i+=1;   
    }

    const GetEvents = () => {
        const xhr = new XMLHttpRequest();
        eventts.forEach(myFunction);

        let container = document.querySelector("#card-container");
        console.log(container.childNodes);
    }
    const SideBarActivator = () =>
    {
        var sidebar = document.querySelector("#sidebar");
        var container = document.querySelector(".my-container");
        sidebar.classList.toggle("active-nav")
        container.classList.toggle("active-cont")
    }

    function logOuter(){
        history.push("./login");

    }
    function checkAssigned(){
        axios.post("http://localhost:9002/GetGBmembers", ) //FETCH ALL GB MEMBERS TO CHECK ASSIGNED DUTIES
        .then(res => {
        
            var GeneralBodies = res.data.generalBodies;
            for(var g = 0; g<GeneralBodies.length; g++)
            {
                if(GeneralBodies[g].Duty.teacherEmail != undefined)
                {
                    console.log(GeneralBodies[g].Duty.teacherEmail)
                    console.log(GeneralBodies[g].name)
                    console.log(GeneralBodies[g].email)
                    console.log(GeneralBodies[g].Duty.venue)
                    console.log(GeneralBodies[g].Duty.Date)
                    console.log(GeneralBodies[g].Duty.Slot)
                    //////// DYNAMIC VISUALIZATION ///////
                    
                }
            }
        })

    }
    let k = 0;
    function slotsPrinter(slot) {

        if(k === 0)
        {
            let MondayWritten = document.createElement('h4')
            MondayWritten.innerText = "Monday";
            MondayWritten.className="slotname"
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

        else if(k === 1)
        {
            let TuesdayWritten = document.createElement('h4')
            TuesdayWritten.innerText = "Tuesday";

            TuesdayWritten.className="slotname"
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

        else if(k === 2)
        {
            let WednesdayWritten = document.createElement('h4')
            WednesdayWritten.innerText = "Wednesday";

            WednesdayWritten.className="slotname"
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

        else if(k === 3)
        {
            let ThursdayWritten = document.createElement('h4')
            ThursdayWritten.innerText = "Thursday";

            ThursdayWritten.className="slotname"
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

        else if(k === 4)
        {
            let FridayWritten = document.createElement('h4')
            FridayWritten.innerText = "Friday";

            FridayWritten.className="slotname"
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

        k+=1;
    }


    var givenslots;
    function checkFreeSlots(){
        axios.post("http://localhost:9002/GetGBmembers", ) //FETCH ALL GB MEMBERS TO CHECK ASSIGNED DUTIES
        .then(res => {
            const data = res.data;
            for(var all = 0; all<data.generalBodies.length ; all++)
            {
                k = 0;
                givenslots = data.generalBodies[all].slots;
                console.log(givenslots);
                givenslots.forEach(slotsPrinter);
            }
        }).catch(() => {
            alert('Error in fetching GB members');
        })

    }
    return (

    <div>
        
        <div className="Mentorhomepage" id="hassan">  
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
                    <button onClick={GetEvents} className="sidebarbtn" >
                                <FaGripHorizontal className="sidebaricon"/> My Albums
                    </button>
                    <button  onClick={GetEvents} className="sidebarbtn">
                                <FaUserEdit className="sidebaricon" /> Event Requests
                    </button>
                    <button  onClick={checkAssigned} className="sidebarbtn">
                                <FaUserEdit className="sidebaricon" /> Check Assigned Students
                    </button>
                    <button  onClick={checkFreeSlots} className="sidebarbtn">
                                <FaUserEdit className="sidebaricon" /> Check Free Students
                    </button>
                    <button className="sidebarbtn" id ="sleek" onClick={logOuter}>
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
                
                    
                    <button  onClick={SideBarActivator} className="flex2user">
                                <FaUserAlt />
                    </button>
                
                    
                            
                    {/* Div with card */}
                    <div class = "cardBody" id="card-container">
                        <h2 style={{ color: 'inherit', fontFamily:"Montserrat",fontSize: "18px",fontWeight:"bold",paddingRight:"500px" }}>
                        Looks like you have some pending Event Requests</h2>
                        {/* <div className="card-flex"></div> */}
                    </div>

                    {/* Div with card end */}
            </div>
                    
              
            {/* <h1>Hello, {Name} !</h1>
            <h2>Welcome to your portal</h2>
            <br></br> */}
            
            
            {/* Holders for current slots */}
            <div class = "dayDiv" id='mondayHolder'></div>
            <div class = "dayDiv" id='tuesdayHolder'></div>
            <div class = "dayDiv" id='wednesdayHolder'></div>
            <div class = "dayDiv" id='thursdayHolder'></div>
            <div class = "dayDiv" id='fridayHolder'></div>
            {/* end of holders */}
            
            {/* CHECK DETAILS START */}
            {
                show && <div id="Modal-container2">
                    <h1 className="greeting">
                        <>
                            <Modal show = {show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>{EventTitle}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>{EventDescription}</Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={doNothing}>
                                    Reject
                                </Button>
                                <Button variant="primary" onClick={doNothing}>
                                    Accept
                                </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                    </h1>
                </div>
            }
            {/* CHECK DETAILS END */}
        </div> 
</div>
    )
}

export default MentorHomepage