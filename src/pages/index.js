import React from "react"
import { Header } from "../components/nav"
import { Container } from "react-bootstrap"
import {MainBlock} from "../components/mainBlock"

import mainImg from "../data/mainImg.png"
import LeichaVideo from '../data/leichaData/leichaVideo.mp4'
import FreedVideo from '../data/freed/FREE-DVideo.mp4'
import leichaData from '../data/leichaData/leichaData.json'
import freedData from '../data/freed/freedData'

export default function Home() {
  return (<>
    <Header>
      <Container fluid='sm' className='position-absolute top-50 start-50 translate-middle'>
        <img src={mainImg} alt='Hey, I am Bo.' className='w-100' />
      </Container>

      <Container fluid='sm' className='position-absolute start-50 top-100 py-5 translate-middle-x'>
        <MainBlock url={LeichaVideo} textData={leichaData.header} buttonLink='/product-design/leicha' buttonText='Enter Leicha' isVideo />
        <MainBlock url={FreedVideo} textData={freedData.header} buttonLink='/product-design/freed' buttonText='Enter Free D' isVideo />
      </Container>
    </Header>
  </>)
}
