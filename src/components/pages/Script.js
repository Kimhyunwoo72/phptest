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
        <Header color = "light" />
        <Contents>
            <ContTitle title = {["SCRIPT", "JAVASCRIPT", "light"]}/>
            <ScriptCon color = "light" />
            <ContContact  />
            <Footer color = "light" />
        </Contents>
        <Footer color = "light" />
    </>
    )
    
}

export default Script;
