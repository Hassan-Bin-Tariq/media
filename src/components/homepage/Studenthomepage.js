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
    var images;
    function showAllImages(){
        console.log(images)

        for (let i = 0; i < images.length; i++) {
            var fileID = images[i].split("/")[5];
            var imageURL = "https://drive.google.com/uc?export=view&id=" + fileID;
            document.getElementById("myImage"+i).src = imageURL;
        }
        
    }
    function GetAllImages(){
        showAlbum();
        console.log("Image getter")
        axios.post("http://localhost:9002/GetImages", {Folder:user.setLoginUser.FolderID})
        .then(
            res=> images = res.data.urlsForLogedIn
        )
        showAllImages();
    }

    


    return (
        <div className="studentmain"> 
            {/* SIDE BAR  */}  
            <nav class="nav__cont">
                    
                    <ul class="nav__one">
                    <button href="/" class="nav_welcome" >
                    Welcome, {Name}
                    </button>
                    <button  onClick={GetAllImages} class="nav__items" >
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

            {/*////////////// */} 
                    <div className="student-flex2">
                    {/* <button  className="flex2user">
                                <FaUserAlt />
                    </button> */}
                    <Container className="cardBody">
                    <div className="student-container" id="myGallery">
                        <h2>Here are your latest updating images</h2>
                        <img id="myImage0"></img>
                        <img id="myImage1"></img>
                        <img id="myImage2"></img>
                    </div>
                    {/* <button onClick={GetAllImages}>Get Images</button>
                    <button onClick={showAllImages}>show Images</button> */}
                    
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