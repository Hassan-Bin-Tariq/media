import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import emailjs from "emailjs-com";

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
        <div className= "register">
            {/* {console.log("User",user)}     */}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder = "Your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email}placeholder = "Your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder = "Your Password" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder = "Re-enter Your Password" onChange={handleChange}></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
    )
}

export default Register