import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import ContContact from "../layout/ContContact";
import AboutCont from "../includes/AboutCont";
import Footer from "../layout/Footer";


function About() {
    return (
        <>
            <Header color = "light" />
            <Contents>
                <ContTitle title = {["ABOUT", "ME", "light"]}/>
                    <AboutCont color = "light" />
                <ContContact />
                <Footer color = "light" />
            </Contents>
        </>
    )
}

export default About;
