import React from "react";
import Navbar from "./Navigation/Navbar";
import AboutMe from "./About";
import Portfolio from "./Portfolio";
import '../index.css'

function Main() {

    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
                <AboutMe />
                <Portfolio />
            </body>
            <footer>
                xFOOTERx
            </footer>
        </>

    )
}

export default Main;