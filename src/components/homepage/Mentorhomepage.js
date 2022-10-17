import React from "react"
import "./Mentorhomepage.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import { useHistory } from "react-router-dom"

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

    function myFunction(item) {
        console.log(item.teacherEmail)

        // var h = document.createElement("button");
        // h.setAttribute("id", "setedID"+ i);
        // var t = document.createTextNode(item.teacherEmail);
        // h.appendChild(t);
        // document.body.appendChild(h);

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


        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(date);
        cardBody.appendChild(btn);

        card.appendChild(cardBody);
        
        let container = document.querySelector("#card-container");
        container.appendChild(card);

        i+=1;
        //document.getElementById("myText").innerHTML += item.teacherEmail+"\n";
    }

    const GetEvents = () => {
        //console.log(eventts[0])
        eventts.forEach(myFunction);
        var elem = document.getElementById('geteventbtn');
        elem.parentNode.removeChild(elem);
    }

    const removeElement = () => {

        // for (let k = 0; k < i; k++) {
        //     var elem = document.getElementById('setedID'+k);
        //     elem.parentNode.removeChild(elem);
        // }
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