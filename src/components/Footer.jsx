import "./Footer.css"
import React from 'react'
import Logo from "../assets/images/logo.jpg"


import contactOne from "../assets/images/contact-1.svg"
import contactTwo from "../assets/images/contact-2.svg"
import contactThree from "../assets/images/contact-3.svg"
import contactFour from "../assets/images/contact-4.svg"
import contactFive from "../assets/images/contact-5.svg"
import contactSix from "../assets/images/contact-6.svg"



const Footer = () => {
    return (

        <main className="main">
            <div className="top-section">
                <img src={Logo} alt="" />
                <div className="contactWith">
                    <div>
                        <p>Connect with us</p>
                        <div className="contactLogo">
                            <img src={contactOne} alt="" />
                            <img src={contactTwo} alt="" />
                            <img src={contactThree} alt="" />
                            <img src={contactFour} alt="" />
                            <img src={contactFive} alt="" />
                            <img src={contactSix} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="second-section">
                <div>
                    <p>Product by Retink Media UG</p>
                    <p>Bonn, Germany</p>
                </div>

                <div>
                    <p style={{ cursor: "pointer" }}>Get Early Access</p>
                    <p style={{ cursor: "pointer" }}>Provide Feedback</p>
                </div>
            </div>



        </main>

    )
}

export default Footer