import React from 'react'
import { useEffect } from "react";
import "./Home.css";
import * as THREE from 'three';
import { color } from '@mui/system';
const Home = () => {
    //useEffect so that page gets rendered only once
    useEffect(()=>{
        const scene=new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        
        const canvas=document.querySelector(".homeCanvas");
        const renderer=new THREE.WebGLRenderer({canvas});

        const geometry=new THREE.BoxGeometry(1,1,1);
        const material=new THREE.MeshBasicMaterial({color: 0x00ffff});
        const mesh=new THREE.Mesh(geometry,material);
        scene.add(mesh);
        camera.position.z=5;
        const animate=()=>{
            requestAnimationFrame(animate);
            mesh.rotation.y+=100;
            renderer.setSize(window.innerWidth,window.innerHeight);
            renderer.render(scene,camera);

        }
        animate();

        
    },[]);
  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeContainer">
        <h3>THIS IS MY NEXT CANVAS</h3>
        <p>lorem ipsum jaskakhjkjshdkajjjjjjjjjjjjdhaknsk</p>
      </div> 
    {/* <div className="container2"></div>
    <div className="container3"></div> */}
       <div className="loginContainer"></div>
    </div>
    
  )
}

export default Home