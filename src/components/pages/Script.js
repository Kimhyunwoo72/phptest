import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import ContContact from "../layout/ContContact";
import ScriptCon from "../includes/ScriptCon";
import Footer from "../layout/Footer";
import { gsap } from "gsap";
import Loading from "../basics/Loading";
import axios from "axios";

// function Script() {
//     return (
//         <>
//         <Header color = "light" />
//         <Contents>
//             <ContTitle title = {["SCRIPT", "JAVASCRIPT", "light"]}/>
//             <ScriptCon color = "light" />
//             <ContContact  />
//             <Footer color = "light" />
//         </Contents>
//         <Footer color = "light" />
//     </>
//     )
// }

class Script extends React.Component {
    state = {
        isLoading: true,
        ports: []
    }
    scriptAnimation =()=>{
        setTimeout(() => {
            // .main__inner > div:nth-child(1)
            gsap.to("#header", {
                duration:0.4, 
                top:0
            })
            gsap.to("#footer", {
                duration:0.4, 
                bottom:0,
                delay:0.2
            })
            gsap.to(".cont__title strong", {
                duration:0.5, 
                x:0,
                y:0,
                opacity: 1,
                delay: 1,
                ease: "power4.out"
            })
            gsap.to(".cont__title em", {
                duration:0.5, 
                x:0,
                y:0,
                opacity: 1,
                delay: 1.3,
                ease: "power4.out"
            })
            gsap.to(".script__inner", {
                duration:0.5, 
                x:0,
                y:0,
                opacity: 1,
                delay: 1.6,
            })
        });
    }


    //async & axios는 다 다운받고 실행해라라는 명령어
    getScript = async ()=>{
        //{ data : { data: {ports}}} 은 경로의 파일만 가져오게 설정하는 것.
        const lists = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=6c3fec69f8d9c81f8c2c82b8b4d4da4c&query=Avengers") 

        this.setState({lists, isLoading: false}) //위 가져온 데이터를 ports에 저장
console.log(lists)
        //데이터 불러오는지 확인
        // console.log(ports)

        setTimeout(() => {
            console.log("두번째 시작")
            this.setState({isLoading: false})
            this.scriptAnimation()
        }, 1600);
    }

    componentDidMount(){
        setTimeout(() => {
            console.log("첫번째 시작")
            document.getElementById("loading").classList.remove("loading__active")
            document.querySelector("body").style.background = "#F0EEEB"
            this.getScript()
        }, 2000);
    }

    render(){
        const {isLoading, lists} = this.state;
        
        return (
            <>
                {isLoading ? (
                    <Loading color = "light" />
                ) : (
                    <>
                        <Header color = "light" />
                        <Contents>
                            <ContTitle title = {["SCRIPT", "JAVASCRIPT", "light"]}/>
                            <ScriptCon color = "light" lists={lists} />
                            <ContContact  />
                            <Footer color = "light" />
                        </Contents>
                        <Footer color = "light" />
                    </>
                )}
            </>
        )
    }
}
export default Script;
