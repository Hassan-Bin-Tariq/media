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
import swal from 'sweetalert';
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
    FaWarehouse,
    FaImage

} from "react-icons/fa";
import $ from "jquery"
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import {AiOutlineLogout} from "react-icons/ai";
import { Pie } from 'react-chartjs-2';

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
            swal({
                title: "Password Mismatch!",
                text: "New & Re-entered password do not match.",
                icon: "error",
                buttons: {
                    confirm : {text:'Retry',className:'sweet-warning'},
                },
              });
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
                swal({
                    title: "Updated!",
                    text: "Inventory data saved successfully",
                    icon: "success",
                    buttons: {
                        confirm : {text:'OK',className:'sweet-ok'},
                    },
                  });

            })
        }
        else
        {
            swal({
                title: "Error!",
                text: "Failed to save data.",
                icon: "error",
                buttons: {
                    confirm : {text:'Retry',className:'sweet-warning'},
                },
              });
        }
    }
    function myInventory(item) {
        let mycard = document.createElement('div');
        mycard.className = 'photo-mycard3'

        let imgBx = document.createElement('div');
        imgBx.className = 'photo-imgBx'

        let imgTitle = document.createElement('h3');
        imgTitle.innerText = item.title;


        let details = document.createElement('div');
        details.className = 'photo-details3'

        let purposeWritten = document.createElement('h3');
        purposeWritten.innerText =  "*  "+ item.gadget + " assigned to " +item.am + " on " + item.date + " at " + item.time


    

        let timeul = document.createElement('ul');
        timeul.className = 'photo-size'


        let divgroup = document.createElement('div');
        divgroup.className = 'photo-group'

        
        //EVERYTHING IS APPENDED BY FOLLOWING THE HERARICHY OF LINK PROVIDED 
        details.appendChild(purposeWritten);
        mycard.appendChild(details);
        let container = document.querySelector("#photo-card-container3");
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
        $('#photo-card-container3').empty();
        const xhr = new XMLHttpRequest();
        axios.post("http://localhost:9002/GetInventory", )
        .then(res => {
            showinventory = res.data.showtableData;
            console.log(showinventory)
            showinventory.forEach(myInventory);
        })
        //eventts.forEach(myFunction);

        let container = document.querySelector("#photo-card-container3");
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
                                <FaImage className="sidebaricon"/> My Albums
                    </button>
            
                    <button  onClick={showPass} class="nav__items">
                                <FaUserEdit className="sidebaricon" /> Edit Profile
                    </button>
                    <button  onClick={showInventory} class="nav__items">
                                <FaWarehouse className="sidebaricon" /> Inventory
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
                    {/* <button  className="flex2user">
                                <FaUserAlt />
                    </button> */}
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
                        <div id="editPass" class="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
                        <div class="card p-4"> 
                        <div class=" image d-flex flex-column justify-content-center align-items-center"> 
                        <button id="editImageimg"> <img src={ghous} height="100" width="100" /></button> 
                        <br></br>
                        {/* <div><h2 class="edtpasheading">Edit Password</h2></div> */}
                        <div >
                            <br></br>
                            <h1 className="editpassheading">Edit Password</h1>
                        </div>
                        <br></br>
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
                        <button class="button-56" onClick={Passeditor}>Save Changes</button>
                        

                        </div>  
                        </div> 
                        </div> 
                        
                        </div>
                           
                        
                        {hideInventory()}
                    
                        {/*editable table div*/ }
                        <div id="editabletable">
                    
                        <h4 className="currentstatusinven" >UPADTE INVENTORY</h4>
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
                        <button  variant="success btn-block" className="subInven" onClick={saveDataa}>Save</button><br></br><br></br>

                        <h4 className="currentstatusinven">CURRENT STATUS</h4>
                           {/* Div with card end */}
                       {/* {show meetings} */}
                                        
                                
                <div className="photo-flexcard-inevn" id="showinvenid">
                            <div className= "mycards-inevn" id="photo-card-container3">
                            </div>
                            <div className="dutycontainer-inven" id="card-container3">
                                                
                            </div>

                </div>
                        </div>
                
                
               
                    </Container>
                    <h6 id="copyrights" className="mt-2 p-2 text-center text-secondary ">Copyright © 2022 Team Welp FAST CFD. All Rights Reserved.</h6>
                
            </div>
        
                            
            </div>

            </>
    );
}

export default LogisticsHomepage