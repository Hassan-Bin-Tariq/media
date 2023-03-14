import React from "react"
import "./Studenthomepage.css"
import { useHistory } from "react-router-dom"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
//import Container from 'react-bootstrap/Container';
import icit from '../../assets/icit.jpg'
import c from '../../assets/c.png'
import cc from '../../assets/cc.png'
import ccc from '../../assets/ccc.png'
import cccc from '../../assets/cccc.png'
import ghous from "../../assets/ghous.jpg";
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
    FaGripHorizontal,
    FaTimes,
    FaUserEdit,
    FaBookOpen,
    FaImage,
} from "react-icons/fa";
import {AiOutlineLogout} from "react-icons/ai";
import $ from "jquery"

const StudentHomepage = (user) => {
    const history = useHistory()
    var Name = user.setLoginUser.name
    console.log(Name)


 
    const showAlbum = () => {
        $(function () {
            $('#myGallery').show();
        });
        hidePass();
       
    }
    const hideAlbum = () => {
        $(function () {
            $('#myGallery').hide();
        });
    }
    const showPass = () => {
        $(function () {
            $('#editProfile').show();
        });
        hideAlbum();
    
    }
    const hidePass = () => {
        $(function () {
            $('#editProfile').hide();
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
    var images;
    function GetAllImages(){
        console.log("Image getter")
        axios.post("http://localhost:9002/GetImages", {Folder:user.setLoginUser.FolderID})
        .then(
            res=> images = res.data.urlsForLogedIn
        )
    }

    function showAllImages(){
        console.log(images)

        for (let i = 0; i < images.length; i++) {
            var fileID = images[i].split("/")[5];
            var imageURL = "https://drive.google.com/uc?export=view&id=" + fileID;
            document.getElementById("myImage"+i).src = imageURL;
        }
        
    }


    return (
        <div className="studentmain"> 
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
                 
                    <button class="nav__items" id ="sleek" onClick={() => history.push("/login")}>
                        <AiOutlineLogout className="sidebaricon"/> Logout
                    </button>
                
                    </ul>
            </nav>       
            {/* <div style={{ display: 'flex', height: '100%', overflow: 'scroll initial',position:"-webkit-sticky",position:"sticky" }}>
                <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit', fontFamily:"Montserrat",fontSize: "18px" }}>
                    Welcome! {Name}
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
                    <button  onClick={showmeeting} className="sidebarbtn">
                                <FaUserEdit className="sidebaricon" /> Schedule Meeeting
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
                    <div className="student-flex2">
                    {/* <button  className="flex2user">
                                <FaUserAlt />
                    </button> */}
                    <Container className="cardBody">
                    <div className="student-container" id="myGallery">
                        <h2>Take a look at some of our picks for you</h2>
                        <div className='student-slider'>
                            <Carousel fade className="d-block w-100 h-100">
                                <Carousel.Item className="d-block w-100 h-100" interval={5000}>
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
                    <button onClick={GetAllImages}>Get Images</button>
                    <button onClick={showAllImages}>show Images</button>
                    <img id="myImage0"></img>
                    <img id="myImage1"></img>
                    <img id="myImage2"></img>
                    {/* Div with card */}  
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
                    {/* Div with card end */}
                   
                        <h6 id="copyrights" className="mt-2 p-2 text-center text-secondary ">Copyright © 2022 Team Welp FAST CFD. All Rights Reserved.</h6>
                    </Container>
                        
                    
            </div>
           

      
        </div>
        
        
    )
}

export default StudentHomepage