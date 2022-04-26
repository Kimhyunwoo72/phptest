import React, { useEffect, useState } from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import ContContact from "../layout/ContContact";
import YotubeList from "../includes/YotubeList";
import YotubeSearch from "../includes/YotubeSearch";
import Loading from "../basics/Loading";
import Footer from "../layout/Footer";
// require('dotenv').config()
import { gsap } from "gsap";



function Youtube() {
    const [videos, setVideos] = useState([])

     function youtubeAnimation() {
            setTimeout( () => {
                document.getElementById("loading").classList.remove("loading__active")
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
                    duration:0.5, 
                    x:0,
                    y:0,
                    opacity: 1,
                    delay: 1.6,
                })
            },2000);
        }

    const search = (query)=> {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=27&q=${query}&key=${process.env.REACT_APP_API}&type=video`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    }

    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=27&q=J.Fla&key=${process.env.REACT_APP_API}&type=video`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setVideos(result.items)
                youtubeAnimation()
            })
            .catch(error => console.log('error', error));
    },[])
  return (
        <>
         <Loading/>
            <Header />
            <Contents>
                <ContTitle title = {["youtube", "JAVASCRIPT"]}/>
                    <YotubeSearch onSearch={search}/>
                    <YotubeList videos={videos}/>
                <ContContact  />
                <Footer />
            </Contents>
            <Footer />
        </>
  )
}

export default Youtube
