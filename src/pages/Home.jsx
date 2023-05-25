import "./Home.css"
import React from 'react'

import hero from "../assets/images/hero.png"
import cardOne from "../assets/images/card-1.png"
import cardTwo from "../assets/images/card-2.png"
import cardThree from "../assets/images/card-3.png"
import cardFour from "../assets/images/card-4.png"
import cardFive from "../assets/images/card-5.png"

import blogOne from "../assets/images/blog-1.svg"
import blogTwo from "../assets/images/blog-2.png"
import blogThree from "../assets/images/blog-3.jpg"
import blogFour from "../assets/images/blog-4.png"
import blogFive from "../assets/images/blog-5.png"
import blogSix from "../assets/images/blog-6.png"


import heroVideo from "../assets/images/heroVideo.mp4"



const Home = () => {
    return (

        <main>




            <div className="banner">
                <div className="hero">
                    <div>
                        <h1>Get Advanced AI + Expert Created <span className="primaryText">Logos</span></h1>
                        <p>Boost your sales <span className="primaryText">10x faster</span> with content customized by our unique partnership of <span className="primaryText">human creativity and AI optimization</span></p>
                    </div>
                    <img src={hero} alt="" />
                </div>

                <div className="home-form">
                    <p>
                        <input type="text" className="underLineInput" />
                        {" "}would like a beat invite sent to {" "}
                        <input type="email" className="underLineInput" />
                        {" "}when it's ready!
                    </p>
                </div>

                <div className='form-buttons'>
                    <div className="fillButton">Sign Up For The BETA!</div>
                    <div className="stockButton">Sign Up as a freelance partner</div>
                </div>

                <div className="notify-div">
                    <button className='notify-me-btn'>Notify me</button>
                </div>
            </div>




            <div className="heroVideo">
                <h2 className="primaryText">EXPLAINER VIDEO</h2>
                <video src={heroVideo} muted controls></video>
            </div>




            <div className="cards">
                <div className="card">
                    <img src={cardOne} alt="" />
                    <h3>MakeAI-assisted Content Choices</h3>
                    <p>Access and Order from an extensive catalogue in any language and on your budget’s terms. If unsure, our AI guides you to the best.</p>
                </div>

                <div className="card">
                    <img src={cardTwo} alt="" />
                    <h3>Upload and Maintain your Brand Identity</h3>
                    <p>Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!</p>
                </div>

                <div className="card">
                    <img src={cardThree} alt="" />
                    <h3>Be informed as we create</h3>
                    <p>Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates.</p>
                </div>

                <div className="card">
                    <img src={cardFour} alt="" />
                    <h3>Receive and Review</h3>
                    <p>The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.</p>
                </div>

                <div className="card">
                    <img src={cardFive} alt="" />
                    <h3>Publish and Monitor your contents’ progress</h3>
                    <p>The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.</p>
                </div>
            </div>


            <div className="someText">
                <div>
                    <h2 className="primaryText">Transform your creation process</h2>
                    <p>With a new approach to ordering content, you can now stop juggling multiple documents and meetings and start publishing content faster and on demand</p>
                </div>
                <div>
                    <h2 className="primaryText">Activate your business growth with RetinkContent. </h2>
                    <p>Save time and maintain your brand identity within your budget range or sign up for affordable plans and still access multiple content services like:</p>
                </div>
            </div>






            <div className="blogs">
                <div className="blog">
                    <img src={blogOne} alt="" />
                    <div>
                        <p>Logos</p>
                        <div className="underline"></div>
                    </div>
                    <p>Have a unique & creative logo designed to express and represent your brand indentity</p>
                </div>

                <div className="blog">
                    <img src={blogTwo} alt="" />
                    <div>
                        <p>Blog Writing</p>
                        <div className="underline"></div>
                    </div>
                    <p> Write SEO enriched blog posts as long or short articles on any topic of your choice</p>
                </div>

                <div className="blog">
                    <img src={blogThree} alt="" />
                    <div>
                        <p>Animated Videos</p>
                        <div className="underline"></div>
                    </div>
                    <p>Bring animated characters to life to keep your viewers engaged and  entertained</p>
                </div>

                <div className="blog">
                    <img src={blogFour} alt="" />
                    <div>
                        <p>Product Demo</p>
                        <div className="underline"></div>
                    </div>
                    <p>Introduce your product to potential customers in a clear and creative video</p>
                </div>

                <div className="blog">
                    <img src={blogFive} alt="" />
                    <div>
                        <p>Copywriting</p>
                        <div className="underline"></div>
                    </div>
                    <p>Have creative and compelling copies written to boost your product, brand, service or company</p>
                </div>

                <div className="blog">
                    <img src={blogSix} alt="" />
                    <div>
                        <p>Social Media Ads</p>
                        <div className="underline"></div>
                    </div>
                    <p>Boost sales and awareness with tailor made ads from experts.</p>
                </div>
            </div>




            <div className="bottomButton">
                <h2 className="primaryText">Sign Up for the BETA to see more</h2>
                <div className='stock-buttons'>
                    <button className="stockButton">Business Name</button>
                    <button className="stockButton">Email</button>
                </div>
            </div>

            <div className='notify-me-btn ' style={{ textAlign: "center", width: "130px", margin: "auto", marginTop: "30px" }}>Notify me</div>

            <div className="stockButton" style={{ textAlign: "center", width: "300px", padding: "10px 20px", borderRadius: "10px", margin: "auto", marginTop: "30px" }}>Sign Up as a freelance partner</div>





        </main>
    )
}

export default Home