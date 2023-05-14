import React from "react";

function AboutMe(){ 
    
    return(
        <>
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