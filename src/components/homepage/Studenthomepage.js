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
    function zoomImage(imageURL){
        swal({
            title: "Event Submitted!",
            text: "Your event for FPS was generated successfully!",
            icon: "success",
            buttons: {
                confirm : {text:'OK',className:'sweet-ok'},
            },
          });
    }
    // function showAllImages(){

    //     console.log(images)


    //         var fileID = images[i].split("/")[5];
    //         var imageURL = "https://drive.google.com/uc?export=view&id=" + fileID;
    //         // document.getElementById("myImage"+i).src = imageURL;
    //         //////////TRYING TO ADD ALBUM CARDS ///////////
    //         let albumcontainer = document.createElement('div');
    //         albumcontainer.className = 'pin_container'

    //         let albumcard = document.createElement('img');
    //         albumcard.className = 'albumcard'
    //         albumcard.src=imageURL;
    //         // albumcard.addEventListener("click", zoomImage(imageURL), false); //function for zoomed img
    //         // let albumcard2 = document.createElement('img');
    //         // albumcard2.className = 'albumcard2'
    //         albumcontainer.appendChild(albumcard);
    //         // albumcontainer.appendChild(albumcard2);
    //         let container = document.querySelector("#myGallery");
    //         container.appendChild(albumcontainer);
    //     //i+=1;
    // }
    var main=document.getElementById("main");
    var imageURL;
    var fileID;
    function showMainImage(images,i){
        
        var temp;

            fileID = images[i].split("/")[5];
            imageURL = "https://drive.google.com/uc?export=view&id=" + fileID;
            console.log(imageURL)


        document.getElementById("main").src = imageURL;
        console.log("this is image number: "+i +" "+ imageURL);
    }
    
    async function GetAllImages(){
        $('#thumbnails').empty();
        showAlbum();
        console.log("Image getter")
        await axios.post("http://localhost:9002/GetImages", {Folder:user.setLoginUser.FolderID})
        .then(
            res=> images = res.data.urlsForLogedIn
            
        )

        for (let i = 0; i < images.length; i++) {
            console.log(images)
            fileID = images[i].split("/")[5];
            imageURL = "https://drive.google.com/uc?export=view&id=" + fileID;
            // document.getElementById("myImage"+i).src = imageURL;
            //////////TRYING TO ADD ALBUM CARDS ///////////
            // let coldiv = document.createElement('img');
            // coldiv.id = 'main';
            // coldiv.src=imageURL;
            // let fluidcontainer = document.createElement('div');
            // fluidcontainer.id = 'thumbnails';
            let albumcard = document.createElement('img');
            albumcard.className = 'newimg';
            albumcard.src = imageURL;
            // albumcard.addEventListener("click",showMainImage(imageURL),false);
            albumcard.addEventListener("click", function() {showMainImage(images,i)}, true);
            // let itemdiv = document.createElement('div');
            // itemdiv.className = 'item';
            // let imgdiv = document.createElement('div');
            // imgdiv.className = 'img';
            
            ///////////TRY #02///////
            

            ///////////////////////////
            // albumcard.addEventListener("click", zoomImage(imageURL), false); //function for zoomed img
            // let albumcard2 = document.createElement('img');
            // albumcard2.className = 'albumcard2'
            // coldiv.appendChild(albumcard);
            // coldiv.appendChild(labeldiv);
            // coldiv.appendChild(albumcard);
            // fluidcontainer.appendChild(albumcard);
            
            let container = document.querySelector("#thumbnails");
            // container.appendChild(coldiv);
            container.appendChild(albumcard);
            console.log(container);
            
        }


        //images.forEach(showAllImages);
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
                    <div className="pin_container" id="myGallery">
                        {/* <h2>Here are your latest updated images</h2> */}
                        <img id="main"></img>
                        <div id="thumbnails">
                            {/* <img id="newimg" src={cc}></img>
                            <img id="newimg" src={cc}></img>
                            <img id="newimg" src={cc}></img>
                            <img id="newimg" src={cc}></img>
                            <img id="newimg" src={cc}></img>
                            <img id="newimg" src={cc}></img>
                            <img id="newimg" src={cc}></img>
                            <img id="newimg" src={cc}></img>
                            <img id="newimg" src={cc}></img>
                            <img id="newimg" src={cc}></img>
                            <img id="newimg" src={cc}></img>
                            <img id="newimg" src={cc}></img> */}
                        </div>
                        {/* <div class="gallery2" id="myGallery2">

                        </div> */}
                        {/* <section class="gallery">
                            <div class="row" id="myrow"></div>
                        </section>
                        <div class="overlay">
                            <div class="viewer">
                                <div>
                                    <div class="alt">this image is ... </div>
                                    <button class="close"><span class="material-symbols-rounded">close</span></button>
                                </div>
                                <div><img></img></div>
                            </div>
                        </div> */}
                        {/* <img className="albumcard" id="myImage0"></img>
                        <img className="albumcard" id="myImage1"></img>
                        <img className="albumcard" id="myImage2"></img> */}
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
                   
                    {/* <h6 id="copyrights" className="mt-2 p-2 text-center text-secondary ">Copyright © 2022 Team Welp FAST CFD. All Rights Reserved.</h6> */}
                    </Container>
                        
                    
            </div>
           

      
        </div>
        
        
    )
}

export default StudentHomepage