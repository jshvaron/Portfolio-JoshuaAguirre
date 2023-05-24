import React from "react";
import Navbar from "./Navigation/Navbar";
import Footer from "./Navigation/Footer";
import ProfilePic from '../assets/pictures/IMG_1843.jpeg'

function AboutMe(){ 
    
    return(
        <>  
            <Navbar />
            <div className="AboutMeContainer">
                
                <div className="Snapshot">
                    <figure className="ProfilePic">
                        <img src={ProfilePic} alt='profile pic'/>
                    </figure>

                </div>
                <div className="BioContainer">
                    <summary className="Bio">
                    Hi, I'm Joshua Aguirre. I have 9 years of experience as a process-driven business manager, specializing in sales, operations, and tech training and development, I am currently attending a Full Stack Web Development course to further expand my skillset. My goal is to leverage my accumulated experience and business acumen, along with my newfound Web Development skills, to excel in the dynamic tech industry. To learn more about my work and achievements in various roles, feel free to explore my portfolio and LinkedIn profile.
                    </summary>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutMe;