import React from "react"
import "./Photographyhomepage.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Modal } from "react-bootstrap"

const PhotographyHomepage = (user) => {
    const history = useHistory()
    var Name = user.setLoginUser.name
    var i = 0;
    var showevents;
    var GeneralBodies;
    var timeslost = [];
    var emails = [];
    var dict = {};
    var requiredSlots = [];
    var assignSlots={};
    var names=[];

    axios.post("http://localhost:9002/GetAcceptEvent", )
    .then(res => {
        //alert(res.data.message)
        showevents = res.data.event;
    })
    
    function changetimeformat (times)
    {
        //CONVERTING SLOT NUMBER TO ITS EQUVILENT TIME
        requiredSlots = [];
        var changedTimeFormat;
        if(times === 1)
        {
            changedTimeFormat = "8:45 - 10:10";
        }
        else if(times === 2)
        {
            changedTimeFormat = "10:15 - 11:40";
        }
        else if(times === 3)
        {
            changedTimeFormat = "11:45 - 1:10";
        }
        else if(times === 4)
        {
            changedTimeFormat = "1:15 - 1:40";
        }
        else if(times === 5)
        {
            changedTimeFormat = "1:45 - 3:10";
        }
        else if(times === 6)
        {
            changedTimeFormat = "3:15 - 4:45";
        }

        return changedTimeFormat
    }
    function getRequiredSlots(start,end)
    {
        //GOTTA WRITE ALGO JO TEACHER K GIVEN TIME KO US K EQUVILANT REQUIRED SLOTS MA CONVERT KR DY 
        var begin = parseInt(start[0]+start[1]);
        var fin = parseInt(end[0]+end[1]);
        if(begin === 3)
        {
            requiredSlots.push("3:15 - 4:45");
        }
        else if(begin === 9 && fin === 10)
        {
            requiredSlots.push("8:45 - 10:10");
        }
        else if(begin === 9 && fin === 11)
        {
            requiredSlots.push("8:45 - 10:10");
            requiredSlots.push("10:15 - 11:40");
        }
        else if(begin === 9 && fin === 12)
        {
            requiredSlots.push("8:45 - 10:10");
            requiredSlots.push("10:15 - 11:40");
        }
        else if(begin === 9 && fin === 1)
        {
            requiredSlots.push("8:45 - 10:10");
            requiredSlots.push("10:15 - 11:40");
            requiredSlots.push("11:45 - 1:10");
        }
        else if(begin === 9 && fin === 2)
        {
            requiredSlots.push("8:45 - 10:10");
            requiredSlots.push("10:15 - 11:40");
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
        }
        else if(begin === 9 && fin === 3)
        {
            requiredSlots.push("8:45 - 10:10");
            requiredSlots.push("10:15 - 11:40");
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
            requiredSlots.push("1:45 - 3:10");
        }
        else if(begin === 9 && fin === 4)
        {
            requiredSlots.push("8:45 - 10:10");
            requiredSlots.push("10:15 - 11:40");
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
            requiredSlots.push("1:45 - 3:10");
            requiredSlots.push("3:15 - 4:45");
        }
        else if(begin === 9 && fin === 5)
        {
            requiredSlots.push("8:45 - 10:10");
            requiredSlots.push("10:15 - 11:40");
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
            requiredSlots.push("1:45 - 3:10");
            requiredSlots.push("3:15 - 4:45");
        }
        else if(begin === 10 && fin === 11)
        {
            requiredSlots.push("10:15 - 11:40");
        }
        else if(begin === 10 && fin === 12)
        {
            requiredSlots.push("10:15 - 11:40");
        }
        else if(begin === 10 && fin === 1)
        {
            requiredSlots.push("10:15 - 11:40");
            requiredSlots.push("11:45 - 1:10");
        }
        else if(begin === 10 && fin === 2)
        {
            requiredSlots.push("10:15 - 11:40");
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
        }
        else if(begin === 10 && fin === 3)
        {
            requiredSlots.push("10:15 - 11:40");
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
            requiredSlots.push("1:45 - 3:10");
        }
        else if(begin === 10 && fin === 4)
        {
            requiredSlots.push("10:15 - 11:40");
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
            requiredSlots.push("1:45 - 3:10");
            requiredSlots.push("3:15 - 4:45");
        }
        else if(begin === 10 && fin === 5)
        {
            requiredSlots.push("10:15 - 11:40");
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
            requiredSlots.push("1:45 - 3:10");
            requiredSlots.push("3:15 - 4:45");
        }
        else if(begin === 11 && fin === 12)
        {
            requiredSlots.push("10:15 - 11:40");
            requiredSlots.push("11:45 - 1:10");
        }
        else if(begin === 11 && fin === 1)
        {
            requiredSlots.push("10:15 - 11:40");
            requiredSlots.push("11:45 - 1:10");
        }
        else if(begin === 11 && fin === 2)
        {
            requiredSlots.push("10:15 - 11:40");
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
        }
        else if(begin === 11 && fin === 3)
        {
            requiredSlots.push("10:15 - 11:40");
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
            requiredSlots.push("1:45 - 3:10");
        }
        else if(begin === 11 && fin === 4)
        {
            requiredSlots.push("10:15 - 11:40");
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
            requiredSlots.push("1:45 - 3:10");
            requiredSlots.push("3:15 - 4:45");
        }
        else if(begin === 11 && fin === 5)
        {
            requiredSlots.push("10:15 - 11:40");
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
            requiredSlots.push("1:45 - 3:10");
            requiredSlots.push("3:15 - 4:45");
        }
        else if(begin === 12 && fin === 1)
        {       
            requiredSlots.push("11:45 - 1:10");
        }
        else if(begin === 12 && fin === 2)
        {
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
        }
        else if(begin === 12 && fin === 3)
        {
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
            requiredSlots.push("1:45 - 3:10");
        }
        else if(begin === 12 && fin === 4)
        {
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
            requiredSlots.push("1:45 - 3:10");
            requiredSlots.push("3:15 - 4:45");
        }
        else if(begin === 12 && fin === 5)
        {
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
            requiredSlots.push("1:45 - 3:10");
            requiredSlots.push("3:15 - 4:45");
        }
        else if(begin === 1 && fin === 2)
        {
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
        }
        else if(begin === 1 && fin === 3)
        {
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
            requiredSlots.push("1:45 - 3:10");
        }
        else if(begin === 1 && fin === 4)
        {
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
            requiredSlots.push("1:45 - 3:10");
            requiredSlots.push("3:15 - 4:45");
        }
        else if(begin === 1 && fin === 5)
        {
            requiredSlots.push("11:45 - 1:10");
            requiredSlots.push("1:15 - 1:40");
            requiredSlots.push("1:45 - 3:10");
            requiredSlots.push("3:15 - 4:45");
        }
        else if(begin === 2 && fin === 3)
        {
            requiredSlots.push("1:45 - 3:10");
        }
        else if(begin === 2 && fin === 4)
        {
            requiredSlots.push("1:45 - 3:10");
            requiredSlots.push("3:15 - 4:45");
        }
        else if(begin === 2 && fin === 5)
        {
            requiredSlots.push("1:45 - 3:10");
            requiredSlots.push("1:45 - 3:10");
            requiredSlots.push("3:15 - 4:45");
        }
        return requiredSlots;
    }
    function getDayfromDate(dateee){
        //CONVERTING DATE INTO ITS EQUIVALENT DAY TO GET TIME SLOTS OF ONLY THAT DAY
        var currentDate = new Date(dateee);
        var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 

        if(daysOfWeek[currentDate.getDay()] === "Mon")
        {
            return 0;
        }
        else if(daysOfWeek[currentDate.getDay()] === "Tue")
        {
            return 1;
        }
        else if(daysOfWeek[currentDate.getDay()] === "Wed")
        {
            return 2;
        }
        else if(daysOfWeek[currentDate.getDay()] === "Thu")
        {
            return 3;
        }
        else if(daysOfWeek[currentDate.getDay()] === "Fri")
        {
            return 4;
        }
    }
    function findFreeStudent(start,end,dateee)
    {
        var i=0;
        var second=[];
        var l=0;
        var prev="";
        var required = getRequiredSlots(start,end);
        var day = getDayfromDate(dateee);
        for (var key in dict){                                  // ITERATING OVER ALL GB MEMBERS FREE SLOTS
            for(var k = 0; k < dict[key][day].length; k++){     // ITERATING OVER ALL FREE SLOTS OF THAT DAY

                for(var m = 0; m < required.length; m++)        // ITERATING OVER ALL REQUIRED SLOTS TO COMPARE 
                {
                    if(required[m] === dict[key][day][k])
                    {
                        console.log(key,dict[key][day][k]); //key has email, dict has time slots
                        second.push(names[l]);
                        console.log(second[i]);
                        /*if(key===prev)
                        {
                            console.log("name: "+names[i-1]);
                        }
                        else{
                            console.log("name: "+names[i]);
                        }*/
                        
                        prev=key;
                        console.log("previous:"+ prev);
                        //alert(dict[key][day][k]);
                            let row = document.createElement('div');
                            row.className = 'row'

                            let card = document.createElement('div');
                            card.className = 'card shadow cursor-pointer';
                            

                            let cardBody = document.createElement('div');
                            cardBody.className = 'card-body';


                            let student = document.createElement('h5');
                            student.innerText ="Student: "+ second[i];
                            student.className = 'card-title';

                            let email = document.createElement('div');
                            email.innerText = "Email: "+ key;
                            email.className = 'card-text';

                            let date = document.createElement('div');
                            date.innerText = "Free Slot: "+ dict[key][day][k];
                            date.className = 'card-color';


                            let Assigndutiesbtn = document.createElement('a');
                            Assigndutiesbtn.innerText = "Assign duty";
                            Assigndutiesbtn.className = 'btn btn-primary';
                            Assigndutiesbtn.id = "id"+i;
                            Assigndutiesbtn.class = 'mybtn';
                            Assigndutiesbtn.addEventListener("click", AssignDuties, false);

                            cardBody.appendChild(student);
                            cardBody.appendChild(email);
                            cardBody.appendChild(date);
                            cardBody.appendChild(Assigndutiesbtn);
                            card.appendChild(cardBody);
                            i+=1;
                            let container = document.querySelector("#card-container2");
                            container.appendChild(card);
                        


                    }
                }
            }    
            l+=1;
        }

    }
    function fetchslots (start,end,date)
    {
        emails = [];
        axios.post("http://localhost:9002/GetGBmembers", ) //FETCH ALL GB MEMBERS TO CHECK THIER AVAILABLE SLOTS TO ASSIGN DUTY
        .then(res => {
            //alert(res.data.message)
        //FETCHED ALL gbMEMBERS AND MADE A DICTIONARY OF THEM WITH THEIR EMAILS AS KEYS AND SLOTS IN FRONT OF THEM    
            GeneralBodies = res.data.generalBodies;
            for (var i=0; i<GeneralBodies.length; i++)
            {
                timeslost = [];
                emails.push(GeneralBodies[i].email);
                //console.log(GeneralBodies[i].name);
                /*if(emails[i]===emails[i+1])
                {
                    names.push(GeneralBodies[i].name)
                    names.push(GeneralBodies[i].name)
                }
                else if(emails[i]!==emails[i+1])
                {
                    
                }*/
                names.push(GeneralBodies[i].name);
                
                
                for(var j=0; j<5; j++)
                {
                    var days = [];
                    for(var k =0; k<GeneralBodies[i].slots[j].length; k++)
                    {
                        var changed = changetimeformat(GeneralBodies[i].slots[j][k])
                        days.push(changed);                                          
                    }
                    timeslost.push(days); 
                }
                dict[GeneralBodies[i].email] = timeslost;
                
            }
        })
        //console.log(dict);
        findFreeStudent(start,end,date);
    }
    function AssignDuties  (event) {
        //console.log(event.target.id)
        var str1 = event.target.id.replace ( /[^\d.]/g, '' );
        //console.log(str1);
        var starttime = showevents[str1].StartTime;
        var endtime = showevents[str1].EndTime;
        var date = showevents[str1].date
        fetchslots(starttime,endtime,date);
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
            <div id="card-container2"></div>
        </div>
    );
}

export default PhotographyHomepage