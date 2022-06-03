import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import ContTitle from "../layout/ContTitle";
import ContContact from "../layout/ContContact";
import ScriptCon from "../includes/ScriptCon";
import ScriptSearch from "../includes/ScriptSearch";
import Footer from "../layout/Footer";
import { gsap } from "gsap";
import Loading from "../basics/Loading";
// require('dotenv').config()

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

function Script() {
  const [videos, setVideos] = useState([]);

  function ScriptAnimation() {
    setTimeout(() => {
      document.getElementById("loading").classList.remove("loading__active");
      // .main__inner > div:nth-child(1)
      gsap.to("#header", {
        duration: 0.4,
        top: 0,
      });
      gsap.to("#footer", {
        duration: 0.4,
        bottom: 0,
        delay: 0.2,
      });
      gsap.to(".cont__title strong", {
        duration: 0.5,
        x: 0,
        y: 0,
        opacity: 1,
        delay: 1,
        ease: "power4.out",
      });
      gsap.to(".cont__title em", {
        duration: 0.5,
        x: 0,
        y: 0,
        opacity: 1,
        delay: 1.3,
        ease: "power4.out",
      });
      gsap.to(".script__inner", {
        duration: 0.5,
        x: 0,
        y: 0,
        opacity: 1,
        delay: 1.6,
      });
      gsap.to(".script_list", {
        duration: 0.5,
        x: 0,
        y: 0,
        opacity: 1,
        delay: 1.6,
      });
      gsap.to(".script__search", {
        duration: 0.5,
        x: 0,
        y: 0,
        opacity: 1,
        delay: 1.6,
      });
    }, 2000);
  }

  const search = (query) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=${query}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=Avengers`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(result.results);
        ScriptAnimation();
        // console.log("result",result)
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <Loading />
      <Header />
      <Contents>
        <ContTitle title={["SCRIPT", "JAVASCRIPT"]} />
        <ScriptSearch onSearch={search} />
        <ScriptCon videos={videos} />
        <ContContact />
      </Contents>
      <Footer />
    </>
  );
}

export default Script;
