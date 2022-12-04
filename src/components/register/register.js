import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import emailjs from "emailjs-com";
//import n from "./media/Picture1.png"
const Register = () => {

const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: "",
        slots: [],
        day: "None",
        time: "None",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const sendEmail = (name,email) => {

        emailjs.send("service_xsod6da","template_01r4u37",{
            to_name: name,
            message: "Hello From team mediaScape",
            to_email: email,
            reply_to: "mediascape0@gmail.com",
            },"nv_Jq-1YJR57e3z-E");
    }

    const register = () => {
        const { name, email, password, reEnterPassword, slots, day, time } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( 
                res => alert(res.data.message),
                //sendEmail(name,email),
                history.push("./login")
            )
        }else {
            alert("invlid input")
        }
        
    }
    return (
        <div className="register">
            
                <div className="RegisterationContent">

                    <div className="RegistrationForm" color="#ADDDDD">
                        
                        <h2 className="titl">REGISTER</h2>
                        <img src="https://www.facebook.com/photo/?fbid=2436584043162865&set=a.267167266771231"/>
                        <br></br>
                        <form className="rf">
                            <div className="form-group>">
                                <label htmlFor="name">
                                    <i class="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
                            </div>
                            <br>
                            </br>
                            
                            <div className="form-group>">
                                <label htmlFor="email">
                                    <i class="zmdi zmdi-email"></i>
                                </label>
                                <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
                            </div>
                            <br></br>
                           
                            <div className="form-group>">
                                <label htmlFor="password">
                                    <i class="zmdi zmdi-lock-outline"></i>
                                </label>
                                <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
                            </div>
                            <br></br>
                 
                            <div className="form-group>">
                                <label htmlFor="repassword">
                                    <i class="zmdi zmdi-lock"></i>
                                </label>
                                <input type="password" STYLE='color=#FFFF00' name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Your Password" onChange={handleChange}></input>
                            </div>
                        </form>
                        
                        <br></br>
                        <div><button type="button" class="btn-btn-info" onClick={register}>Register</button></div>
                        <br></br>
                        <div><p><h6>Already a user?</h6></p></div>
                        <div><button type="button" class="btn-btn-info" onClick={() => history.push("/login")}>Login</button></div>
                    </div>
                    
                </div>
                

            </div>
            
    )
}

export default Register