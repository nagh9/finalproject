import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/appp.css'



const Navbar = () => {
  
  return (
    <div >
      <nav className="navbar navbar-expand-lg ">
        <div className="container" >
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            Makeup Store 
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <NavLink className="nav-link  fw-bold" aria-current="page" to="/main">
                  Home
                </NavLink>
              </li>
            </ul>
            <div className="buttons" >
              <NavLink to="/register" className="btn ">
               Register
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


       
     



