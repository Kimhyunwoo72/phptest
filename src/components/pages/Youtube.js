
import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import ContContact from "../layout/ContContact";
import YoutubeCon from "../includes/YoutubeCon";
import Footer from "../layout/Footer";


function Youtube() {
    return (
        <>
            <Header />
            <Contents>
                <ContTitle title = {["CODING", "YOUTUBER"]}/>
                <YoutubeCon />
                <ContContact />
                <Footer />
            </Contents>
        </>
    )
}

export default Youtube;
