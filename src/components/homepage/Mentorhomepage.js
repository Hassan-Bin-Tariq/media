import React from "react"
import "./Mentorhomepage.css"
import { useHistory } from "react-router-dom"

const MentorHomepage = (user) => {
    const history = useHistory()
    var Name = user.setLoginUser.name
    console.log(Name)
    return (
        <div className="Mentorhomepage">  
            <h1>Hello {Name}</h1>
            <div className="button" onClick={() => history.push("/login")}>Logout</div>
        </div>
    )
}

export default MentorHomepage