import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

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
           <div className="RegisterationContent">

<div className="RegistrationForm" color="#ADDDDD">
    
    <h2 className="titl"> LOGIN</h2>
    <img src="https://www.facebook.com/photo/?fbid=2436584043162865&set=a.267167266771231"/>
    <br></br>
    <br></br>
    <form className="rf">
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
    </form>
    
    <br></br>
    <div><button type="button" class="btn-btn-info" onClick={login}>Login</button></div>
    <br></br>
    <div><p><h6>Dont have an account?</h6></p></div>
    <div><button type="button" class="btn-btn-info" onClick={() => history.push("/register")}>Register</button></div>
</div>

</div>
        </div>
    )
}

export default Login