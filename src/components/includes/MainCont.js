import React from "react";

function MainInfo({text}) {
    return <div>{text}</div>
}

//함수형 컨퍼넌트 * 클래스 컴포넌트  -->리액트 훅 **중요**

const mainText = [
    {text:"I Provide"},
    {text:"Visual coding"},
    {text:"Solutions"},
    {text:"for you webs"}
]

function MainCont() {
    return (
        
    <section className="main__cont">
        <div className="main__inner">
            {mainText.map(txt => (
                <MainInfo text={txt.text} key={txt.text}/>
            ))}
        </div>
    </section>
    )
}

export default MainCont;
