import React from 'react'
import '../Css/appp.css';
import BackgroundImage from "../images/pexels-pixabay-326055.jpg"
import Navbar from '../components/Nav';

export default function LandingPage() {
    return (
        <>
        <Navbar/>
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">join us now and don't waste time</h1>
            
            <h5 className="card-title text-center">
              NEW SEASON ARRIVALS
            </h5>
            <p className="card-text text-center">CHECK OUT ALL THE TRENDS</p>
        
        </header>
        </>
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