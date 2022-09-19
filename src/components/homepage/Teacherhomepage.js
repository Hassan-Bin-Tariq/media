import React from "react"
import "./Teacherhomepage.css"
import { useHistory } from "react-router-dom"

const TeacherHomepage = (user) => {
    const history = useHistory()
    var Name = user.setLoginUser.name
    console.log(Name)
    return (
        <div className="Teacherhomepage">  
            <h1>Hello {Name}</h1>
            <div className="button" onClick={() => history.push("/login")}>Logout</div>
        </div>
    )
}

export default TeacherHomepage