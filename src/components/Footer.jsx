import React from "react";
import "../css/Footer.css"
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="sec aboutus">
                    <h2> About Us </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic beatae rem, culpa illum at repellat deleniti expedita ducimus. Veritatis veniam magnam earum sapiente corrupti quae soluta expedita suscipit ullam illum.</p>
                    <ul className="sci">
                        <li> <a href="#"><i className="facebook"><FaFacebook /></i></a></li>
                        <li> <a href="#"> <i className="instagram"><GrInstagram /></i></a></li>
                        <li><a href="#"><i className="twitter"><BsTwitterX /></i></a></li>
                        <li><a href="#"><i className="linkedin"><FaLinkedin /></i></a></li>
                    </ul>
                </div>
                <div className="sec quicklinks">
                    <h2> Quick Links </h2>
                    <ul>
                        <li> <a href="#">Home</a></li>
                        <li> <a href="#"> About </a></li>
                        <li> <a href="#"> Contact Us </a></li>

                    </ul>
                </div>
                <div className="sec contactBx">
                    <h2> Contact Info </h2>
                    <ul className="info">
                        <li>
                            <span><i className="bx bxs-map"></i></span>
                            <span className ="address" > 6444 London Street  Brighton PA 33445</span>''
                        </li>
                        <li>
                            <span> <i className="bx bx-envelope"> </i></span>
                            <p><a href="mailto:codemyobby9@gmail.com"> Codemyhobby9@gmail.com</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;