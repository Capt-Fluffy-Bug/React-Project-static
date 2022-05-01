import React from "react";
import {MdEmail} from "react-icons/md"
import {FaLinkedin} from "react-icons/fa"

export default function Info() {
    return(
        <div className="info--container">
            <img className="image" src={require("../images/batman.png")}/>
            <div className="info">
                <p className="name">The Batman</p>
                <p className="title">JL Founder</p>
                <p className="email">batman@batmail.com</p>
                <div className="buttons">
                    
                    <button className="email--button"><span className="btn--icon"><MdEmail size={20}/></span>Email</button>                    
                    
                    <button className="linkedin--button"><span className="btn--icon"><FaLinkedin size={20}/></span>LinkedIn</button>
                </div>
            </div>
        </div>
    )
}