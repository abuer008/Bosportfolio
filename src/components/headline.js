import React from 'react'


export const Headline = ({headline, subheadline, body}) => {
  return (
    <>
      <h1 className='display-4 fw-bold'>{headline}</h1>
      <h3>{subheadline}</h3>
      <p>{body}</p>
    </>
  )
}