import React from "react"
import {AiFillFacebook} from "react-icons/ai"
import {FaTwitterSquare} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"


export default function Footer() {
    return(
        <div className="footer--container">
            <FaTwitterSquare size={40} color="#918E9B"/>
            <AiFillFacebook size={40} color="#918E9B"/>
            <FaInstagramSquare size={40} color="#918E9B"/>
            <FaGithubSquare size={40} color="#918E9B"/>
        </div>
    )
}