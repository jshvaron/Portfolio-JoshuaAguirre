import React from "react";
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

function Footer(){

    return(
        <>
            <div className="Footer">
                <h2>
                    <AiFillGithub className="icons"/>
                    <AiFillLinkedin className="icons"/>
                 </h2>
            </div>
        </>
    )
}

export default Footer;