import React from 'react'


export const VideoBlock = ({videoSource}) => {
  return (
    <div>
      <video width='550' height='auto' className='w-100' loop autoPlay muted>
        <source src={videoSource} type='video/mp4'/>
      </video>
    </div>
  )
}