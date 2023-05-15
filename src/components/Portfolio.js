import React from "react";
import { useNavigate } from 'react-router-dom';
import Footer from "./Navigation/Footer";
import Navbar from "./Navigation/Navbar";




function Portfolio(){
    
    
    return (
        <>
            <Navbar />
            <div className="PortfolioPage">
                <container className='PortfolioContainer'>
                    <card className='Projects'>
                        PLACEHOLDER
                    </card>
                    <card className='Projects'>
                        PLACEHOLDER
                    </card>
                    <card className='Projects'>
                        PLACEHOLDER
                    </card>
                    <card className='Projects'>
                        PLACEHOLDER
                    </card>
                    <card className='Projects'>
                        PLACEHOLDER
                    </card>
                    <card className='Projects'>
                        PLACEHOLDER
                    </card>
                </container>
            </div>
            <Footer />
        </>
    )
}

export default Portfolio;