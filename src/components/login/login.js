import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
//import Picture1 from './assets/Picture1.png'
import logo from "../../assets/Picture1.png";

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

    return (
        <div className="login">
        
        <div>
            <img src={logo}/>
            <br></br>
            <h3>Log in</h3>   
            </div>
           <br></br>


            <div className="email">
                    <label id="mail">Email</label>
                    <br></br>
                    <input className="emailtak"></input>
                </div>
<br></br>
        
                <div className="pass">
                    <label >Password</label>
                    <br></br>
                    <input className="passcode"></input>
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
            </div>
        </div>
    )
}

export default Login