import React from "react";
import Navbar from "./Navigation/Navbar";
import Footer from "./Navigation/Footer";
// import { useNavigate } from "react-router-dom";

function Contact(){

    return (
        <>
            <Navbar />
            <div className="ContactContainer">
                <section className="Details">
                    <h2 className="DetailsHeader">
                        Name
                    </h2>
                    <h2>
                        email
                    </h2>
                </section>
                <section className="Message">
                    <h2 className="MessageHeader">
                        Message
                    </h2>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Contact;