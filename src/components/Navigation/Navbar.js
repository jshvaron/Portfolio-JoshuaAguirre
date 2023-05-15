import React from "react";
import { useNavigate } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate();
    function handleAbout() {
        navigate('/About')
    }
    // function handlePortfolio() {
    //     Navigate('/About')
    // }
    return (
        <>
            <nav className="Navigation">
                <h1> 
                xJoshua Aguirrex
                </h1>
                <section className="NavLinks">
                    <p className="NavLink" onClick={()=> handleAbout()}>About</p>
                    <p className="NavLink" on>Portfolio</p>
                    <p className="NavLink">Contact</p>
                    <p className="NavLink">Resume</p>
                </section>
            </nav>
        </>
    )
}

export default Navbar;