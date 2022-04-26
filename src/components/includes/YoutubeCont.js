import React from 'react';
import YotubeList from "../includes/YotubeList";
// import YotubeSearch from "../includes/YotubeSearch";
function YoutubeCont(props) {
  return (
    <section className="youtube__cont">
      <div className="container">
        <div className="youtube__inner">
          {/* <YotubeSearch /> */}
          <YotubeList items={props.lists}  />
        </div>
      </div>
    </section>
  )
}
export default YoutubeCont;