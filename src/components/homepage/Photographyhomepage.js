import React from "react"
import "./Photographyhomepage.css"
import { useHistory } from "react-router-dom"

const PhotographyHomepage = (user) => {
    const history = useHistory()
    var Name = user.setLoginUser.name
    console.log(Name)
    console.log(user.setLoginUser.email);
    return (
        <div className="Photographyhomepage">  
            <h1>Hello {Name}</h1>
            <div className="button" onClick={() => history.push("/login")}>Logout</div>
        </div>
    )
}

export default PhotographyHomepage