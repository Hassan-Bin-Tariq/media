import React from "react"
//import CheckDetails from "./components/checkDetails"
import "./Mentorhomepage.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import { useHistory } from "react-router-dom"
import emailjs from "emailjs-com";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import {Button} from "react-bootstrap";

const MentorHomepage = (user) => {
    const history = useHistory()
    var Name = user.setLoginUser.name
    
    const [isOpen, setIsOpen] = useState(false);
    //console.log(Name)

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
    const CheckDetails = (event) => {
    console.log(event.target.id)
    var str1 = event.target.id.replace ( /[^\d.]/g, '' );
    var Teacheremail = eventts[str1].teacherEmail;
    var TeacherName = eventts[str1].teacherName;
    var EventTitle = eventts[str1].title;
    var EventDescription = eventts[str1].description;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    alert("Dw, im working :)");
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{EventTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{EventDescription}</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Reject
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Accept
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );

}
    
    // clickable MODAL for check details button
    /*function checkDetails(event)
    {
        console.log(event.target.id)
        var str1 = event.target.id.replace ( /[^\d.]/g, '' );
        var Teacheremail = eventts[str1].teacherEmail;
        var TeacherName = eventts[str1].teacherName;
        var EventTitle = eventts[str1].title;
        
        alert("Yes, Check Details is working just fine :(")
        // the modal
       
    }*/
    // $(document).on('click', '.mybtn', function(){
    //     alert( $(this).attr('id') );
    //     // Will give the id value for the clicked button
    // });
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
        //container.Acceptbtn.onClick(sendMail);
    }

    const removeElement = () => {
        history.push("./login")
    }

    return (
        
        <div className="Mentorhomepage" id="hassan">  
            <h1>Hello {Name}</h1>
            
            <div className="button" onClick={removeElement}>Logout</div>
            <div className="button" id = "geteventbtn" onClick={GetEvents}>Show events</div>

            <div id="card-container"></div>
        </div> 
    )
}

export default MentorHomepage