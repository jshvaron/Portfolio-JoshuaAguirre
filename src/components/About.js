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
                    {/* <figcaption className="ProfilePicCap">
                        Something Cool
                    </figcaption> */}
                </div>
                <div className="BioContainer">
                    <summary className="Bio">
                        BIO
                    </summary>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutMe;