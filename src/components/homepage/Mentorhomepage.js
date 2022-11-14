import React from "react"
import "./Mentorhomepage.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import { useHistory } from "react-router-dom"
import emailjs from "emailjs-com";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import {Button} from "react-bootstrap";

var EventTitle;
var EventDescription;

const MentorHomepage = (user) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        axios.post("http://localhost:9002/StatusAccept" ) //changing status to accepted in DB
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
        emailjs.send("service_xsod6da","template_x40k3wu",{
            to_name: TeacherName,
            event_subject: "Request Status for event: " + EventTitle,
            message: "Your request for event "+ EventTitle+ " to be held on "+EventDate+
            " has been approved by Mentor!",
            reply_to: "mediascape0@gmail.com",
            to_email: Teacheremail,
        },"nv_Jq-1YJR57e3z-E");

        alert("Acceptance e-mail sent to requesting party!" );

    }
    //send mail to teacher in case of Rejected Event Request
    function sendRejection(event) 
    {
        axios.post("http://localhost:9002/StatusReject" ) //changing status to accepted in DB
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

        emailjs.send("service_xsod6da","template_x40k3wu",{
            to_name: TeacherName,
            event_subject: "Request Status for event: " + EventTitle,
            message: "Your request for event "+ EventTitle+ " to be held on "+EventDate+
            " has been rejected by Mentor.",
            reply_to: "mediascape0@gmail.com",
            to_email: Teacheremail,
        },"nv_Jq-1YJR57e3z-E");
        alert("Rejection e-mail sent to requesting party!" );
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

        let card = document.createElement('div');
        card.className = 'card shadow cursor-pointer';
        

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';


        let title = document.createElement('h5');
        title.innerText = item.title;
        title.className = 'card-title';

        let date = document.createElement('div');
        date.innerText = item.date;
        date.className = 'card-color';

        let description = document.createElement('p');
        description.innerText = item.description;
        description.className = 'card-text';

        let checkDetailsbtn = document.createElement('a');
        checkDetailsbtn.innerText = "check details";
        checkDetailsbtn.className = 'btn btn-primary';
        checkDetailsbtn.id = "id"+i;
        checkDetailsbtn.class = 'mybtn';
        //checkDetailsbtn.onClick={path:'/CheckDetails'};
        checkDetailsbtn.addEventListener("click", CheckDetails, false);

        let Acceptbtn = document.createElement('a');
        Acceptbtn.innerText = "Accept";
        Acceptbtn.className = 'btn btn-success';
        Acceptbtn.id = "id"+i;
        Acceptbtn.class = 'mybtn';
        Acceptbtn.addEventListener("click", sendMail, false);

        let Rejectbtn = document.createElement('a');
        Rejectbtn.innerText = "Reject";
        Rejectbtn.className = 'btn btn-danger';
        Rejectbtn.id = "id"+i;
        Rejectbtn.class = 'mybtn';
        Rejectbtn.addEventListener("click", sendRejection, false);


        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(date);
        cardBody.appendChild(checkDetailsbtn);
        cardBody.appendChild(Acceptbtn);
        cardBody.appendChild(Rejectbtn);

        card.appendChild(cardBody);
        i+=1;
        let container = document.querySelector("#card-container");
        container.appendChild(card);
        
    }

    const GetEvents = () => {
        eventts.forEach(myFunction);
        var elem = document.getElementById('geteventbtn');
        elem.parentNode.removeChild(elem);

        let container = document.querySelector("#card-container");
        console.log(container.childNodes);
    }

    return (
        
        <div className="Mentorhomepage" id="hassan">  
            <h1>Hello {Name}</h1>
            
            <div className="button" onClick={() => history.push("./login")}>Logout</div>
            <div className="button" id = "geteventbtn" onClick={GetEvents}>Show events</div>

            <div id="card-container"></div>
            
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
    )
}

export default MentorHomepage