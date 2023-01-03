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
import navlogo from "../../assets/Picture1.png";
import camera from "../../assets/camera1.jpg";
import {
    FaUserAlt,
    FaWindowClose,
    FaUserEdit,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {AiOutlineLogout} from "react-icons/ai";


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

        
        console.log(item.teacherEmail)

        let row = document.createElement('div');
        row.className = 'row'

        let cardBody = document.createElement('div');
        cardBody.class = 'card'

        let title = document.createElement('h5');
        title.innerText = item.title;
        title.class = 'titleee';

        let description = document.createElement('p');
        description.innerText = item.description;
        description.class = 'des';

        let checkDetailsbtn = document.createElement('a');
        checkDetailsbtn.innerText = "Check Details";
        checkDetailsbtn.className = 'btn btn-primary';
        checkDetailsbtn.id = "id"+i;
        checkDetailsbtn.class = 'mybtn';
        //checkDetailsbtn.onClick={path:'/CheckDetails'};
        checkDetailsbtn.addEventListener("click", CheckDetails, false);

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(checkDetailsbtn);

        i+=1;
        let container = document.querySelector("#card-container");
        container.appendChild(cardBody);
        
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

    return (

    <div>
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
                    <p>You can write something here</p>
            </div>

            {/* 3rd social media links */}
            <div className="social-media">
                <ul className="social-media-desktop">
                    <li>
                    </li>
                    <li>
                    </li>
                    <li>
                    <button  onClick={SideBarActivator} className="btclose">
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



        <div className="Mentorhomepage" id="hassan">  

            {/* SIDE BAR  */}   
            <nav class="navbar navbar-expand d-flex flex-column align-item-start" id="sidebar">
                <ul class="navbar-nav d-flex flex-column mt-5 w-100">
                    <div className="closebtn">
                        <li class="nav-item w-100">
                            
                            <button  onClick={SideBarActivator} className="btclose">
                                <FaWindowClose className="close"></FaWindowClose>
                            </button>
                                
                        </li>
                    </div>
                    <div className="sidebardiv">
                        <li class="nav-item w-100">
                            <button  onClick={GetEvents} className="btn-bg-transparent">
                                <FaUserEdit />       Show Events
                            </button>
                        </li>
                        <li class="nav-item w-100">
                            <button className="btn-bg-transparent" id ="sleek" onClick={() => history.push("/login")}><AiOutlineLogout/>        Logout
                            </button>
                        </li>
                    </div>
                </ul>
            </nav>
        {/*////////////// */} 

            <h1>Hello, {Name} !</h1>
            <h2>Welcome to your portal</h2>
            <br></br>

            
            
            <div class = "asdtest" id="card-container"></div>
            
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
        </div> 
</div>
    )
}

export default MentorHomepage