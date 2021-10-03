import React from 'react'


export const VideoBlock = ({videoSource}) => {
  return (
    <div>
      <video width='550' height='auto' loop autoPlay muted>
        <source src={videoSource} type='video/mp4'/>
      </video>
    </div>
  )
}