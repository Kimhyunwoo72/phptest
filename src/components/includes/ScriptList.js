import React from 'react'

function ScriptItem(props) {
    console.log(props)
    return (
        <li>
            <img src={`https://image.tmdb.org/t/p/w500/${props.video.poster_path}`} />
            <p className='title'>{props.video.title}</p>
        </li>
    )
}

function ScriptList(props) {
  return (
    <div className='script_list'>
        <div className="container">
            <ul>
                {props.items.data.results.map((list, index) => (
                    <ScriptItem key = {index} video={list} />
                    ))}
            </ul>
        </div>
    </div>
  )
}

export default ScriptList