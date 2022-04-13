import React from "react";
import Header from "../includes/Header";
import Contents from "../includes/Contents";
import MainCont from "../includes/MainCont";
import Footer from "../includes/Footer";

function Main() {
    return (
        <>
            <Header />
            <Contents>
                <MainCont />
            </Contents>
            <Footer />
        </>
    )
}
export default Main;