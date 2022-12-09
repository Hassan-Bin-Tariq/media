import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import logo from "../../assets/Picture1.png";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return <ReactNavbar 
  navColor1="white"
      navColor2="hsl(219, 48%, 8%)"
      burgerColor="hsl(250, 100%, 75%)"
      burgerColorHover="hsl(250, 100%, 75%)"
      logo={logo}
      logoWidth="250px"
      logoHoverColor="hsl(250, 100%, 75%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="Login"
      link3Text="Tour"
      link4Text="Contact"
      link1Url="/"
      link2Url="/login"
      link3Url="/tour"
      link4Url="/contact"
      link1ColorHover="white"
      link1Color="HSL(250, 100%, 75%)"
      link1Size="1.5rem"
      link1Padding="3vmax"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="HSL(250, 100%, 75%)"
      profileIconColorHover="white"
  
  ></ReactNavbar>
}

export default Header