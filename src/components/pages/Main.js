import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import MainCont from "../includes/MainCont";
import Footer from "../layout/Footer";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

// function Main() {
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <MainCont />
//             </Contents>
//             <Footer />
//         </>
//     )
// }


// 클레스 사용
class Main extends React.Component {
    //state는 변수선언
    state = {
        isLoading: true,
    }

    getSite = () => {
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
            gsap.to(" .main__inner > div:nth-child(1)", {
                duration:0.4, 
                opacity: 1,
                y:0,
                delay: 0.8,
                ease: "power4.out"
            })
            gsap.to(" .main__inner > div:nth-child(2)", {
                duration:0.4, 
                opacity: 1,
                y:0,
                delay: 1,
                ease: "power4.out"
            })
            gsap.to(" .main__inner > div:nth-child(3)", {
                duration:0.4, 
                opacity: 1,
                y:0,
                delay: 1.2,
                ease: "power2.out"
            })
            gsap.to(" .main__inner > div:nth-child(4)", {
                duration:0.4, 
                opacity: 1,
                y:0,
                delay: 1.4,
                ease: "power2.out"
            })
        }, 1000);
    }

    // 페이지 열기
    getMain = ()=>{
        setTimeout(() => {
            this.setState({isLoading: false})
            this.getSite()
        }, 1600);
    }
    
    //사이트 로딩이 될 때, 부드럽게 사라지기
    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active")
            // this.setState({isLoading:false})
            this.getMain()
        }, 2000);
    }

    //render는 출력함수
    render(){
        const {isLoading} = this.state;


        return (
            <>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Header />
                        <Contents>
                            <MainCont />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>
        )
    }
}
export default Main;