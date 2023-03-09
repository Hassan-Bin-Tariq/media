import React from "react"
import "./Logisticshomepage.css"
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
const LogisticsHomepage = (user) => {
    var Name = user.setLoginUser.name
    var Email = user.setLoginUser.email
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory()
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [item, setItem]=useState([
    ]);
    var Name = user.setLoginUser.name
    var i = 0;
    //overlay
    const [showOverlay, setShowOverlay] = useState(false);
    const [target, setTarget] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const ref = useRef(null);



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
    



    const handleClick = (event) => {
        setShowOverlay(!show);
        setTarget(event.target);
    };
    const showForm = () => {
        $(function () {
            $('#form').show();
        });

    }

    function doNothing(){

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
            var rows = document.getElementById("inventorytable").rows;

            console.log(rows);
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
                alert('Table data saved successfully');

            })
        }
        else
        {
            alert("Failed to save data")
        }
    }
    function myInventory(item) {
        let mycard = document.createElement('div');
        mycard.className = 'photo-mycard2'

        let imgBx = document.createElement('div');
        imgBx.className = 'photo-imgBx'

        let imgTitle = document.createElement('h3');
        imgTitle.innerText = item.title;


        let details = document.createElement('div');
        details.className = 'photo-details'

        let purposeWritten = document.createElement('h3');
        purposeWritten.innerText = item.gadget + " assigned to " +item.am + " on " + item.date + " at " + item.time


    

        let timeul = document.createElement('ul');
        timeul.className = 'photo-size'


        let divgroup = document.createElement('div');
        divgroup.className = 'photo-group'

        
        //EVERYTHING IS APPENDED BY FOLLOWING THE HERARICHY OF LINK PROVIDED 
        details.appendChild(purposeWritten);
        mycard.appendChild(details);
        let container = document.querySelector("#photo-card-container2");
        container.appendChild(mycard);    
        i +=1    
    }
    let showinventory
    axios.post("http://localhost:9002/GetInventory", )
    .then(res => {
        showinventory = res.data.event;
        console.log(showinventory)
        //console.log(showevents);

    })

    const GetInventory = () => {
        $('#photo-card-container2').empty();
        const xhr = new XMLHttpRequest();
        axios.post("http://localhost:9002/GetInventory", )
        .then(res => {
            showinventory = res.data.showtableData;
            console.log(showinventory)
            showinventory.forEach(myInventory);
        })
        //eventts.forEach(myFunction);

        let container = document.querySelector("#photo-card-container2");
        console.log(container.childNodes);
    }
    const showPass = () => {
        
        $(function () {
            $('#editProfile').show();
        });

    hideAlbum();
    hideInventory();

    }
    const hidePass = () => {
        
        $(function () {
            $('#editProfile').hide();
        });
       //hideeventdeets();
    }

    const showAlbum = () => {
        $(function () {
            $('#myGallery').show();
        });
        hidePass();
        hideInventory();


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
        GetInventory();
        hideAlbum();
        hidePass();
        

    }
    const hideInventory = () =>
    {
        $(function () {
            $('#editabletable').hide();
        });
    }
    
    
    return (
        
        <>
        <div className="Mentorhomepage" >
            {/* SIDE BAR  */}   
            <nav class="nav__cont">
                    
                    <ul class="nav__one">
                    <button href="/" class="nav_welcome" >
                    Welcome, {Name}
                    </button>
                    <button  onClick={showAlbum} class="nav__items" >
                                <FaGripHorizontal className="sidebaricon"/> My Albums
                    </button>
            
                    <button  onClick={showPass} class="nav__items">
                                <FaUserEdit className="sidebaricon" /> Edit Profile
                    </button>
                    <button  onClick={showInventory} class="nav__items">
                                <FaUserEdit className="sidebaricon" /> Maintain Inventory
                    </button>
                    <button class="nav__items" id ="sleek" onClick={() => history.push("/login")}>
                        <AiOutlineLogout className="sidebaricon"/> Logout
                    </button>
                
                    </ul>
        </nav>      
            {/* <div style={{ display: 'flex', height: '100%', overflow: 'scroll initial',position:"-webkit-sticky",position:"sticky" }}>
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
            
                    <button  onClick={showPass} className="sidebarbtn">
                                <FaUserEdit className="sidebaricon" /> Edit Profile
                    </button>
                    <button  onClick={showInventory} className="sidebarbtn">
                                <FaUserEdit className="sidebaricon" /> Maintain Inventory
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
            </div> */}
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
                    
                        {/*editable table div*/ }
                        <div id="editabletable">
                    
                        <h4>UPADTE INVENTORY</h4>
                        <table class="table table-striped table-dark" id="inventorytable">
                        <thead>
                            <tr>
                            <th scope="col">Assigned To</th>
                            <th scope="col">Time           </th>
                            <th scope="col">Gadget        </th>
                            <th scope="col">Date           </th>   
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
                        <button  variant="success btn-block" className="subInven" onClick={saveDataa}>Save</button>
                        <h4>CURRENT STATUS</h4>
                           {/* Div with card end */}
                       {/* {show meetings} */}
                                        
                                
                <div className="photo-flexcard-meeting" id="showemeetingsid">
                            <div className= "mycards-meetin" id="photo-card-container2">
                            </div>
                            <div className="dutycontainer-meeting" id="card-container2">
                                                
                            </div>

                </div>
                        </div>
                
                
                <h6 id="copyrights" className="mt-2 p-2 text-center text-secondary ">Copyright © 2022 Team Welp FAST CFD. All Rights Reserved.</h6>
                    </Container>
                
            </div>
        
                            
            </div>

            </>
    );
}

export default LogisticsHomepage