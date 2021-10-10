import React from 'react'

export const CrossImg = ({url, title = '', white = false}) => {
  return (
    <div className='py-5 my-5'>
      <h1 className='position-absolute fw-bold pt-5 start-50' style={{color: white ? 'white' : 'black'}} >{title}</h1>
      <img src={url} alt='background image' className='img-fluid w-100' />
    </div>
  )
}