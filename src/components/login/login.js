import React, { useState } from "react"
import "./login.css"
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
} from "react-icons/fa";
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
        day: "None",
        time: "None",
    })

    const handleRegChange = e => {
        const { name, value } = e.target
        setUserReg({
            ...userReg,
            [name]: value
        })
    }

    const sendEmail = (name, email) => {

        emailjs.send("service_xsod6da", "template_01r4u37", {
            to_name: name,
            message: "Hello From team mediaScape",
            to_email: email,
            reply_to: "mediascape0@gmail.com",
        }, "nv_Jq-1YJR57e3z-E");
    }

    const register = () => {
        const { name, email, password, reEnterPassword, slots, day, time } = userReg
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/register", userReg)
                .then(
                    res => alert(res.data.message),
                    //sendEmail(name,email),
                    // history.push("./login")
                )
        } else {
            alert("Invalid Input! Try Again.")
        }
    }
    const tester = () => {
        console.log(document.getElementById("img").innerHTML)
    }
    var loadFile = function (event) {
        var reader = new FileReader();
        reader.onload = function () {
            var output = document.getElementById('output');
            output.src = reader.result;
            console.log(reader.result)
        };
        reader.readAsDataURL(event.target.files[0]);
        console.log(event.target.files[0])
    };


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
                    {/* <div class="inputImage">
                        <label >Upload Picture</label>
                        <br></br>
                        <input type="file" accept="image/*" onChange={loadFile} />
                        <img id = "output"/>
                    </div>*/}
                    
                    </div> 
                    
                    <h2 class="title">Sign Up</h2>
                    <div class="inputBox">
                        <i class='bx bxs-user'></i>
                        <input type="text" name="name" value={userReg.name} placeholder="Username" onChange={handleRegChange} />
                    </div>

                    <div class="inputBox">
                        <i class='bx bxs-user'></i>
                        <input type="email" name="email" value={userReg.email} placeholder="Email" onChange={handleRegChange} />
                    </div>

                    <div class="inputBox">
                        <i class='bx bxs-user'></i>
                        <input type="password" name="password" value={userReg.password} placeholder="Password" onChange={handleRegChange} />
                    </div>
                    <div class="inputBox">
                        <i class='bx bxs-user'></i>
                        <input type="password" name="reEnterPassword" value={userReg.reEnterPassword} placeholder="Re-enter Password" onChange={handleRegChange} />
                    </div>
                    

                    <input type="submit" value="Sign up" class="signupbtn" onClick={register} />
                    <p class="social_text">Or Sign up with social platforms</p>

                    <div class="social_media">
                    <a href="#" class="social_icon" ><FaFacebook /><i class='bx bxl-facebook'></i></a>

                    <a href="#" class="social_icon"><FaGoogle  /><i class='bx bxl-google'></i></a>

                    <a href="#" class="social_icon"><FaTwitter /><i class='bx bxl-twitter'></i></a>

                    <a href="#" class="social_icon"><FaLinkedin /><i class='bx bxl-linkedin'></i></a>


                    </div>
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
       
