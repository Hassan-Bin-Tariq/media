import React from "react"
import "./Photographyhomepage.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import { useHistory } from "react-router-dom"
import Modal from 'react-bootstrap/Modal';
import { useState , useRef, useEffect} from "react";
import {Button} from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import logoNav from "../../assets/logo-copy.png";
import Container from 'react-bootstrap/Container';
import {Col, Form, Row} from "react-bootstrap";
// import * as XLSX from 'xlsx'
//import * as Excel from "exceljs";
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navlogo from "../../assets/Picture1.png";
import Offcanvas from 'react-bootstrap/Offcanvas';
import ghous from "../../assets/ghous.jpg";
import Carousel from 'react-bootstrap/Carousel';
import icit from '../../assets/icit.jpg'
import c from '../../assets/c.png'
import cc from '../../assets/cc.png'
import ccc from '../../assets/ccc.png'
import cccc from '../../assets/cccc.png'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
    FaUserAlt,
    FaWindowClose,
    FaUserEdit,
    FaBookOpen,
    FaGripHorizontal,

} from "react-icons/fa";
import $ from "jquery"
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import {AiOutlineLogout} from "react-icons/ai";
import { Pie } from 'react-chartjs-2';
// import { elementAcceptingRef } from "@mui/utils"
// import { empSchema} from  '../mongoDBSchemas/empSchema';
// import {APIResponse, ErrResponse} '../utils/statusMessages';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//   } from 'react-router-dom';
const PhotographyHomepage = (user) => {
    var Name = user.setLoginUser.name
    var Email = user.setLoginUser.email
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory()
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [item, setItem]=useState([]);
    const [ event2, setEvent2] = useState({
        headName: Name,
        headEmail: user.setLoginUser.email,
        userID: user.setLoginUser._id,
        title: "",
        description:"",
        date:"",
        StartTime: "",
        EndTime: "",
        venue: "",
        status: "Not Checked"    
    })
    const handleChange = e => {
        var { name, value } = e.target
        if(name === "StartTime" || name === "EndTime")
        {
            value = tConvert (value);
        }
        setEvent2({
            ...event2,
            [name]: value
        })
    }
    console.log(event2)
    var Name = user.setLoginUser.name
    var i = 0;
    var EventTitle;
    var EventDescription;
    
    var GeneralBodies;
    var timeslost = [];
    var emails = [];
    var dict = {};
    var requiredSlots = [];
    var assignSlots={};
    var names=[];
    var selectedDate;
    var studentSlots = [];
    var freestuEmails = [];
    var eventts;

    var RequestingTeacherEmail;
    var Venuee;

    //overlay
    const [showOverlay, setShowOverlay] = useState(false);
    const [target, setTarget] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const ref = useRef(null);
 
    // const [options, setOptions] = useState([
    //     { id: 1, text: 'Option 1', votes: 0 },
    //     { id: 2, text: 'Option 2', votes: 0 },
    //     { id: 3, text: 'Option 3', votes: 0 },
    // ]);
    // const [selectedOption, setSelectedOption] = useState(null);
    // const [submitted, setSubmitted] = useState(false);
    
    // const handleOptionChange = event => {
    //     setSelectedOption(parseInt(event.target.value));
    // };
    
    // const handleSubmit = (event) =>
    // {
    //     event.preventDefault();
    //     //axios.post('http://localhost:9002/poll', { optionId: selectedOption }).then(res=>{
        
    
    //         const updatedOptions = options.map(option => {
    //         if (option.id === selectedOption) {
    //             return { ...option, votes: option.votes + 1 };
    //         }
    //         return option;
    //         });
    //         setOptions(updatedOptions);
    //         setSubmitted(true);
    //         console.log(updatedOptions);
    // }
    
        const [question, setQuestion] = useState('');
        const [options, setOptions] = useState([]);
        const [response, setResponse] = useState('');
        const [polls, setPolls] = useState([]);
        const [submittedPoll, setSubmittedPoll] = useState(null);

        useEffect(() => {
            const fetchPolls = async () => {
            try {
                const { data } = await axios.get("http://localhost:9002/cpolls");

                setPolls(data);
            } catch (error) {
                console.log(error);
            }
            };

            fetchPolls();
        }, []);

        const handleSubmit = async (event) => {
            event.preventDefault();
            const data = {question, options, response};
                console.log("inside handle")
                axios.post("http://localhost:9002/createpoll", data) 
                .then(res => {
                    setSubmittedPoll(data);
                    setQuestion('');
                    setOptions([]);
                    setResponse('');
                })

            // try {
            // const { data } = await axios.post("http://localhost:9002/createpoll", {
            //     question,
            //     options,
            //     response,
            // });

            // setSubmittedPoll(data);

            // setQuestion('');
            // setOptions([]);
            // setResponse('');
            // } catch (error) {
            // console.log(error);
            // }
        };

        const handleOptionChange = (event, index) => {
            const newOptions = [...options];

            newOptions[index] = event.target.value;

            setOptions(newOptions);
        };

        const handleAddOption = () => {
            setOptions([...options, '']);
        };

        let chart = null;
        if (submittedPoll !== null) {
            const pollChartData = {
            labels: submittedPoll.options,
            datasets: [
                {
                label: submittedPoll.question,
                data: submittedPoll.options.map((option) =>
                    polls.reduce(
                    (acc, poll) =>
                        poll.options.includes(option)
                        ? acc + poll.responses.filter((response) => response === option).length
                        : acc,
                    0
                    )
                ),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8BC34A', '#3F51B5'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8BC34A', '#3F51B5'],
                },
            ],
            };

            chart = <Pie data={pollChartData} />;
        }


    function tConvert (time) {
        // Check correct time format and split into components
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    
        if (time.length > 1) { // If time format correct
          time = time.slice (1);  // Remove full string match value
          time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
          time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join (''); // return adjusted time or original string
    }
    

    
    let showevents
    axios.post("http://localhost:9002/GetAcceptEvent", )
    .then(res => {
        showevents = res.data.event;
        //console.log(showevents);

    })
    // console.log(showevents);

    const handleClick = (event) => {
        setShowOverlay(!show);
        setTarget(event.target);
    };
    const showForm = () => {
        $(function () {
            $('#form').show();
        });
        // hideEvent();
        // hidePass();
        // hideAlbum();
    }
    const SubmitEvent = () => {

        const { title,headName,headEmail,userID,description,date,StartTime,EndTime,venue,status } = event2

        if(title && headName && headEmail && userID && description && date && StartTime && EndTime && venue && status){
            axios.post("http://localhost:9002/GenerateEventRequest", event2)
            .then( 
                res => alert(res.data.message),
                //history.push("./login")
            )
        }else {
            alert("invalid input")
        }
        //alert("Submited")
    }
    //const handleShow = () => setShow(true);
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
            //requiredSlots.push("1:45 - 3:10");
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

    function sendDuty(event){
        var str1 = event.target.id.replace ( /[^\d.]/g, '' );
        var slot = studentSlots[str1];
        var mail = freestuEmails[str1];
        console.log(slot);
        console.log(selectedDate);
        var dict = {
            Date: selectedDate,
            Slot: slot,
            teacherEmail:RequestingTeacherEmail,
            venue:Venuee
          };

        axios.post("http://localhost:9002/sendDuty",{dict,Email: mail}) 
        .then(res => {
            // alert(res.data.message)
            // eventts = res.data.event;
            // console.log(eventts)
        })
    }
    function findFreeStudent(start,end,dateee)
    {
        console.log(start,end)
        studentSlots = [];
        freestuEmails = []
        var i=0;
        var second=[];
        var l=0;
        var prev="";
        var required = getRequiredSlots(start,end);
        var day = getDayfromDate(dateee);
        //console.log(required,day);
        // console.log(dict);
        for (var key in dict){                                  // ITERATING OVER ALL GB MEMBERS FREE SLOTS
            //console.log("hassan")                               
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
                            card.className = 'cardDuty';
                            

                            let cardBody = document.createElement('div');
                            cardBody.className = 'card-body';


                            let student = document.createElement('h3');
                            student.innerText ="Student: "+ second[i];
                            student.className = 'assign-card-title';

                            let email = document.createElement('h5');
                            email.innerText = "Email: "+ key;
                            email.className = 'assign-card-text';

                            let date = document.createElement('div');
                            date.innerText = "Free Slot: "+ dict[key][day][k];
                            date.className = 'assign-card-text';


                            let sendDutybtn = document.createElement('button');
                            sendDutybtn.innerText = "Assign duty";
                            sendDutybtn.className = 'assign-card-btn';
                            sendDutybtn.id = "id"+i;
                            sendDutybtn.class = 'mybtn';
                            sendDutybtn.addEventListener("click", sendDuty, false);

                            cardBody.appendChild(student);
                            cardBody.appendChild(email);
                            cardBody.appendChild(date);
                            cardBody.appendChild(sendDutybtn);
                            card.appendChild(cardBody);
                            i+=1;
                            let container = document.querySelector("#card-container2");
                            container.appendChild(card);

                            let modelerr = document.getElementById("Name");
                            modelerr.appendChild(card);

                            studentSlots.push(dict[key][day][k]);
                            freestuEmails.push(key);
                    }
                }
            }    
            l+=1;
        }
        //handleShow()

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
        //console.log("ASS")
        //mod.showAlert({title: "Hi", body: "Please press ok, if you like or dislike cookies."})
        //console.log(event.target.id)
        var str1 = event.target.id.replace ( /[^\d.]/g, '' );
        //console.log(str1);
        var starttime = showevents[str1].StartTime;
        var endtime = showevents[str1].EndTime;
        var date = showevents[str1].date;
        RequestingTeacherEmail = showevents[str1].teacherEmail;
        Venuee = showevents[str1].venue;
        selectedDate = date;
        handleShow();
        //console.log(starttime,endtime,date);
        fetchslots(starttime,endtime,date);
    }

    function EventDetails(event)
    {

        // hidePass();
        console.log(event.target.id)
        var str1 = event.target.id.replace( /[^\d.]/g, '' );
        EventTitle = eventts[str1].title;
        console.log(eventts);
        EventDescription = eventts[str1].description;       
        //handleShow();
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
        date.innerText = "Date: "+event.date+ "  Venue: "+ event.venue;
        date.className = 'card-color';

        let description = document.createElement('p');
        description.innerText = "Description: "+event.description;
        description.className = 'card-text';

        let startTime = document.createElement('p');
        startTime.innerText = "Start Time: "+event.StartTime;
        startTime.className = 'card-text';

        let endTime = document.createElement('p');
        endTime.innerText = "End Time: "+ event.EndTime;
        endTime.className = 'card-text';

        let status = document.createElement('p');
        status.innerText = "Status: "+ event.status;
        status.className = 'card-text';

        let teacher = document.createElement('p');
        teacher.innerText = "Teacher: "+event.teacherName;
        teacher.className = 'card-text';
        let email = document.createElement('p');
        email.innerText ="Email: "+event.teacherEmail;
        email.className = 'card-text';

        let Assigndutiesbtn = document.createElement('a');
        Assigndutiesbtn.innerText = "Assign duties";
        Assigndutiesbtn.className = 'btn';
        Assigndutiesbtn.id = "id"+i;
        Assigndutiesbtn.class = 'mybtn';
        Assigndutiesbtn.addEventListener("click", AssignDuties, false);

        ///shwoing event details to photography head
        let row2 = document.createElement('div');
        row2.className = 'row'

        let card2 = document.createElement('div');
        card2.className = 'card shadow cursor-pointer';
        
        let cardBody2 = document.createElement('div');
        cardBody2.className = 'card-body';


        let title2 = document.createElement('h5');
        title2.innerText ="Event: "+ event.title2;
        title2.className = 'card-title';
        
        let description2 = document.createElement('p');
        description2.innerText = "Description: "+ event.description2;
        description2.className = 'card-text';

        let showEventDeets = document.createElement('a');
        showEventDeets.innerText = "Event Details";
        showEventDeets.className = 'btn';
        showEventDeets.id = "id"+i;
        showEventDeets.class = 'mybtn';
        showEventDeets.addEventListener("click", EventDetails , false);

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(date);
        cardBody.appendChild(startTime);
        cardBody.appendChild(endTime);
        cardBody.appendChild(status);
        cardBody.appendChild(teacher);
        cardBody.appendChild(email);
        cardBody.appendChild(Assigndutiesbtn);
        cardBody.appendChild(showEventDeets);
        card.appendChild(cardBody);

        i+=1;
        let container = document.querySelector("#card-container");
        container.appendChild(card);
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
        // hidePass();
        // let cardbody = document.createElement('div');
        // cardbody.className = 'photo-cardbody'
        let mycard = document.createElement('div');
        mycard.className = 'photo-mycard'

        let imgBx = document.createElement('div');
        imgBx.className = 'photo-imgBx'

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
        details.className = 'photo-details'

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
        timeul.className = 'photo-size'

        let starttime = document.createElement('li');
        starttime.innerText = "Start: "+item.StartTime
        let endtime = document.createElement('li');
        endtime.innerText = "End: "+item.EndTime

        let divgroup = document.createElement('div');
        divgroup.className = 'photo-group'

        let acceptbtn = document.createElement('button');
        acceptbtn.innerText = 'Assign Duties'
        acceptbtn.id = "id"+i;
        acceptbtn.addEventListener("click",AssignDuties,false);

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

        details.appendChild(divgroup);

        imgBx.appendChild(image);
        imgBx.appendChild(imgTitleText);
        imgBx.appendChild(imgTitle);
        imgBx.appendChild(imgTeacherText);
        imgBx.appendChild(imgTeacher);
        mycard.appendChild(details);
        mycard.appendChild(imgBx);
        
        // cardbody.appendChild(mycard);
        let container = document.querySelector("#photo-card-container");
        container.appendChild(mycard);    
        i +=1    
    }
    const GetEvents = () => {
        // hidePass();
        showEvent();
        $('#photo-card-container').empty();
        const xhr = new XMLHttpRequest();
        axios.post("http://localhost:9002/GetAcceptEvent", )
        .then(res => {
            showevents = res.data.event;
            showevents.forEach(myFunction);
        })
        //eventts.forEach(myFunction);

        let container = document.querySelector("#photo-card-container");
        console.log(container.childNodes);
    }

    const myfub = () =>
    {
    var sidebar = document.querySelector("#sidebar");
    var container = document.querySelector(".my-container");
    sidebar.classList.toggle("active-nav")
    container.classList.toggle("active-cont")
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

    //function to save editable 
    const saveDataa = () =>
    {
            console.log("ibnet")
            var tableData = [];
            var rows = document.getElementById("editabletable1").rows;

            for (var i = 1; i < rows.length; i++) {
                var rowData = [];
                var cells = rows[i].cells;

                for (var j = 0; j < cells.length; j++) {
                rowData.push(cells[j].innerHTML);
                }

                tableData.push(rowData);
            }
            console.log(tableData)
            if(tableData!=null)
            {
                axios.post("http://localhost:9002/invent", {tableData}).then(res => {
                console.log(res.error);
                //alert('Table data saved successfully');

            })
        }
        else
        {
            alert("Failed to save data")
        }
    }

    const showPass = () => {
        
        $(function () {
            $('#editProfile').show();
        });
      hideEvent();
      hideAlbum();
      hideInventory();
      hideGenerated();
    }
    const hidePass = () => {
        
        $(function () {
            $('#editProfile').hide();
        });
       //hideeventdeets();
    }
    const showEvent = () => {
        
        $(function () {
            $('#showeventsid').show();
        });
        hidePass();
        hideAlbum();
        hideInventory();
        hideGenerated();
    }
    const hideEvent = () => {
        
        $(function () {
            $('#showeventsid').hide();
        });
        
    //    hideeventdeets();
    }
    const showAlbum = () => {
        $(function () {
            $('#myGallery').show();
        });
        hideEvent();
        hidePass();
        hideInventory();
        hideGenerated();

    }
    const hideAlbum = () => {
        $(function () {
            $('#myGallery').hide();
        });
    }

    const showInventory = () => {
        $(function () {
            $('#editabletable').show();
        });
        hideEvent();
        hideAlbum();
        hidePass();
        hideGenerated();

    }
    const hideInventory = () =>
    {
        $(function () {
            $('#editabletable').hide();
        });
    }
    // show hide generate event form //
    const showGenerated = () => {
        $(function () {
            $('#form2').show();
        });
        hideEvent();
        hidePass();
        hideInventory();
        hideAlbum();


    }
    const hideGenerated = () => {
        $(function () {
            $('#form2').hide();
        });
    }
    
    return (
        
        <>
        <div className="Mentorhomepage" >
            {/* SIDE BAR  */}         
            <div style={{ display: 'flex', height: '100%', overflow: 'scroll initial',position:"-webkit-sticky",position:"sticky" }}>
                <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit', fontFamily:"Montserrat",fontSize: "18px" }}>
                    Welcome!
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                    <button  onClick={showAlbum} className="sidebarbtn" >
                                <FaGripHorizontal className="sidebaricon"/> My Albums
                    </button>
                    <button  onClick={GetEvents} className="sidebarbtn">
                                <FaUserEdit className="sidebaricon" /> Assign Duties
                    </button>
                    <button  onClick={showGenerated} className="sidebarbtn">
                                <FaUserEdit className="sidebaricon" /> Generate Event
                    </button>
                    <button  onClick={showPass} className="sidebarbtn">
                                <FaUserEdit className="sidebaricon" /> Edit Profile
                    </button>
                    <button  onClick={showInventory} className="sidebarbtn">
                                <FaUserEdit className="sidebaricon" /> Inventory
                    </button>
                    <button className="sidebarbtn" id ="sleek" onClick={() => history.push("/login")}>
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
        
            <div  className="mentor-flex2">                   
                    <button  className="flex2user">
                                <FaUserAlt />
                    </button>
                    {/* Div with card */}
                    <Container className="cardBody" >
                    <div className="student-container" id="myGallery">
                        <h2>Take a look at some of our picks for you</h2>
                        <div className='student-slider'>
                            <Carousel fade className="d-block w-100 h-100">
                                <Carousel.Item className="d-block w-100 h-100" interval={5000} backgroundColor="#f8f7f2">
                                    <img
                                    className="d-block w-100 h-100"
                                    src={icit}
                                    alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <img
                                    className="d-block w-100 h-100"
                                    src={cc}
                                    alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <img
                                    className="d-block w-100 h-100"
                                    src={ccc}
                                    alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <img
                                    className="d-block w-100 h-100"
                                    src={cccc}
                                    alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={5000}>
                                    <img
                                    className="d-block w-100 h-100"
                                    src={c}
                                    alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <p>Stay tuned for more personalized content!</p>
                    </div>
                        <div className="photo-flexcard" id="showeventsid">
                            <div className= "mycards" id="photo-card-container">
                            {/* <div className="card-flex"></div> */}
                            </div>
                            <div className="dutycontainer" id="card-container2">
                                
                            </div>
                        </div>
                        
                        <div  id="editProfile">
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
                        
                        {hideInventory()}
                        {hideGenerated()}
                        {/*editable table div*/ }
                        <div id="editabletable">
                    
                        <table id="editabletable1">
                        <thead>
                        <tr>
                        <th name="column1">DATE</th>
                        <th name="column2">Time</th>
                        <th name="column3">Assigned Member</th>
                        <th name="column4">Gadget</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <td contenteditable="true"></td>
                        <td contenteditable="true"></td>
                        <td contenteditable="true"></td>
                        <td contenteditable="true"></td>
                        </tr>
                        </tbody>
                        </table>
                        <button id="saveButton" onClick={saveDataa}>Save</button>
                        </div>
                        {/*Poll*/}
                        <div id ="voting poll">
                        <h1>Create a Poll</h1>
                        <form onSubmit={handleSubmit}>
                            <label>
                            Question:
                            <input type="text" value={question} onChange={(event) => setQuestion(event.target.value)} />
                            </label>
                            <br />
                            <label>
                            Options:
                            {options.map((option, index) => (
                                <div key={index}>
                                <input
                                    type="text"
                                    value={option}
                                    onChange={(event) => handleOptionChange(event, index)}
                                />
                                </div>
                            ))}
                            </label>
                            <button type="button" onClick={handleAddOption}>
                            Add Option
                            </button>
                            <br />
                            <label>
                            Response:
                            <select value={response} onChange={(event) => setResponse(event.target.value)}>
                                <option value="">Select an option</option>
                                {options.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                                ))}
                            </select>
                            </label>
                            <br />
                            <button type="submit">Submit</button>
                        </form>
                        {submittedPoll && (
                                <div>
                                <h2>Results:</h2>
                                {options.map(option => (
                                    <div key={option.id}>
                                    <p>{option.text}: {option.votes}</p>
                                    </div>
                                ))}
                                </div>   
                            )}
                        {chart}
                        {/* <h1>Vote for your favorite option:</h1>
                            <form onSubmit={handleSubmit}>
                                {options.map(option => (
                                <div key={option.id}>
                                    <input
                                    type="radio"
                                    name="option"
                                    value={option.id}
                                    checked={selectedOption === option.id}
                                    onChange={handleOptionChange}
                                    />
                                    <label>{option.text}</label>
                                </div>
                                ))}
                                <button type="submit">Submit</button>
                            </form>
                            <div id="poll results">
                            {submitted && (
                                <div>
                                <h2>Results:</h2>
                                {options.map(option => (
                                    <div key={option.id}>
                                    <p>{option.text}: {option.votes}</p>
                                    </div>
                                ))}
                                </div>   
                            )}
                            </div>         */}
                        </div>
                        {/* GENERATE EVENT FORM STARTS HERE */}
                        <div id="form2">
                        <Row className="mt-2 text-center">
                            <h2>Generate FPS Event</h2>
                            <Col lg={5} md={6} sm={6} className="p-5 m-auto shadow-sm rounded-lg">
                                <div>
                                    <Form.Group controlId="formBasicTitle">
                                        <Form.Label>Event Title</Form.Label>
                                        <Form.Control type="text" name="title" placeholder="Enter event title" onChange={handleChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicDescription">
                                        <Form.Label>Event Description</Form.Label>
                                        <Form.Control as="textarea" rows="3" name="description" placeholder="Event Description" onChange={handleChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicDate">
                                        <Form.Label>Event Date</Form.Label>
                                        <Form.Control type="date" name="date" placeholder="Event Date" onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicTime">
                                        <Form.Label>Event Start Time</Form.Label>
                                        <Form.Control type="time" name="StartTime" placeholder="Event Start Time" onChange={handleChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicTime">
                                        <Form.Label>Event End Time</Form.Label>
                                        <Form.Control type="time" name="EndTime" placeholder="Event End Time" onChange={handleChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicVenue">
                                        <Form.Label>Event Venue</Form.Label>
                                        <Form.Control type="text" name="venue" placeholder="Event Venue" onChange={handleChange} />
                                    </Form.Group>
                                    <Row className="mt-2">
                                    {/* Removed type="submit" from here */}
                                        <button variant="success btn-block" className="sub" onClick={SubmitEvent}> 
                                            Submit Event
                                        </button>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        </div>
                        <h6 id="copyrights" className="mt-2 p-2 text-center text-secondary ">Copyright © 2022 Team Welp FAST CFD. All Rights Reserved.</h6>
                    </Container>
                    {/* Div with card end */}
            </div>

            
        </div>
            {/* MODAL START */}
            {
                show && <div id="Modal-container2">
                    <h1 className="greeting">
                        <>
                            <Modal show = {show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Available students</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <div id="Name"></div>
                                </Modal.Body>
                                <Modal.Footer>
                                
                                </Modal.Footer>
                            </Modal>
                        </>
                    </h1>
                </div>
            }
            {/* MODAL END */}
         {/* Div with card */}
            
            {/* Div with card end */}
              {/* CHECK DETAILS START */}
            {
                // <div id="photo-cardBody">
                //     <h1 className="greeting">
                //         <>
                //             <Modal show = {show} onHide={handleClose}>
                //                 <Modal.Header closeButton>
                //                 <Modal.Title>{EventTitle}</Modal.Title>
                //                 </Modal.Header>
                //                 <Modal.Body>{EventDescription}</Modal.Body>
                //                 <Modal.Footer>
                //                 <Button variant="secondary" onClick={doNothing}>
                //                     Reject
                //                 </Button>
                //                 <Button variant="primary" onClick={doNothing}>
                //                     Accept
                //                 </Button>
                //                 </Modal.Footer>
                //             </Modal>
                //         </>
                //     </h1>
                //     <div class="photo-mycard">
                //         <div class="photo-imgBx">
                //             <img
                //             src="https://i.pinimg.com/564x/3e/b2/f7/3eb2f70bbd7cbc175f2ae3ffa7a6486d.jpg"
                //             alt=""
                //             />
                //         </div>
                //         <div class="photo-details">
                //             <h3>Nike Air Max<br /><span>Men's Shoe</span></h3>
                //             <h4>Products Details</h4>
                //             <p>
                //             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                //             atque.
                //             </p>
                //             <h4>Size</h4>
                //             <ul class="photo-size">
                //             <li>36</li>
                //             <li>38</li>
                //             <li>40</li>
                //             <li>42</li>
                //             <li>44</li>
                //             </ul>
                //             <div class="photo-group">
                //             <h2>$199<small>.99</small></h2>
                //             <a href="#">Buy Now</a>
                //             </div>
                //         </div>
                //         </div>
                // </div>
            }

            </>
    );
}

export default PhotographyHomepage