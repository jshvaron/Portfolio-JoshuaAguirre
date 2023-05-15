import React from "react";
import Navbar from "./Navigation/Navbar";

function AboutMe(){ 
    
    return(
        <>  
            <Navbar />
            <div className="AboutMeContainer">
                
                <div className="Snapshot">
                    <figure className="ProfilePic">
                        PICTURE
                    </figure>
                    <figcaption className="ProfilePicCap">
                        Something Cool
                    </figcaption>
                </div>
                <div className="BioContainer">
                    <summary className="Bio">
                        BIO
                    </summary>
                </div>

            </div>
        </>
    )
}

export default AboutMe;