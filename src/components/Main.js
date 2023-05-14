import React from "react";
import Navbar from "./Navigation/Navbar";
import AboutMe from "./About";
import '../index.css'

function Main() {

    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
                <AboutMe />
            </body>
            <footer>
                xFOOTERx
            </footer>
        </>

    )
}

export default Main;