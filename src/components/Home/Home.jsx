import React from 'react'
import { useEffect } from "react";
import "./Home.css";
import * as THREE from 'three';
import { color } from '@mui/system';
import Header from '../Header/Header';
import Try from '../homepage/Try';
const Home = () => {
    
  return (
    <>
    <Header />
    <Try/>
    </>
    
  )
}

export default Home