import React from 'react'

import {Container} from 'react-bootstrap'
import {Header} from '../../components/nav'
import { BasicBlock } from "../../components/basicBlock"
import {CrossImg} from "../../components/crossImg"

import assemble from '../../data/freed/assembleImg.png'
import components from '../../data/freed/componentsImg.png'
import forming from '../../data/freed/formingImg.png'
import handsonCross from '../../data/freed/handsOnCrossImg.png'
import head from '../../data/freed/headImg.png'
import intro from '../../data/freed/introImg.png'
import print from '../../data/freed/printImg.png'
import processCross from '../../data/freed/processCrossImg.png'
import showcaseBg from '../../data/freed/showcaseBgImg.png'
import showcaseCross from '../../data/freed/showcaseCrossImg.png'
import usbBg from '../../data/freed/usbBgImg.png'
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