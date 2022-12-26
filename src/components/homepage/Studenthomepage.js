import React from "react"
import "./Studenthomepage.css"
import { useHistory } from "react-router-dom"

const StudentHomepage = (user) => {
    const history = useHistory()
    var Name = user.setLoginUser.name
    console.log(Name)
    return (
        <div className="Studenthomepage">  
            <h1>Hello, {Name} !</h1>
            <div className="button" onClick={() => history.push("/login")}>Logout</div>
        </div>
    )
}

export default StudentHomepage