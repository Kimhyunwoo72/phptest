import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import PortCont from "../includes/PortCont";
import ContTitle from "../layout/ContTitle";
import ContContact from "../layout/ContContact";

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
