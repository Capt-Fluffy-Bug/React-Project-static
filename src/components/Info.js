import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


export default function Info() {
    return(
        <div className="info--container">
            <img className="image" src={require("../images/batman.png")}/>
            <div className="info">
                <p className="name">The Batman</p>
                <p className="title">JL Founder</p>
                <p className="email">batman@batmail.com</p>
                <div className="buttons">
                    <button className="email--button"><EmailIcon fontSize="small" align />Email</button>
                    <button className="linkedin--button"><LinkedInIcon fontSize="small"/>LinkedIn</button>
                </div>
            </div>
        </div>
    )
}