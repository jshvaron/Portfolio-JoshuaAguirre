import React from "react";
import { useNavigate } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate();
    function handleAbout() {
        navigate('/About')
    }
    function handlePortfolio() {
        navigate('/Portfolio')
    }
    function handleContact() {
        navigate('/Contact')
    }
    function handleResume() {
        navigate('/Resume')
    }
    return (
        <>
            <nav className="Navigation">
                <h2> 
                Joshua Aguirre
                </h2>
                <section className="NavLinks">
                    <p className="NavLink" onClick={()=> handleAbout()}>About</p>
                    <p className="NavLink" onClick={()=> handlePortfolio()}>Portfolio</p>
                    <p className="NavLink" onClick={()=> handleContact()}>Contact</p>
                    <p className="NavLink" onClick={()=> handleResume()}>Resume</p>
                </section>
            </nav>
        </>
    )
}

export default Navbar;