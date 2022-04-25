
import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import ContContact from "../layout/ContContact";
// import YotubeSearch from "../includes/YotubeSearch";
import YoutubeCont from "../includes/YoutubeCont";
import YotubeList from "../includes/YotubeList";
import Footer from "../layout/Footer";
import { gsap } from "gsap";
import Loading from "../basics/Loading";
import axios from "axios";


// function Youtube() {
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <ContTitle title = {["CODING", "YOUTUBER"]} />
//                 <YoutubeCon />
//                 <ContContact />
//                 <Footer />
//             </Contents>
//         </>
//     )
// }

class Youtube extends React.Component {
    state = {
        isLoading: true,
        lists: [],
        searchs: []
    }
    YoutubeAnimation =()=>{
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
            gsap.to(".yotube_list", {
                duration:2, 
                x:0,
                y:0,
                opacity: 1,
                delay: 1.6,
            })
        });
    }


    //async & axios는 다 다운받고 실행해라라는 명령어
    getYoutubes = async ()=>{
        //{ data : { data: {ports}}} 은 경로의 파일만 가져오게 설정하는 것.
        // const { data : { data: {ports}}} = await axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=J.Fla&key=AIzaSyB82t9gGUp5oopFwlU4aCwPjnqYjdmj52A") 
        const lists = await axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=27&type=video&q=J.Fla&key=AIzaSyB82t9gGUp5oopFwlU4aCwPjnqYjdmj52A") 
        console.log(lists)
        this.setState({lists, isLoading: false}) //위 가져온 데이터를 ports에 저장

        //데이터 불러오는지 확인
        // console.log(ports)

        setTimeout(() => {
            console.log("두번째 시작")
            this.setState({isLoading: false})
            this.YoutubeAnimation()
        }, 1600);
    }

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active")
            document.querySelector("body").style.background = "#000"
            this.getYoutubes()
        }, 2000);
    }

    render(){
        const {isLoading, lists} = this.state;
        
        return (
            <>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Header />
                        <Contents>
                            <ContTitle title = {["YOUTUBER", "REFERENCE"]} />
                            {/* <YotubeList lists={lists} /> */}
                            {/* <YotubeSearch /> */}
                            <YoutubeCont lists={lists} />
                            <ContContact />
                            <Footer />
                        </Contents>
                    </>
                )}
            </>
        )
    }
}

export default Youtube;
