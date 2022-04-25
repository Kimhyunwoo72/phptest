import React from 'react';
import YotubeList from "../includes/YotubeList";
// import YoutubeSearch from "../includes/YoutubeSearch";
function YoutubeCont(props) {
  return (
    <section className="youtube__cont">
      <div className="container">
        <div className="youtube__inner">
          <YotubeList items={props.lists}  />
        </div>
      </div>
    </section>
  )
}
export default YoutubeCont;