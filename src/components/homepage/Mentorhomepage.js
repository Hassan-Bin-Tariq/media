import React from "react"
import "./Mentorhomepage.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const MentorHomepage = (user) => {
    const history = useHistory()
    var Name = user.setLoginUser.name
    console.log(Name)

    const GetEvents = () => {
        axios.post("http://localhost:9002/GetEventRequest", )
        .then(res => {
            alert(res.data.message)
            console.log(res.data.event)

        })
    }

    return (
        <div className="Mentorhomepage">  
            <h1>Hello {Name}</h1>
            <div className="button" onClick={() => history.push("/login")}>Logout</div>
            <div className="button" onClick={GetEvents}>Show events</div>
        </div>
    )
}

export default MentorHomepage