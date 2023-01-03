import React from 'react';
import "./Footer.css";
import {
    FaGithub,
    FaInstagram,
    FaFacebook,
    FaTwitter,
  } from "react-icons/fa";

const Footer = () => {
  return (
    <>
            <footer class="footer-distributed">

			<div class="footer-left">

				<h3>MEDIA<span className="spancolor">SCAPE</span></h3>

				<p class="footer-links">
					<a href="/try" class="link-1">Home</a>
					<a href="/about">About</a>
					<a href="/contact">Contact</a>
				</p>

				<p class="footer-company-name">Mediascape © 2022</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>FAST National University</span> Chiniot-Faisalabad</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+92 336-6057767</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">mediascape0@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Mediascape focuses on delivering a consolidated solution for the ever-existing problem of creating a single platform, catering to the problems of Fast Photography Society.
				</p>

				<div class="footer-icons">

					
                    <a class="fa fa-facebook"
                        href="/login">
                        <FaFacebook className="user" />
                    </a>
                    <a class="fa fa-instagram"
                        href="/login">
                        <FaInstagram className="user" />
                    </a>
                    <a class="fa fa-github"
                        href="/login">
                        <FaGithub className="user" />
                    </a>
                    <a class="fa fa-twitter"
                        href="/login">
                        <FaTwitter className="user" />
                    </a>

				</div>

			</div>
            
		</footer>
        <footer className="mt-2 p-2 text-center text-secondary ">
                Copyright © 2022 Team Welp FAST CFD. All Rights Reserved.
        </footer>
    </>
  );
};
export default Footer