import React from "react";
import ScriptList from "../includes/ScriptList";

function ScriptCon(props) {
  // console.log("script",props)
  return (
    <section className="script__cont">
      <div className="container">
        <div className="script__inner">
          <div className="script_list">
            <div className="container">
              <ul>
                {props.videos.map((video, index) => (
                  <ScriptList key={index} video={video} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScriptCon;
