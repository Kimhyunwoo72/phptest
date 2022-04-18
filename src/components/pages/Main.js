import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import MainCont from "../includes/MainCont";
import Footer from "../layout/Footer";

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