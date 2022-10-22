import React from "react"
import "./Mentorhomepage.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import { useHistory } from "react-router-dom"
import $ from "jquery";
import emailjs from "emailjs-com";

const MentorHomepage = (user) => {
    const history = useHistory()
    var Name = user.setLoginUser.name
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

        emailjs.send("service_xsod6da","template_x40k3wu",{
            to_name: TeacherName,
            message: "accepted by mentor",
            reply_to: "mediascape0@gmail.com",
            to_email: Teacheremail,
            event_name: EventTitle,
        },"nv_Jq-1YJR57e3z-E");
        //alert("Sending mail!"+event.target.item)

    }
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

        let btn = document.createElement('a');
        btn.innerText = "check details";
        btn.className = 'btn btn-primary';
        btn.href="https://www.google.com/"

        let Acceptbtn = document.createElement('a');
        Acceptbtn.innerText = "Accept";
        Acceptbtn.className = 'btn btn-success';
        Acceptbtn.id = "id"+i;
        Acceptbtn.class = 'mybtn';
        //Acceptbtn.onClick = {sendMail};
        Acceptbtn.addEventListener("click", sendMail, false);

        let Rejectbtn = document.createElement('a');
        Rejectbtn.innerText = "Reject";
        Rejectbtn.className = 'btn btn-danger';
        Rejectbtn.href="https://www.google.com/"


        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(date);
        cardBody.appendChild(btn);
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