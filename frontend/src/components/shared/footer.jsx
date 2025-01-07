import React from "react";
import "../../css/Footer.css";
import div8 from "../../assets/div (8).png";
import div9 from "../../assets/div (9).png";
import div10 from "../../assets/div (10).png";
import back from "../../assets/a.png";
const Footer = () => {
    return(
        <div className="footer">
            <img src={div8} alt="div8" className="div8"/>
            <img src={div9} alt="div9" className="div9"/>
            <img src={div10} alt="div10" className="div10"/>
            <img src={back} alt="back" className="back"/>
            <div className="footer-content-left">
                <div className="footer-content-left-text">
                    <h2>AI products studio</h2>
                    <p>Feel free to reach out if you want to collaborate</p>
                    <p> with us, or simply have a chat.</p>
                <h3>hello@bigmediamarketing.studio</h3>
                </div>
            </div>
            <div className="footer-content-right">
                <div className="footer-content-right-text">
                    <div className="footer-content-right-left-text">
                        <h3>Our projects</h3>
                        <p>WingRiders</p>
                        <p>Trackee</p>
                        <p>Worldcoin</p>
                        <p>Audience+</p>
                    </div>
                    <div className="footer-content-right-right-text">
                    <h3>Follow us</h3>
                        <a href='/'>Facebook</a>
                        
                        <a href='/'>Instagram</a>
                        <a href='/'>Dribbble</a>
                        <a href='/'>Linkedin+</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;