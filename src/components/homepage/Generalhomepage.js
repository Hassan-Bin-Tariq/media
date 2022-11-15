import React from "react"
import "./Generalhomepage.css"
import { useHistory } from "react-router-dom"

const GeneralHomepage = (user) => {
    const history = useHistory()
    var Name = user.setLoginUser.name
    console.log(Name)
    console.log(user.setLoginUser.email);
    return (
        <div className="Generalhomepage">  
            <h1>Hello {Name}</h1>
            <div className="button" onClick={() => history.push("/login")}>Logout</div>
        </div>
    )
}

export default GeneralHomepage