import React from "react"
import Header from "../components/nav"
import { Container, Row, Col } from "react-bootstrap"
import {IconContext} from "react-icons"
import {FiChevronsDown} from 'react-icons/fi'
import {MainBlock} from "../components/mainBlock"

import mainImg from "../data/mainImg.png"
import LeichaVideo from '../data/leichaData/leichaVideo.mp4'
import FreedVideo from '../data/freed/FREE-DVideo.mp4'
import leichaData from '../data/leichaData/leichaData.json'
import freedData from '../data/freed/freedData'
import alzheimer from '../data/alzheimerData/headImg.webp'
import alzheimerData from '../data/alzheimerData/alzheimerData.json'
import ansharing from '../data/ansharing/headerImg.webp'
import ansharingData from '../data/ansharing/ansharingData.json'

export default function Home() {
  return (<div>
    <Header>
      <Container className='align-items-center py-5 my-5'>
        <div className='p-5 m-5' />
        <img src={mainImg} alt='Hey, I am Bo.' className='w-100' />
          <IconContext.Provider value={{size: '2em'}}>
            <div className='position-absolute start-50 translate-middle-x'>
              <h4><FiChevronsDown /> Scroll to view</h4>
            </div>
          </IconContext.Provider>
        <div className='p-5 m-5' />
      </Container>


      <Container className='py-5 my-5'>
        <MainBlock url={LeichaVideo} textData={leichaData.header} buttonLink='/product-design/leicha' buttonText='Enter Leicha' isVideo />
        <MainBlock url={FreedVideo} textData={freedData.header} buttonLink='/product-design/freed' buttonText='Enter Free D' isVideo />
        <MainBlock url={alzheimer} textData={alzheimerData.header} buttonLink='/uxdesign/alzheimar' buttonText='Enter AlzheimAR' />
        <MainBlock url={ansharing} textData={ansharingData.header} buttonLink='/uxdesign/ansharing' buttonText='Enter Ansharing' />
      </Container>
    </Header>
  </div>)
}
