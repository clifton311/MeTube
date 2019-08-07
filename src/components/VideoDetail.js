import React from 'react';

const VideoDetail = ({video}) => {
  
  if(!video) {
    return <div>Loading...</div>
  } 

  const VideoSRC = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div> 
      <div className="ui embed">
        <iframe src={VideoSRC} title="videoplayer"/>
      </div>
      <div className="ui segment">
         <h4 className="ui segment">{video.snippet.title} </h4> 
         <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail