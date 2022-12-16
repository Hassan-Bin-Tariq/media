import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import emailjs from "emailjs-com";
//import n from "./media/Picture1.png"
import logo from "../../assets/Picture1.png";
const Register = () => {
//Register testing
//bug fix
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
    const tester = () => {
        console.log(document.getElementById("img").innerHTML)
    }
    var loadFile = function(event) {
        var reader = new FileReader();
        reader.onload = function(){
        var output = document.getElementById('output');
        output.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
        console.log(event.target.files[0])
    };
    return (
        
        <div className="register">
            <div>
            <img src={logo}/>
            <br></br>
            <h3>Register</h3>

        </div>
            
            <div className="name">
                <label >Name</label>
                <br></br>
                <input className="naam"></input>
            </div>


            <div className="email">
                <label id="mail">Email</label>
                <br></br>
                <input className="emailtak"></input>
            </div>

            <div className="pass">
                <label >Password</label>
                <br></br>
                <input className="passcode"></input>
            </div>    

            <div className="repass">
                <label >Re-enter Password</label>
                <br></br>
                <input className="repasscode"></input>
            </div>
            
            <input type="file" accept="image/*" onChange = {loadFile} />
            <img id="output"/>
            
<br></br>
            <button className="btnReg" onClick={register}>Register</button>
            <div><h6>OR</h6></div>
            <div><button className="btnlog" onClick={() => history.push("/login")}>Login</button></div>
            <div>

<h6 className="mt-2 p-2 text-center text-secondary ">Copyright © 2022 Team Welp FAST CFD. All Rights Reserved.</h6>
</div>
            </div>            
    )
}

export default Register