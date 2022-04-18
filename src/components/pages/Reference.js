import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import ContContact from "../layout/ContContact";
import ReferenceCont from "../includes/ReferenceCont";
import Footer from "../layout/Footer";

function Reference() {
    return (
        <>
            <Header color = "light" />
            <Contents>
                <ContTitle title = {["HTML", "REFERENCE", "light" ]}/>
                    <ReferenceCont color = "light" />
                <ContContact />
                <Footer color = "light" />
            </Contents>
        </>
    )
    
}

export default Reference;
