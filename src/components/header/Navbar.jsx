import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
 import { NavLink } from "react-router-dom";
import "./Navbar.css"
 
 
const Navbar=()=>{
   
 return (
  <>   
  <nav className="navbar navbar-expand-lg bg-body-tertiary navbg sticky">
  <div className="container-fluid">
    <NavLink className="navbar-brand logo" to="/">Pokemon
       {/* <img className="logo" src="" alt="Error" />  */}
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
      <ul className="navbar-nav nav-pills ms-auto mb-2 mb-lg-0">
        <li className="nav-item d-flex justify-content-center ">
          <NavLink
            activeClassName="menu-active"
            exact
            className="nav-link"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item d-flex justify-content-center">
          <NavLink
            activeClassName="menu-active"
            exact
            className="nav-link"
            to="/pokemon"
          >
            All Pokemon
          </NavLink>
        </li>
         
        <li className="nav-item d-flex justify-content-center">
          <NavLink
            activeClassName="menu-active"
            exact
            className="nav-link"
            to="/login"
          >
            Login
          </NavLink>
        </li>
      
        <li className="nav-item d-flex justify-content-center">
          <NavLink
            activeClassName="menu-active"
            exact
            className="nav-link"
            to="/signup"
          >
            Register
          </NavLink>
        </li>
         
         
      </ul>
    </div>
  </div>
</nav>
 </>
  );
}
export default Navbar;
