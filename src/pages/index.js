import React from "react"
import { Header } from "../components/nav"
import { Container } from "react-bootstrap"
import {MainBlock} from "../components/mainBlock"

import mainImg from "../data/mainImg.png"
import LeichaVideo from '../data/leichaData/leichaVideo.mp4'
import FreedVideo from '../data/freed/FREE-DVideo.mp4'
import leichaData from '../data/leichaData/leichaData.json'
import freedData from '../data/freed/freedData'
import alzheimer from '../data/alzheimerData/headImg.png'
import alzheimerData from '../data/alzheimerData/alzheimerData.json'
import ansharing from '../data/ansharing/headerImg.png'
import ansharingData from '../data/ansharing/ansharingData.json'

export default function Home() {
  return (<>
    <Header>
      <Container fluid='sm' className='position-absolute top-50 start-50 translate-middle'>
        <img src={mainImg} alt='Hey, I am Bo.' className='w-100' />
      </Container>

      <Container fluid='sm' className='position-absolute start-50 top-100 py-5 translate-middle-x'>
        <MainBlock url={LeichaVideo} textData={leichaData.header} buttonLink='/product-design/leicha' buttonText='Enter Leicha' isVideo />
        <MainBlock url={FreedVideo} textData={freedData.header} buttonLink='/product-design/freed' buttonText='Enter Free D' isVideo />
        <MainBlock url={alzheimer} textData={alzheimerData.header} buttonLink='/uxdesign/alzheimar' buttonText='Enter AlzheimAR' />
        <MainBlock url={ansharing} textData={ansharingData.header} buttonLink='/uxdesign/ansharing' buttonText='Enter Ansharing' />
      </Container>
    </Header>
  </>)
}
