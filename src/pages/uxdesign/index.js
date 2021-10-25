import React from 'react'
import Header from '../../components/nav'
import { SubPageHead } from "../../components/subPageHead"
import {Container} from 'react-bootstrap'

import UXHeadImg from '../../data/uxdesignHeadImg.webp'
import alzheimer from '../../data/alzheimerData/headImg.webp'
import alzheimerData from '../../data/alzheimerData/alzheimerData.json'
import ansharing from '../../data/ansharing/headerImg.webp'
import ansharingData from '../../data/ansharing/ansharingData'
import { MainBlock } from "../../components/mainBlock"

const Uxdesign = () => {
  return (
    <div>
      <Header>
        <SubPageHead url={UXHeadImg} title='UX/UI design' />

        <Container fluid='sm' className='position-absolute start-50 top-100 translate-middle-x'>
          <MainBlock url={alzheimer} textData={alzheimerData.header} buttonLink='/uxdesign/alzheimar' buttonText='Enter AlzheimAR' />
          <MainBlock url={ansharing} textData={ansharingData.header} buttonLink='/uxdesign/ansharing' buttonText='Enter Ansharing' />
        </Container>
      </Header>
    </div>
  )
}

export default Uxdesign;