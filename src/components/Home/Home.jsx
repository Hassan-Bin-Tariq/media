import React from 'react'
import { useEffect } from "react";
import "./Home.css";
import * as THREE from 'three';
import { color } from '@mui/system';
import Header from '../Header/Header';
import Try from '../homepage/Try';
import Announcement from '../Header/Announcement';
import Footer from './Footer';
const Home = () => {
    
  return (
    <>
    <Announcement/>
    <Header />
    <Try/>
    <Footer></Footer>
    </>
    
  )
}

export default Home