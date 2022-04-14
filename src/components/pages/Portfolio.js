import React from "react";
import Header from "../includes/Header";
import Contents from "../includes/Contents";
import Footer from "../includes/Footer";
import PortCont from "../includes/PortCont";
import ContTitle from "../includes/ContTitle";
import ContContact from "../includes/ContContact";

function Portfolio() {
    return (
    <>
        <Header />
        <Contents>
            <ContTitle title = {["PORTFOLIO", "SITE"]} />
            <PortCont />
          <ContContact />
        </Contents>
        <Footer />
    </>
    )
    
}

export default Portfolio;
