import React from "react"
import "./Photographyhomepage.css"
import axios from "axios"
import { useHistory } from "react-router-dom"



const PhotographyHomepage = (user) => {
    const history = useHistory()
    var Name = user.setLoginUser.name
    var i = 0;


    var showevents;
    //var title;
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

    function AssignDuties  (event) {
        //console.log(event.target.id)
        var str1 = event.target.id.replace ( /[^\d.]/g, '' );
        //console.log(str1);
        var starttime = showevents[str1].StartTime;
        var endtime = showevents[str1].EndTime;
        console.log(starttime,endtime);
    }

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

        let startTime = document.createElement('p');
        startTime.innerText = "Start Time: "+event.StartTime;
        startTime.className = 'card-text';

        let endTime = document.createElement('p');
        endTime.innerText = "End Time: "+event.EndTime;
        endTime.className = 'card-text';

        let status = document.createElement('p');
        status.innerText = "Status: "+event.status;
        status.className = 'card-text';

        let teacher = document.createElement('p');
        teacher.innerText = "Teacher: "+event.teacherName;
        teacher.className = 'card-text';
        let email = document.createElement('p');
        email.innerText ="Email: "+event.teacherEmail;
        email.className = 'card-text';

        let Assigndutiesbtn = document.createElement('a');
        Assigndutiesbtn.innerText = "Assign duties";
        Assigndutiesbtn.className = 'btn btn-primary';
        Assigndutiesbtn.id = "id"+i;
        Assigndutiesbtn.class = 'mybtn';
        Assigndutiesbtn.addEventListener("click", AssignDuties, false);

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(date);
        cardBody.appendChild(startTime);
        cardBody.appendChild(endTime);
        cardBody.appendChild(status);
        cardBody.appendChild(teacher);
        cardBody.appendChild(email);
        cardBody.appendChild(Assigndutiesbtn);
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