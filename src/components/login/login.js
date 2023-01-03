import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
//import Picture1 from './assets/Picture1.png'
import logo from "../../assets/Picture1.png";
import loginpic from "../../assets/login.svg";
import registerpic from "../../assets/register.svg";
import {
    FaLinkedin,
    FaGoogle,
    FaFacebook,
    FaTwitter,
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
                else{
                    history.push("/studentPortal")
                }
            })
    }
    // const changeFunction=()=>{
    //     // buttons for changing login-sign up
    //     const sign_in_btn = document.querySelector("#sign_in_btn");
    //     const sign_up_btn = document.querySelector("#sign_up_btn");
    //     const container = document.querySelector(".container");

    //     sign_up_btn.addEventListener("click", () => {
    //     container.classList.add("sign_up_mode");
    //     });

    //     sign_in_btn.addEventListener("click", () => {
    //     container.classList.remove("sign_up_mode");
    //     });
    // };
    // const changeReg=()=>{
    //     // buttons for changing login-sign up
    //     const sign_in_btn = document.querySelector("#sign_in_btn");
    //     const sign_up_btn = document.querySelector("#sign_up_btn");
    //     const container = document.querySelector(".container");

    //     sign_up_btn.addEventListener("click", () => {
    //     container.classList.add("sign_up_mode");
    //     });

    //     sign_in_btn.addEventListener("click", () => {
    //     container.classList.remove("sign_up_mode");
    //     });
    // };
    
    const sign_upchanger=()=>{

        const container = document.querySelector(".container");
        container.classList.add("sign_up_mode");
    };

    const sign_inchanger=()=>{

        const container = document.querySelector(".container");
        container.classList.remove("sign_up_mode");
    };


    return (
                
        <div class="container">
        <div class="form_container">
            <div class="signin_signup">
                <form action="#" class="sign_in_form">
                    <h2 class="title">Sign In</h2>

                    <div class="inputBox">
                        <i class='bx bxs-user'></i>
                        <input type="text" placeholder="Username" />
                    </div>

                    <div class="inputBox">
                        <i class='bx bxs-user'></i>
                        <input type="password" placeholder="Password" />
                    </div>

                    <input type="submit" value="Login" class="btn" />
                    <p class="social_text">Or Sign in with social platforms</p>

                    <div class="social_media">
                        <a href="#" class="social_icon"><i class='bx bxl-facebook'></i></a>

                        <a href="#" class="social_icon"><i class='bx bxl-google'></i></a>

                        <a href="#" class="social_icon"><i class='bx bxl-twitter'></i></a>

                        <a href="#" class="social_icon"><i class='bx bxl-linkedin'></i></a>


                    </div>
                </form>
                <form action="#" class="sign_up_form">
                    <h2 class="title">Sign Up</h2>

                    <div class="inputBox">
                        <i class='bx bxs-user'></i>
                        <input type="text" placeholder="Username" />
                    </div>

                    <div class="inputBox">
                        <i class='bx bxs-user'></i>
                        <input type="email" placeholder="Email" />
                    </div>

                    <div class="inputBox">
                        <i class='bx bxs-user'></i>
                        <input type="password" placeholder="Password" />
                    </div>

                    <input type="submit" value="Sign up" class="btn" />
                    <p class="social_text">Or Sign up with social platforms</p>

                    <div class="social_media">
                        <a href="#" class="social_icon"><i class='bx bxl-facebook'></i></a>

                        <a href="#" class="social_icon"><i class='bx bxl-google'></i></a>

                        <a href="#" class="social_icon"><i class='bx bxl-twitter'></i></a>

                        <a href="#" class="social_icon"><i class='bx bxl-linkedin'></i></a>


                    </div>
                </form>
            </div>
        </div>
        <div class="panel_container">
            <div class="panel left_panel">
                <div class="content">
                    <h3>New here ?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequatur earum quod
                    </p>
                    <button onClick={sign_upchanger} class="btn" id="sign_up_btn">
                        Sign up
                    </button>
                </div>
                <img src={registerpic} class="image" alt="" />
            </div>
            <div class="panel right_panel">
                <div class="content">
                    <h3>One of us ?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequatur earum quod
                    </p>
                    <button onClick={sign_inchanger} class="btn transparent" id="sign_in_btn">
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
       
