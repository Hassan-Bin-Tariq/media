import React, { useState, useRef, useEffect } from 'react';
import "./Generalhomepage.css"
import { useHistory } from "react-router-dom"
import Table from 'react-bootstrap/Table'
import { Container, Nav, Row} from "react-bootstrap"
import {  useNavigate } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import axios from "axios"
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import logoNav from "../../assets/logo-copy.png";
//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import navlogo from "../../assets/Picture1.png";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
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
    FaUserAlt,
    FaWindowClose,
    FaImage,
    FaGripHorizontal,
    FaTimes,
    FaUserEdit,
    FaBookOpen
  
  } from "react-icons/fa";
  import {AiOutlineLogout, AiOutlineFundView, AiFillNotification} from "react-icons/ai";
  import
  {
    IoMdNotificationsOutline
  } from "react-icons/io";
//import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
//import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
//import PhotoCamera from '@material-ui/icons/PhotoCamera';
//import IconButton from '@material-ui/core/IconButton';
import $ from "jquery"

var Mondayslots = [];
var Tuesdayslots = [];
var Wednesdayslots = [];
var Thursdayslots = [];
var Fridayslots = [];
var sub = false;
   
var i = 0;

const GeneralHomepage = (user) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShowOverlay(!show);
        setTarget(event.target);
    };

    const [zip, setZip] = useState();
    const history = useHistory()
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    var Name = user.setLoginUser.name
    var Date= user.setLoginUser.day
    var Time= user.setLoginUser.time
    // console.log(Name)
    // console.log(user.setLoginUser.day);
    // console.log(user.setLoginUser.time);

    
    //usestate handler for offcanvas to show assigned duties
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //////

    //closing stuff on mouse click
    useEffect(()=>
    {
        let handler=()=>
        {

            setShowOverlay(false);

        };
        document.addEventListener("mousedown", handler);
    })
    //navigation hook for sidebar
    
    const [Mondayvalue, setValueMonday] = useState();
    const [Tuesdayvalue, setValueTuesday] = useState();
    const [Wednesdayvalue, setValueWednesday] = useState();
    const [Thursdayvalue, setValueThursday] = useState();
    const [Fridayvalue, setValueFriday] = useState();

    let i = 0;
    function slotsPrinter(slot) {

        if(i === 0)
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
            $('#mondayHolder').empty();
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

        else if(i === 1)
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
            $('#tuesdayHolder').empty();
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

        else if(i === 2)
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
            $('#wednesdayHolder').empty();
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

        else if(i === 3)
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
            $('#thursdayHolder').empty();
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

        else if(i === 4)
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
            $('#fridayHolder').empty();
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

        i+=1;
    }

    var studentSlots = [];
    var givenslots;
    //fetching slots from db
    const getallSlots = () =>
    {
        
        studentSlots = [];
        axios.post("http://localhost:9002/GetFreeSlots",{zip:zip,Email: user.setLoginUser.email})
        .then((res) => {
            const data = res.data;
            givenslots=data.generalBodies[0].slots;
            console.log(givenslots);
            givenslots.forEach(slotsPrinter);
        }).catch(() => {
            alert('errrdjd');
        })

        // let row = document.createElement('div');
        // row.className = 'row'

        // let card = document.createElement('div');
        // card.className = 'card shadow cursor-pointer';
        

        // let cardBody = document.createElement('div');
        // cardBody.className = 'card-body';


        // let student = document.createElement('h5');
        // student.innerText ="Student: " + Name;
        // student.className = 'card-title';

        // let email = document.createElement('div');
        // email.innerText = "Free Slots"+as;
        // email.className = 'card-text';

        // cardBody.appendChild(student);
        // cardBody.appendChild(email);
        // card.appendChild(cardBody);
        // i+=1;
        // let container = document.querySelector("#card-container2");
        // container.appendChild(card);
        // studentSlots.push(as);

    }
    

    const MondayhandleChange = (val) => setValueMonday(
        val,
        Mondayslots.push(val)  //SETTING THE VALUE AND PUSHING IT IN LIST
    );
    const TuesdayhandleChange = (val) => setValueTuesday(
        val,
        Tuesdayslots.push(val)
    );
    const WednesdayhandleChange = (val) => setValueWednesday(
        val,
        Wednesdayslots.push(val)
    );
    const ThursdayhandleChange = (val) => setValueThursday(
        val,
        Thursdayslots.push(val)
    );
    const FridayhandleChange = (val) => setValueFriday(
        val,
        Fridayslots.push(val)
    );

    // console.log(sub);
    if (sub === true)
    {
        
        axios.post("http://localhost:9002/addslots",{zip:zip,Email: user.setLoginUser.email}) //SENDING ALL SLOTS AND LOGGED IN USER EMAIL TO BACKEND TO UPDATE HIS SLOTS
        .then(res => {
            //alert(res.data.message)
            // eventts = res.data.event;
            // console.log(eventts)
        })
        sub = false;
    }

    //var menu_btn = document.querySelector("#menu-btn");
    //var sidebar = document.querySelector("#sidebar");
    //var container = document.querySelector(".my-container");

    const myfub = () =>
    {
    var sidebar = document.querySelector("#sidebar");
    var container = document.querySelector(".my-container");
    sidebar.classList.toggle("active-nav")
    container.classList.toggle("active-cont")
    }
    function displaySlots()
    {


    }
    const SubmitForm = () => {
        alert("Free Slots updated")
        var Mondaysize = (Object.keys(Mondayslots).length) - 1; //SINCE IT IS APPENDING IN LIST SO THE FINAL LIST WOULD BE IN LAST INDEX
        //console.log(Mondayslots[Mondaysize]); // SIZE WILL BE POINTING AT LAST INDEX WHERE OUR FINAL SLOTS ARE
        
        var Tuesdaysize = (Object.keys(Tuesdayslots).length) - 1;
        //console.log(Tuesdayslots[Tuesdaysize]); 

        var Wednesdaysize = (Object.keys(Wednesdayslots).length) - 1;
        //console.log(Wednesdayslots[Wednesdaysize]); 

        var Thursdaysize = (Object.keys(Thursdayslots).length) - 1;
        //console.log(Thursdayslots[Thursdaysize]); 

        var Fridaysize = (Object.keys(Fridayslots).length) - 1;
        //console.log(Fridayslots[Fridaysize]); 

        var allSlots = [];
        allSlots.push( Mondayslots[Mondaysize]);
        allSlots.push( Tuesdayslots[Tuesdaysize]);
        allSlots.push( Wednesdayslots[Wednesdaysize]);
        allSlots.push( Thursdayslots[Thursdaysize]);
        allSlots.push( Fridayslots[Fridaysize]);

        //console.log(user.setLoginUser.email)
        //console.log(allSlots)

        //handleChange();
        sub = true;
    
        setZip(allSlots);
    }   
    const showTable = () => {
        $(function () {
            $('#mydiv').show();
            
        });
        hideSlots();
        hidePass();
        hideCurrent();
    }
    const hideTable = () => {
        $(function () {
            $('#mydiv').hide();
        });
    }
    const showDuty = () => {
        $(function () {
            $('#duty').show();
        });
    }
    const hideDuty = () => {
    $(function () {
        $('#duty').hide();
    });
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
    function MondayDisabler()
    {
        
        var isChecked=document.getElementById("tbg-btn-7").checked;
        
        console.log(isChecked)
        if(isChecked === false)
        {
            document.getElementById("tbg-btn-7").disabled = false;

            document.getElementById("tbg-btn-1").disabled = true;
            document.getElementById("tbg-btn-2").disabled = true;
            document.getElementById("tbg-btn-3").disabled = true;
            document.getElementById("tbg-btn-4").disabled = true;
            document.getElementById("tbg-btn-5").disabled = true;
            document.getElementById("tbg-btn-6").disabled = true;
        }
        if(isChecked === true)
        {
            document.getElementById("tbg-btn-7").disabled = false;

            document.getElementById("tbg-btn-1").disabled = false;
            document.getElementById("tbg-btn-2").disabled = false;
            document.getElementById("tbg-btn-3").disabled = false;
            document.getElementById("tbg-btn-4").disabled = false;
            document.getElementById("tbg-btn-5").disabled = false;
            document.getElementById("tbg-btn-6").disabled = false;
        }

       
    }
    function TuesdayDisabler()
    {
        
        var isChecked=document.getElementById("tbg-btn-14").checked;
        
        console.log(isChecked)
        if(isChecked === false)
        {
            document.getElementById("tbg-btn-14").disabled = false;

            document.getElementById("tbg-btn-8").disabled = true;
            document.getElementById("tbg-btn-9").disabled = true;
            document.getElementById("tbg-btn-10").disabled = true;
            document.getElementById("tbg-btn-11").disabled = true;
            document.getElementById("tbg-btn-12").disabled = true;
            document.getElementById("tbg-btn-13").disabled = true;
        }
        if(isChecked === true)
        {
            document.getElementById("tbg-btn-14").disabled = false;

            document.getElementById("tbg-btn-8").disabled = false;
            document.getElementById("tbg-btn-9").disabled = false;
            document.getElementById("tbg-btn-10").disabled = false;
            document.getElementById("tbg-btn-11").disabled = false;
            document.getElementById("tbg-btn-12").disabled = false;
            document.getElementById("tbg-btn-13").disabled = false;
        }


    }
    function WednesdayDisabler()
    {
        
        var isChecked=document.getElementById("tbg-btn-21").checked;
        
        console.log(isChecked)
        if(isChecked === false)
        {
            document.getElementById("tbg-btn-21").disabled = false;

            document.getElementById("tbg-btn-15").disabled = true;
            document.getElementById("tbg-btn-16").disabled = true;
            document.getElementById("tbg-btn-17").disabled = true;
            document.getElementById("tbg-btn-18").disabled = true;
            document.getElementById("tbg-btn-19").disabled = true;
            document.getElementById("tbg-btn-20").disabled = true;
        }
        if(isChecked === true)
        {
            document.getElementById("tbg-btn-21").disabled = false;

            document.getElementById("tbg-btn-15").disabled = false;
            document.getElementById("tbg-btn-16").disabled = false;
            document.getElementById("tbg-btn-17").disabled = false;
            document.getElementById("tbg-btn-18").disabled = false;
            document.getElementById("tbg-btn-19").disabled = false;
            document.getElementById("tbg-btn-20").disabled = false;
        }


    }
    function ThursdayDisabler()
    {
        
        var isChecked=document.getElementById("tbg-btn-28").checked;
        
        console.log(isChecked)
        if(isChecked === false)
        {
            document.getElementById("tbg-btn-28").disabled = false;

            document.getElementById("tbg-btn-22").disabled = true;
            document.getElementById("tbg-btn-23").disabled = true;
            document.getElementById("tbg-btn-24").disabled = true;
            document.getElementById("tbg-btn-25").disabled = true;
            document.getElementById("tbg-btn-26").disabled = true;
            document.getElementById("tbg-btn-27").disabled = true;
        }
        if(isChecked === true)
        {
            document.getElementById("tbg-btn-28").disabled = false;

            document.getElementById("tbg-btn-22").disabled = false;
            document.getElementById("tbg-btn-23").disabled = false;
            document.getElementById("tbg-btn-24").disabled = false;
            document.getElementById("tbg-btn-25").disabled = false;
            document.getElementById("tbg-btn-26").disabled = false;
            document.getElementById("tbg-btn-27").disabled = false;
        }


    }
    
    function FridayDisabler()
    {
        
        var isChecked=document.getElementById("tbg-btn-35").checked;
        
        console.log(isChecked)
        if(isChecked === false)
        {
            document.getElementById("tbg-btn-35").disabled = false;

            document.getElementById("tbg-btn-29").disabled = true;
            document.getElementById("tbg-btn-30").disabled = true;
            document.getElementById("tbg-btn-31").disabled = true;
            document.getElementById("tbg-btn-32").disabled = true;
            document.getElementById("tbg-btn-33").disabled = true;
            document.getElementById("tbg-btn-34").disabled = true;
        }
        if(isChecked === true)
        {
            document.getElementById("tbg-btn-35").disabled = false;

            document.getElementById("tbg-btn-29").disabled = false;
            document.getElementById("tbg-btn-30").disabled = false;
            document.getElementById("tbg-btn-31").disabled = false;
            document.getElementById("tbg-btn-32").disabled = false;
            document.getElementById("tbg-btn-33").disabled = false;
            document.getElementById("tbg-btn-34").disabled = false;
        }


    }
    const showPass = () => {
        const targetDiv = document.getElementById("editProfile");
        // if (targetDiv.style.display !== "none") {
        //     targetDiv.style.display = "none";
        //   } else {
            targetDiv.style.display = "block";
          //}
          //hideDuty();
          hideSlots();
          hideTable();
          hideCurrent();
          hideAlbum();
    }
    const hidePass = () => {
        $(function () {
            $('#editProfile').hide();
        });
        showSlots();
    }
    const showSlots = () => {
        $(function () {
            $('#name').show();
        });
    }
    const hideSlots= () => {
    $(function () {
        $('#name').hide();
    });
    }
    const showCurrent = () => {
        $(function () {
            $('#currentdiv').show();
            getallSlots();
        });
        
        hideSlots();
        hidePass();
        hideTable();
        hideAlbum();
    }
    const hideCurrent= () => {
    $(function () {
        $('#currentdiv').hide();
    });
    }
   
    const showAlbum = () => {
        $(function () {
            $('#myGallery').show();
        });
        hidePass();
        hideCurrent();
        hideDuty();
        hideSlots();
    }
    const hideAlbum = () => {
        $(function () {
            $('#myGallery').hide();
        });
    }

    function UploadToDrive(files){
        console.log(files)
        axios.post("http://localhost:9002/UploadToDrive",{UploadData:files}) // JIN KA FACE MATCH HO GYA UN KO DRIVE PY UPLOAD K 
        .then((res) => {

        }).catch(() => {
            alert('error in Uploading data');
        })
    }

    function PythonForImages(){
        axios.post("http://localhost:9002/DriveDataGetter") //PECHEY DRIVE SE SAREY USER JO SIGNED UP HN UN KA DATA LIA
        .then((res) => {
            const dataaa = res.data.Data;
            console.log(dataaa);

            axios.post(`http://localhost:5000/UploadImages`,dataaa) // SIGNED UP USERS KA DATA PYTHON MA BHEJ DIA FR K LIA
            .then(response => 
                UploadToDrive(response.data)
                //console.log(response.data)
                )
            .catch(error => console.error(error))
        }).catch(() => {
            alert('error in fetching data');
        })
    }
    let showevents
    axios.post("http://localhost:9002/GetGeneratedEvent", )
    .then(res => {
        showevents = res.data.event;
        //console.log(showevents);

    })
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
        imgTeacher.innerText = item.headName;

        // let image = document.createElement('img');
        // // image.src = "https://i.pinimg.com/564x/3e/b2/f7/3eb2f70bbd7cbc175f2ae3ffa7a6486d.jpg"
        // // image.src = "C://Users/ACS/Desktop/media/src/assets/ghous.jpg"
        // image.src=ghous

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
        // acceptbtn.addEventListener("click",AssignDuties,false);

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

        // imgBx.appendChild(image);
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
    const showEvent = () => {
        
        $(function () {
            $('#showeventsid').show();
        });
    //    hidePass();
    //    hideAlbum();
    //    hideInventory();
    //    hideGenerated();
    }

    const GetEvents = () => {
        // hidePass();
        showEvent();
        $('#photo-card-container').empty();
        const xhr = new XMLHttpRequest();
        axios.post("http://localhost:9002/GetGeneratedEvent", )
        .then(res => {
            showevents = res.data.event;
            showevents.forEach(myFunction);
        })
        //eventts.forEach(myFunction);

        let container = document.querySelector("#photo-card-container");
        console.log(container.childNodes);
       
    }


return (
        
    <>
    <div className="Mentorhomepage">
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
                    <button  onClick={showAlbum} className="sidebarbtn">
                        <FaImage className="sidebaricon"/> My Albums
                    </button>
                    <button  className="sidebarbtn" onClick={showCurrent}>
                        <FaBookOpen className="sidebaricon"/> Current Slots
                    </button>
                    
                    <button  className="sidebarbtn" onClick={showTable}>
                            <FaGripHorizontal className="sidebaricon"/> Update Slots
                    </button>
                    <button  className="sidebarbtn" onClick={GetEvents}>
                            <FaGripHorizontal className="sidebaricon"/> FPS Events
                    </button>
                    <button  onClick={showPass} className="sidebarbtn">
                        <FaUserEdit className="sidebaricon"/>       Edit Profile
                    </button>
                    <button className="sidebarbtn" id ="sleek" onClick={() => history.push("/login")}>
                        <AiOutlineLogout className="sidebaricon"/>   Logout</button>
                   
                
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
        {
            /**albums div */
        }
         {/*////////////// */} 
            <div className="mentor-flex2">
                
                    
                <button  className="flex2user">
                            <FaUserAlt />
                </button>
                <Container className='cardBody'>
                        
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
                    <div className="currentslotdiv" id="currentdiv">
                        <div id="name">
                            <h3 className="zx">Here's your current available time slots </h3>
                        </div>
                        {getallSlots()};
                        {/* Holders for current slots */}
                        <div class = "dayDiv" id='mondayHolder'></div>
                        <div class = "dayDiv" id='tuesdayHolder'></div>
                        <div class = "dayDiv" id='wednesdayHolder'></div>
                        <div class = "dayDiv" id='thursdayHolder'></div>
                        <div class = "dayDiv" id='fridayHolder'></div>

                        <button onClick={PythonForImages}>Upload Images</button>
                        {/* end of holders */}
                    </div>
                    <div id="mydiv" class="hidden">
                                <Row className="sm-3 text-center">
                                        <h2 className='slots-h2'>Select desired available slots of the Week</h2>
                                        <Table className='duty-table'>
                                    
                                            <tbody>
                                                <div className="tab">
                                            <tr>
                                            
                                            <td>Monday</td>

                                            <ToggleButtonGroup className="togo-group" type="checkbox" value={Mondayvalue} onChange={MondayhandleChange}>
                                                <ToggleButton className="togo" id="tbg-btn-1" value={1} color="purple">
                                                    8:45 - 10:10
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-2" value={2}>
                                                    10:15 - 11:40
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-3" value={3}>
                                                    11:45 - 1:10
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-4" value={4}>
                                                    1:15 - 1:40
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-5" value={5}>
                                                    1:45 - 3:10
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-6" value={6}>
                                                    3:15 - 4:45
                                                </ToggleButton>
                                                <ToggleButton onClick={MondayDisabler} className="none" variant="danger" id="tbg-btn-7" value={7}>
                                                    None
                                                </ToggleButton>
                                            </ToggleButtonGroup>
                                        </tr>
                                        <tr>
                                            <td>Tuesday</td>
                                            <ToggleButtonGroup type="checkbox" value={Tuesdayvalue} onChange={TuesdayhandleChange}>
                                                <ToggleButton className="togo" id="tbg-btn-8" value={1}>
                                                    8:45 - 10:10
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-9" value={2}>
                                                    10:15 - 11:40
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-10" value={3}>
                                                    11:45 - 1:10
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-11" value={4}>
                                                    1:15 - 1:40
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-12" value={5}>
                                                    1:45 - 3:10
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-13" value={6}>
                                                    3:15 - 4:45
                                                </ToggleButton>
                                                <ToggleButton  onClick={TuesdayDisabler} className="none" variant="danger" id="tbg-btn-14" value={7}>
                                                    None
                                                </ToggleButton>
                                            </ToggleButtonGroup>
                                        </tr>
                                        <tr>
                                            <td>Wednesday</td>
                                            <ToggleButtonGroup type="checkbox" value={Wednesdayvalue} onChange={WednesdayhandleChange}>
                                                <ToggleButton className="togo" id="tbg-btn-15" value={1}>
                                                    8:45 - 10:10
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-16" value={2}>
                                                    10:15 - 11:40
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-17" value={3}>
                                                    11:45 - 1:10
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-18" value={4}>
                                                    1:15 - 1:40
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-19" value={5}>
                                                    1:45 - 3:10
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-20" value={6}>
                                                    3:15 - 4:45
                                                </ToggleButton>
                                                <ToggleButton onClick={WednesdayDisabler}className="none" variant="danger" id="tbg-btn-21" value={7}>
                                                    None
                                                </ToggleButton>
                                            </ToggleButtonGroup>
                                        </tr>
                                        <tr>
                                            <td>Thursday</td>
                                            <ToggleButtonGroup type="checkbox" value={Thursdayvalue} onChange={ThursdayhandleChange}>
                                                <ToggleButton className="togo" id="tbg-btn-22" value={1}>
                                                    8:45 - 10:10
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-23" value={2}>
                                                    10:15 - 11:40
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-24" value={3}>
                                                    11:45 - 1:10
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-25" value={4}>
                                                    1:15 - 1:40
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-26" value={5}>
                                                    1:45 - 3:10
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-27" value={6}>
                                                    3:15 - 4:45
                                                </ToggleButton>
                                                <ToggleButton onClick={ThursdayDisabler} className="none" variant="danger" id="tbg-btn-28" value={7}>
                                                    None
                                                </ToggleButton>
                                            </ToggleButtonGroup>
                                        </tr>
                                        <tr>
                                            <td>Friday</td>
                                            <ToggleButtonGroup type="checkbox" value={Fridayvalue} onChange={FridayhandleChange}>
                                                <ToggleButton variant="outline-info light"className="togo" id="tbg-btn-29" value={1}>
                                                    8:45 - 10:10
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-30" value={2}>
                                                    10:15 - 11:40
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-31" value={3}>
                                                    11:45 - 1:10
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-32" value={4}>
                                                    1:15 - 1:40
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-33" value={5}>
                                                    1:45 - 3:10
                                                </ToggleButton>
                                                <ToggleButton className="togo" id="tbg-btn-34" value={6}>
                                                    3:15 - 4:45
                                                </ToggleButton>
                                                <ToggleButton onClick={FridayDisabler} className="none" variant="danger" id="tbg-btn-35" value={7}>
                                                    None
                                                </ToggleButton>
                                            </ToggleButtonGroup>
                                            
                                        </tr>
                                                </div>
                                            </tbody>
                                </Table>
                                </Row>
                            <centre>
                                <button className="submit-form" variant="success btn-block" onClick={SubmitForm}>
                                    Submit Form
                                </button>
                            </centre>

                    </div>
                    <div id="editProfile">
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
                    {/* SHOW GENERATED EVENTS STARTS HERE */}
                    <div className="photo-flexcard" id="showeventsid">
                            <div className= "mycards" id="photo-card-container">
                            {/* <div className="card-flex"></div> */}
                            </div>
                            <div className="dutycontainer" id="card-container2">
                                
                            </div>
                        </div>
                        
                
                        
                            {/* <div id="duty">
                                    <h3 className="freeslots">You are currently assigned coverage for: <br></br>
                                                        
                                    </h3>
                                    <br/>
                                    <button  className="notifclose" variant="success btn-block" onClick={hideDuty}>
                                        OK
                                    </button>
                            </div> */}
                        
                </Container>
            </div>
        
        


        
    </div></>
);
}
export default GeneralHomepage