import React from 'react'

export const TextBlock = ({title, body}) => {
  return (
    <>
      <h4 className='pb-5'>{title}</h4>
      <p className='lh-lg'>{body}</p>
    </>
  )
}