import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import navlogo from "../../assets/Picture1.png";
import user from "../../assets/user.png";
import Dropdown from 'react-bootstrap/Dropdown';
import "./Header.css";
import {
  FaUserAlt,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
      
        {/* 1st logo part  */}
        <div className="logo">
           <Navbar.Brand href="/try"><img src={navlogo}></img></Navbar.Brand>
        </div>
        

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/try">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/login">Get Started</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              
            </li>
            <li>
            </li>
            <li>
              <a
                href="/login"
                target="_thapa">
                <FaUserAlt className="user" />
              </a>
            </li>
            
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Header