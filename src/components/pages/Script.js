import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import ContContact from "../layout/ContContact";
import ScriptCon from "../includes/ScriptCon";
import Footer from "../layout/Footer";

function Script() {
    return (
        <>
        <Header />
        <Contents>
            <ContTitle title = {["SCRIPT", "JAVASCRIPT"]}/>
            <ScriptCon />
            <ContContact />
            <Footer color = "light" />
        </Contents>
        <Footer />
    </>
    )
    
}

export default Script;
