import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {MdEmail} from "react-icons/md"

export default function Info() {
    return(
        <div className="info--container">
            <img className="image" src={require("../images/batman.png")}/>
            <div className="info">
                <p className="name">The Batman</p>
                <p className="title">JL Founder</p>
                <p className="email">batman@batmail.com</p>
                <div className="buttons">
                    {/* <button className="email--button"><span className="email--icon"><MdEmail/></span>Email</button> */}
                    <button className="email--button"><span className="email--icon"><MdEmail /></span>Email</button>
                    <button className="linkedin--button"><LinkedInIcon fontSize="small"/>LinkedIn</button>
                </div>
            </div>
        </div>
    )
}