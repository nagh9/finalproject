import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/appp.css';
import BackgroundImage from "../images/pexels-pixabay-326055.jpg"

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">join us now and don't waste time</h1>
            <p className="main-para text-center"></p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button" id="reg_btn"><span>log in</span></button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}