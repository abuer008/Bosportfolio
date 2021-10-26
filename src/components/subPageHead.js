import React from "react"
import { CrossImg } from "./crossImg"
import { FiChevronsDown } from "react-icons/fi"

export const SubPageHead = ({ title, url }) => {
  return (
    <>
      <div className='py-5' />
      <CrossImg url={url} />
      <div className="position-absolute start-50">
        <h1 className="display-1 fw-bold">{title}</h1>
        <h4 className="fw-bold"><FiChevronsDown /> Scroll to view</h4>
      </div>

      <div className='py-5 my-5' />
      <div className='py-5 my-5' />
    </>
  )
}