import React from 'react'
import {Container} from 'react-bootstrap'
import Header from '../../components/nav'
import { AlzheimerTitle } from "../../components/alzheimerTitle"
import { BasicBlock } from "../../components/basicBlock"

import arImg from '../../data/alzheimerData/arImg.png'
import communityImg from '../../data/alzheimerData/communityImg.png'
import distortionImg from '../../data/alzheimerData/distortionImg.png'
import headImg from '../../data/alzheimerData/headImg.png'
import ideationImg from '../../data/alzheimerData/ideationImg.png'
import interviewImg from '../../data/alzheimerData/interviewImg.png'
import journeyImg from '../../data/alzheimerData/journeyImg.png'
import landingImg from '../../data/alzheimerData/landingImg.png'
import learningImg from '../../data/alzheimerData/learningImg.png'
import mockupImg from '../../data/alzheimerData/mockupImg.png'
import nursingImg from '../../data/alzheimerData/nursingImg.png'
import refaceImg from '../../data/alzheimerData/refaceImg.png'
import registerImg from '../../data/alzheimerData/registerImg.png'
import userflowImg from '../../data/alzheimerData/userflowImg.png'
import wQuestionImg from '../../data/alzheimerData/wQuestionsImg.png'
import alzheimerData from '../../data/alzheimerData/alzheimerData.json'
import { CrossImg } from "../../components/crossImg"

const Alzheimar = () => {
  return (
    <>
      <Header>
        <Container fluid='md'>
        <BasicBlock url={headImg} imgAlt='' textData={alzheimerData.header} isHeader />
        <AlzheimerTitle title='Research' />
        <BasicBlock url={interviewImg} textData={alzheimerData.interview} />
        <BasicBlock url={nursingImg} textData={alzheimerData.visiting} />

        <AlzheimerTitle title='W-Questions' />
          <CrossImg url={wQuestionImg} />

          <AlzheimerTitle title='Ideation' />
          <BasicBlock textData={alzheimerData.ideation} />
          <CrossImg url={ideationImg} />

          <AlzheimerTitle title='User research' />
          <BasicBlock textData={alzheimerData.userResearch} />
          <CrossImg url={journeyImg} />

          <AlzheimerTitle title='Mock-ups' />
          <BasicBlock url={mockupImg} textData={alzheimerData.mockUp}/>
          <CrossImg url={userflowImg} />

          <AlzheimerTitle title='Prototype' />
          <BasicBlock url={landingImg} textData={alzheimerData.loading} />
          <BasicBlock url={registerImg} textData={alzheimerData.register} />
          <BasicBlock url={learningImg} textData={alzheimerData.learning} />
          <BasicBlock url={communityImg} textData={alzheimerData.community} />
          <BasicBlock url={distortionImg} textData={alzheimerData.distortion} />
          <BasicBlock url={arImg} textData={alzheimerData.camera} />
          <BasicBlock url={refaceImg} textData={alzheimerData.reface} />
        </Container>
      </Header>
    </>
  )
}

export default Alzheimar