import React from "react"

export default function Info(){
    return(
        <div className="Info">
            <img className="profile" src="./images/venkat.jpg" width="320px" height="317px" />
            <h1>Venkat Sai Ram</h1>
            <p>Frontend Developer</p>
            <button>
                <img src="./images/Mail.svg" />
                Email
            </button>
        </div>
    )
}