import React from "react";
import Navbar from "./Navigation/Navbar";
import Footer from "./Navigation/Footer";

function Resume(){

    return(
        <>
        <Navbar />
        <div className="ResumeContainer">
            <h1 className="ResumeHeader">
                Resume
            </h1>
            <section className="ResumeContent">
                <h2 className="ResumeDetails">XXX</h2>
                <p className="ResumeDetails">Stuff</p>
                <h2 className="ResumeDetails">XXX</h2>
                <p className="ResumeDetails">Stuff</p>
                <h2 className="ResumeDetails">XXX</h2>
                <p className="ResumeDetails">Stuff</p>
                <h2 className="ResumeDetails">XXX</h2>
                <p className="ResumeDetails">Stuff</p>
            </section>
         </div>
         <Footer />
        </>
    )
}

export default Resume;