import React from "react"
import "./Photographyhomepage.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { useState } from 'react';
import { Button } from "react-bootstrap";


const PhotographyHomepage = (user) => {
    const history = useHistory()
    var Name = user.setLoginUser.name
    var i = 0;


    var showevents;
    var title;
    axios.post("http://localhost:9002/GetAcceptEvent", )
    .then(res => {
        alert(res.data.message)
        showevents = res.data.event;
        //console.log(showevents)
        //console.log(showevents[0].title)
        //title=showevents[0].title;
        //alert(title);
        //this.forceUpdate();
       
    })
    function showAccepted(event){
        console.log(event.title);
        console.log(event.description);
        console.log(event.venue);
        let row = document.createElement('div');
        row.className = 'row'

        let card = document.createElement('div');
        card.className = 'card shadow cursor-pointer';
        

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';


        let title = document.createElement('h5');
        title.innerText ="Event: "+ event.title;
        title.className = 'card-title';

        let date = document.createElement('h7');
        date.innerText = "Date: "+event.date+ "  Venue: "+event.venue;
        date.className = 'card-color';

        let description = document.createElement('p');
        description.innerText = "Description: "+event.description;
        description.className = 'card-text';

        let status = document.createElement('p');
        status.innerText = "Status: "+event.status;
        status.className = 'card-text';

        let teacher = document.createElement('p');
        teacher.innerText = "Teacher: "+event.teacherName;
        teacher.className = 'card-text';
        let email = document.createElement('p');
        email.innerText ="Email: "+event.teacherEmail;
        email.className = 'card-text';

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(date);
        cardBody.appendChild(status);
        cardBody.appendChild(teacher);
        cardBody.appendChild(email);
        card.appendChild(cardBody);
        i+=1;
        let container = document.querySelector("#card-container");
        container.appendChild(card);
       
    }

    const GetEvents = () => {
        showevents.forEach(showAccepted);
        var elem = document.getElementById('geteventbtn');
        elem.parentNode.removeChild(elem);
        let container = document.querySelector("#card-container");
        console.log(container.childNodes);
    }

    return (
        
        <div className="Photographyhomepage">  
            <h1>Hello {Name}</h1>
            <div className="button" id = "geteventbtn" onClick={GetEvents}>Show events</div>
            <div className="button" onClick={() => history.push("/login")}>Logout</div>
            <div id="card-container"></div>
        </div>
    );
}

export default PhotographyHomepage