import React, { useState } from "react"
import "./login.css"
import $ from "jquery"  
import axios from "axios"
import { useHistory } from "react-router-dom"
import emailjs from "emailjs-com";
//import Picture1 from './assets/Picture1.png'
import logo from "../../assets/Picture1.png";
import loginpic from "../../assets/login.svg";
import registerpic from "../../assets/register.svg";

import {
    FaLinkedin,
    FaGoogle,
    FaFacebook,
    FaTwitter,
    FaHome,
    FaGoogleDrive,
} from "react-icons/fa";
    var namebool=false;
    var emailbool=false;
    var passbool=false;
    var repassbool=false;
    //checking git

const Login = ({ setLoginUser }) => {
    

    const history = useHistory()
    //asd
    
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        setLoginUser(null);
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                //alert(res.data.message)
                setLoginUser(res.data.user)
                if(res.data.message === "Teacher")
                {
                    history.push("/teacherPortal")
                }
                else if (res.data.message === "Mentor")
                {
                    history.push("/mentorPortal")
                }
                else if (res.data.message === "Photography Head")
                {
                    history.push("/photographyPortal")
                }
                else if(res.data.message === "GeneralBody")
                {
                    history.push("/GeneralPortal")
                }
                else if(res.data.message === "Student"){
                    history.push("/studentPortal")
                }
                else if (res.data.message === "Logistics Head")
                {
                    history.push("/logisticsPortal")
                }
                else if (res.data.message === "General Secretary")
                {
                    history.push("/gsPortal")
                }
                else{
                    document.getElementById("passspan").innerHTML="Wrong password";
                    document.querySelector('.passspan').style.color="red";
                }
            })
    }
    
    const sign_upchanger=()=>{

        const container = document.querySelector(".login-container");
        container.classList.add("sign_up_mode");
    };

    const sign_inchanger=()=>{

        const container = document.querySelector(".login-container");
        container.classList.remove("sign_up_mode");
    };
    //REGISTER DECLARATIONS//

    const [userReg, setUserReg] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: "",
        slots: [],
        Duty: [],
        FolderID: "",
        PhoneNumber: ""
    })

    const handleRegChange = e => {
        
        const { name, value } = e.target
        console.log(name,value);
        var na=document.getElementById("names").value;
        var em=document.getElementById("emails").value;
        var pas=document.getElementById("passwords").value;
        var re=document.getElementById("repasswords").value;
        /////pickimg out divs to color red or green/////
        var nameinput = document.getElementById('namebox');
        var emailinput = document.getElementById('emailbox');
        var passinput = document.getElementById('passbox');
        var repassinput = document.getElementById('repassbox');
        /////////////////////////////////////////////

        // document.querySelector('.inputBox').style.border = "red";
        ///// NAME VALIDATIONS ////////
        var NumInName = na.replace ( /[^\d.]/g, '' );
        console.log(NumInName)
        if(na==="")
        {
            document.getElementById("namespan").innerHTML="* please fill name field";
            console.log("name less than 3")
            document.querySelector('.namespan').style.color="red";
            nameinput.style.backgroundColor = '#FFC3C3';
            namebool=false;
        }
        else if(na.includes(" "))
        {
            document.getElementById("namespan").innerHTML="* spaces not allowed";
            console.log("name less than 3")
            document.querySelector('.namespan').style.color="red";
            nameinput.style.backgroundColor = '#FFC3C3';
            namebool=false;
        }
        else if(na.includes(".")||na.includes(",")||na.includes("*")||na.includes("/")||na.includes("$")||na.includes("@")||na.includes("#")||na.includes("%")||na.includes("^")||na.includes("&")||na.includes("(")||na.includes(")")||na.includes("{")||na.includes("}"))
        {
            document.getElementById("namespan").innerHTML="* special characters not allowed";
            console.log("name less than 3")
            document.querySelector('.namespan').style.color="red";
            nameinput.style.backgroundColor = '#FFC3C3';
            namebool=false;
        }
        else if(!isNaN(na) || NumInName != "" ) //abc //123 //abc123
        {
            var str1 = na.replace ( /[^\d.]/g, '' );
            console.log(typeof str1);
            document.getElementById("namespan").innerHTML="* numeric characters not allowed";
            console.log("numeric not allowed")
            document.querySelector('.namespan').style.color="red";
            nameinput.style.backgroundColor = '#FFC3C3';
            namebool=false;
        }
        else if(na.length <3)
        {
            document.getElementById("namespan").innerHTML="* name less than 3";
            console.log("name less than 3")
            document.querySelector('.namespan').style.color="red";
            nameinput.style.backgroundColor = '#FFC3C3';
            namebool=false;
        }
        else if(na.length>=3 && !na.includes(" ") && isNaN(na) && na!="" )
        {
            document.getElementById("namespan").innerHTML="Name Accepted";
            document.querySelector('.namespan').style.color="green";
            nameinput.style.backgroundColor = '#CCD6A6';
            namebool=true;
            console.log("name:"+namebool);
        }
        /////EMAIL VALIDATIONS////
        // if(!em.startsWith("f") )
        // {
        //     document.getElementById("emailspan").innerHTML="* email starts with f";
        //     document.querySelector('.emailspan').style.color="red";
        // }
        if(!em.endsWith("@nu.edu.pk") )
        {
            document.getElementById("emailspan").innerHTML="* email must be nu.edu.pk";
            document.querySelector('.emailspan').style.color="red";
            emailinput.style.backgroundColor = '#FFC3C3';
            emailbool=false;
        }
        else if(em.includes(" "))
        {
            document.getElementById("emailspan").innerHTML="* spaces not allowed";
            document.querySelector('.emailspan').style.color="red";
            emailinput.style.backgroundColor = '#FFC3C3';
            emailbool=false;
        }
        // if(em.length!=17 )
        // {
        //     document.getElementById("emailspan").innerHTML="* incorrect email length";
        //     document.querySelector('.emailspan').style.color="red";
        // }
        // else if(!em.includes("@nu.edu.pk"))
        // {
        //     document.getElementById("emailspan").innerHTML="* incorrect email";
        //     console.log("incorrect email")
        //     document.querySelector('.emailspan').style.color="red";
        // }
        else if(em.endsWith("@nu.edu.pk") && !em.includes(" "))
        {
            document.getElementById("emailspan").innerHTML="Email Accepted";
            document.querySelector('.emailspan').style.color="green";
            emailinput.style.backgroundColor = '#CCD6A6';
            emailbool=true;
            console.log("email:"+emailbool);
        }
        /////PASSWORD VALIDATIONS////
        if(pas.includes(" "))
        {
            document.getElementById("passwordspan").innerHTML="* spaces not allowed";
            document.querySelector('.passwordspan').style.color="red";
            console.log("pass less than 8")
            passinput.style.backgroundColor = '#FFC3C3';
            passbool=false;
        }
        else if(pas.length <8)
        {
            document.getElementById("passwordspan").innerHTML="* length must be at least 8 characters";
            document.querySelector('.passwordspan').style.color="red";
            console.log("pass less than 8")
            passinput.style.backgroundColor = '#FFC3C3';
            passbool=false;
        }
        else if(pas.length >20)
        {
            document.getElementById("passwordspan").innerHTML="* too long";
            document.querySelector('.passwordspan').style.color="red";
            console.log("pass less than 8")
            passinput.style.backgroundColor = '#FFC3C3';
            passbool=false;
        }
        
        else if(pas.length>=8 && pas.length<=20 && !pas.includes(" "))
        {
            document.getElementById("passwordspan").innerHTML="Password accepted";
            document.querySelector('.passwordspan').style.color="green";
            console.log("pass less than 8")
            passinput.style.backgroundColor = '#CCD6A6';
            passbool=true;
            console.log("pass:"+passbool);
        }
        /////RE-ENTER PASSWORD VALIDATION
        if(re!=pas)
        {
            document.getElementById("repasswordspan").innerHTML="passwords do not match";
            document.querySelector('.repasswordspan').style.color="red";
            repassinput.style.backgroundColor = '#FFC3C3';
            repassbool=false;
        }
        else if(re==pas)
        {
            document.getElementById("repasswordspan").innerHTML="Passwords matched!";
            document.querySelector('.repasswordspan').style.color="green";
            repassinput.style.backgroundColor = '#CCD6A6';
            repassbool=true;
            console.log("re:"+repassbool);
        }

        // NAME VALIDATIONS //
        // if(name==="name" && !value.includes(" ") && !value.includes(".") && !value.includes("/") && value.length>=3 && isNaN(value) )
        // {
        //     console.log("so far so good!")
            
        // }
        // else if(name==="name" && /[^a-zA-Z0-9\-\/]/.test(value) || !isNaN(value))
        // {
        //     console.log("characters not allowed,hun.")
        // }
        // else if(name==="name" && value.includes(" ") || value.includes(".") || value.includes("/") || value.length<3)
        // {
        //     console.log("space no good")
        // }
        // // PASSWORD VALIDATIONS //
        // else if(name==="password" && !value.includes(" ") && !value.includes(".") && !value.includes("/") && value.length>=8 )
        // {
        //     console.log("password good!")
            
        // }
        // else if(name==="password" && value.includes(" ") || value.includes(".") || value.includes("/") || value.length<8 )
        // {
        //     console.log("pass must be at least 8 digits")
        // }
        // EMAIL VALIDATIONS //
        setUserReg({
            ...userReg,
            [name]: value
        })
        
    }

    const sendEmail = (name, email) => {

        emailjs.send("service_xsod6da", "template_01r4u37", {
            to_name: name,
            message: "we're excited to have you with us and know that youll love "+
            "our amazing features, notifications, and great"+
            "content. MediaScape is all about brining ease to its users."+
            +"If you’re here, you’re at the right place on the right time."+
            "We hope you enjoy your journey with MediaScape",
            to_email: email,
            reply_to: "mediascape0@gmail.com",
        }, "nv_Jq-1YJR57e3z-E");
    }

    const register = () => {
        const { name, email, password, reEnterPassword, Duty,FolderID,PhoneNumber } = userReg
        console.log("checking my bools"+namebool+emailbool+passbool+repassbool)
        if (namebool===true && emailbool===true && passbool===true && repassbool===true) {
            axios.post("http://localhost:9002/register", userReg)
                .then(
                    res => alert(res.data.message),
                    //sendEmail(name,email),
                    // history.push("./login")
                    alert("User Registered Successfully!")
                )
        } else {
            alert("Invalid Input! Try Again.")
        }
    }
    
    function PythonTrigger(){
        console.log(userReg.email)
        axios.post(`http://localhost:5000/FaceDetect`,{Email:userReg.email})//SEDNING REQUEST TO PYTHON FILE
            .then(function (response) {
                return response.data;
            }).then(function (json) {
                var base64 = json.base
                var removeBase = base64.slice(2)
                removeBase = removeBase.slice(0, -1);
                //console.log(removeBase)
                //console.log(json.path)
                var output = document.getElementById('output');
                output.src = "data:image/jpeg;base64,"+removeBase;
                //console.log(output.src)


                axios.post("http://localhost:9002/FolderMaker", {UserEmail: userReg.email,ImagePath:json.path})
                .then(
                    res => userReg.FolderID = res.data.Folder,
                )
            });
    }

    return (
                
        <div class="login-container">
        <div class="form_container">
            <div class="signin_signup">
                <div action="#" class="sign_in_form">
                    <div className="loginhomediv">
                        <a href="/try" class="home_icon_signup"><FaHome />
                        <i class='bx bxl-linkedin'></i>
                        </a>
                    {/* <div class="inputImage">
                        <label >Upload Picture</label>
                        <br></br>
                        <input type="file" accept="image/*" onChange={loadFile} />
                        <img id = "output"/>
                    </div>*/}
                    
                    </div> 
                    <h2 class="title">Sign In</h2>

                    <div class="inputBox">
                                <i class='bx bxs-user'></i>
                                <input  className="emailtak" type="text" placeholder="Email" name="email" value={user.email} onChange={handleChange} />
                            </div>

                    <div class="inputBox">
                                <i class='bx bxs-user'></i>
                                <input className="passcode" type="password" placeholder="Password" name="password" value={user.password}  onChange={handleChange}/>
                                <span class="passspan"id="passspan" style={{color: "red", fontSize: "12px"}}></span><br></br>
                    </div>

                    <btn  type="submit" value="Login" class="newbtn2" onClick={login}>Login</btn>
                    <p class="social_text">Or Sign in with social platforms</p>

                    <div class="social_media">
                        <a href="#" class="social_icon" ><FaFacebook  /><i class='bx bxl-facebook'></i></a>

                        <a href="#" class="social_icon"><FaGoogle /><i class='bx bxl-google'></i></a>

                        <a href="#" class="social_icon"><FaTwitter /><i class='bx bxl-twitter'></i></a>

                        <a href="#" class="social_icon"><FaLinkedin  /><i class='bx bxl-linkedin'></i></a>


                    </div>

                </div>
                <div action="#" class="sign_up_form">
                    {/* UPLOAD IMAGE DIV COMMENTED FOR NOW */}
                    <div className="startdiv">
                        <a href="/try" class="home_icon_signup"><FaHome />
                        <i class='bx bxl-linkedin'></i>
                        </a>
                        <div class="inputImage">
                            <label className="inputLabel">Upload profile picture</label>
                            {/* <br></br> */}
                            
                            {/* <input type="file" accept="image/*" onChange={loadFile} /> */}
                            
                            <img  id = "output"/>
                            <button onClick={PythonTrigger} className="btnclickme">Upload</button>
                                {/* <label >Upload Picture</label>
                            <br></br>
                            <input type="file" accept="image/*" onChange={loadFile} />
                            <img id = "output"/> */}
                        </div>
                        <h2 class="title_up">Sign Up</h2>
                    </div> 
                    
                    
                    <div id="namebox" class="inputBox_up" style={{border : "3px solid #555"}}>
                        {/* <i class='bx bxs-user'></i> */}
                        <input class="nameinput" type="text" name="name" id="names" value={userReg.name} placeholder="Username" onChange={handleRegChange} />
                        <span class="namespan"id="namespan" style={{color: "red", fontSize: "12px",marginTop:"50px"}}></span><br></br>
                    </div>

                    <div id="emailbox" class="inputBox_up" style={{border : "3px solid #555"}}>
                        {/* <i class='bx bxs-user'></i> */}
                        <input class="nameinput" type="email" name="email" id="emails" value={userReg.email} placeholder="Email" onChange={handleRegChange} />
                        <span class="emailspan" id="emailspan" style={{color: "red", fontSize: "12px",marginTop:"50px"}}></span><br></br>
                    </div>

                    <div id="passbox" class="inputBox_up" style={{border : "3px solid #555"}}>
                        {/* <i class='bx bxs-user'></i> */}
                        <input class="nameinput" type="password" name="password" id="passwords" value={userReg.password} placeholder="Password" onChange={handleRegChange} />
                        <span class="passwordspan" id="passwordspan" style={{color: "red", fontSize: "12px",marginTop:"50px"}}></span><br></br>
                    </div>
                    <div id="repassbox" class="inputBox_up" style={{border : "3px solid #555"}}>
                        {/* <i class='bx bxs-user'></i> */}
                        <input class="nameinput" type="password" id="repasswords" name="reEnterPassword" value={userReg.reEnterPassword} placeholder="Re-enter Password" onChange={handleRegChange} />
                        <span class="repasswordspan" id="repasswordspan" style={{color: "red", fontSize: "12px",marginTop:"50px"}}></span><br></br>
                    </div>
                    <div id="phone" class="inputBox_up" style={{border : "3px solid #555"}}>
                        {/* <i class='bx bxs-user'></i> */}
                        <input class="nameinput" type="phone" id="phones" name="PhoneNumber" value={userReg.PhoneNumber} placeholder="Phone Number" onChange={handleRegChange} />
                        <span class="phoneNumber" id="phoneNumber" style={{color: "red", fontSize: "12px",marginTop:"50px"}}></span><br></br>
                    </div>

                                       

                    <input type="submit" value="Sign up" class="signupbtn" onClick={register} />
                    {/* <p class="social_text">Or Sign up with social platforms</p>

                    <div class="social_media">
                    <a href="#" class="social_icon" ><FaFacebook /><i class='bx bxl-facebook'></i></a>

                    <a href="#" class="social_icon"><FaGoogle  /><i class='bx bxl-google'></i></a>

                    <a href="#" class="social_icon"><FaTwitter /><i class='bx bxl-twitter'></i></a>

                    <a href="#" class="social_icon"><FaLinkedin /><i class='bx bxl-linkedin'></i></a>


                    </div>  */}
                </div>
            </div>
        </div>
        <div class="panel_container">
            <div class="panel left_panel">
                <div class="content">
                    <h3>New Here?</h3>
                    <p>
                        Join our community Today and enjoy high quality content, 
                        with just a click!
                    </p>
                    <button onClick={sign_upchanger} class="newbtn" id="sign_up_btn">
                        Sign up
                    </button>
                </div>
                <img src={registerpic} class="image" alt="" />
            </div>
            <div class="panel right_panel">
                <div class="content">
                    <h3>One of us ?</h3>
                    <p>
                        Log In to check the latest updates!
                    </p>
                    <button onClick={sign_inchanger} class="newbtn" id="sign_in_btn">
                        Sign in
                    </button>
                </div>
                <img src={loginpic} class="image" alt="" />
            </div>
        </div>
    </div>
    )
}

export default Login
            {/* ORIGINAL LOGIN */}
            {/* <div>
                <img src={logo}/>
                <br></br>
                <h3>Log in</h3>   
            </div>
            <br></br>


                <div className="email">
                        <label id="mail">Email</label>
                        <br></br>
                        
                        <input className="emailtak" type="text" name="email" value={user.email} onChange={handleChange}></input>
                    </div>
            <br></br>
            
                    <div className="pass">
                        <label >Password</label>
                        <br></br>
                        
                        <input className="passcode" type="password" name="password" value={user.password}  onChange={handleChange}></input>
                    </div>    
                    <br></br>

                <div>
                    <button className="btnReg" onClick={login}>Login</button>
                </div> 
                <div><h6>OR</h6></div>
                <div><button className="btnlog" onClick={() => history.push("/register")}>Register</button></div>
                <br></br>
                <div>

                <h6 className="mt-2 p-2 text-center text-secondary ">Copyright © 2022 Team Welp FAST CFD. All Rights Reserved.</h6>
                </div> */}
    
