import React from 'react'
import Header from '../../components/nav'
import { SubPageHead } from "../../components/subPageHead"
import { Container } from 'react-bootstrap'

import productHeadImg from '../../data/productdesignHeadImg.png'
import leichaVideo from '../../data/leichaData/leichaVideo.mp4'
import leichaData from '../../data/leichaData/leichaData.json'
import freedVideo from '../../data/freed/FREE-DVideo.mp4'
import freedData from '../../data/freed/freedData'
import { MainBlock } from "../../components/mainBlock"

const ProductDesign = () => {
  return (
    <div>
      <Header>
        <SubPageHead title="Product design" url={productHeadImg} />

        <Container fluid='sm' className='position-absolute start-50 top-100 translate-middle-x'>
          <MainBlock url={leichaVideo} textData={leichaData.header} buttonLink='/product-design/leicha' buttonText='Enter Leicha' isVideo />
          <MainBlock url={freedVideo} textData={freedData.header} buttonLink='/product-design/freed' buttonText='Enter Free D' isVideo />
        </Container>
      </Header>
    </div>
  )
}

export default ProductDesign;