import React from 'react'

import {Container} from 'react-bootstrap'
import Header from '../../components/nav'
import { BasicBlock } from "../../components/basicBlock"
import {CrossImg} from "../../components/crossImg"

import assemble from '../../data/freed/assembleImg.webp'
import components from '../../data/freed/componentsImg.webp'
import forming from '../../data/freed/formingImg.webp'
import handsonCross from '../../data/freed/handsOnCrossImg.webp'
import head from '../../data/freed/headImg.webp'
import intro from '../../data/freed/introImg.webp'
import print from '../../data/freed/printImg.webp'
import processCross from '../../data/freed/processCrossImg.webp'
import showcaseBg from '../../data/freed/showcaseBgImg.webp'
import showcaseCross from '../../data/freed/showcaseCrossImg.webp'
import usbBg from '../../data/freed/usbBgImg.webp'
import freedData from '../../data/freed/freedData'
import freedVideo from '../../data/freed/FREE-DVideo.mp4'

const Freed = () => {
  return (
    <>
      <Header>
        <Container fluid='sm'>
          <BasicBlock url={head} textData={freedData.header} isHeader />
          <BasicBlock url={intro} textData={freedData.introduction} />
        </Container>

        <CrossImg url={handsonCross} title='Hands-on' white />

        <Container fluid='sm'>
          <BasicBlock url={forming} textData={freedData.forming} />
          <BasicBlock url={components} textData={freedData.components} />
        </Container>

        <CrossImg url={processCross} title='Manufacture process' />

        <Container fluid='sm'>
          <BasicBlock url={print} textData={freedData.print} />
          <BasicBlock url={assemble} textData={freedData.assemble} />
          <CrossImg url={usbBg} />
        </Container>

        <CrossImg url={showcaseCross} title='Showcase' white />

        <Container fluid='sm'>
          <CrossImg url={showcaseBg} />
        </Container>

        <Container fluid='sm' className='py-5 my-5'>
          <video className='w-100' loop autoPlay muted>
            <source src={freedVideo} type='video/mp4' />
          </video>
        </Container>
      </Header>
    </>
  )
}

export default Freed;