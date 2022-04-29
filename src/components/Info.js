import React from "react"

export default function Info() {
    return(
        <div className="info--container">
            <img className="image" src={require("../images/batman.png")}/>
            <div className="info">
                <p className="name">The Batman</p>
                <p className="title">JL Founder</p>
                <p className="email">batman@batmail.com</p>
                <div className="buttons">
                    <button className="email--button"><span className="email--icon`"/>Email</button>
                    <button className="linkedin--button">LinkedIn</button>
                </div>
            </div>
        </div>
    )
}