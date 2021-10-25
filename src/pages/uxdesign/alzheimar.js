import React from 'react'
import {Container} from 'react-bootstrap'
import Header from '../../components/nav'
import { AlzheimerTitle } from "../../components/alzheimerTitle"
import { BasicBlock } from "../../components/basicBlock"

import arImg from '../../data/alzheimerData/arImg.webp'
import communityImg from '../../data/alzheimerData/communityImg.webp'
import distortionImg from '../../data/alzheimerData/distortionImg.webp'
import headImg from '../../data/alzheimerData/headImg.webp'
import ideationImg from '../../data/alzheimerData/ideationImg.webp'
import interviewImg from '../../data/alzheimerData/interviewImg.webp'
import journeyImg from '../../data/alzheimerData/journeyImg.webp'
import landingImg from '../../data/alzheimerData/landingImg.webp'
import learningImg from '../../data/alzheimerData/learningImg.webp'
import mockupImg from '../../data/alzheimerData/mockupImg.webp'
import nursingImg from '../../data/alzheimerData/nursingImg.webp'
import refaceImg from '../../data/alzheimerData/refaceImg.webp'
import registerImg from '../../data/alzheimerData/registerImg.webp'
import userflowImg from '../../data/alzheimerData/userflowImg.webp'
import wQuestionImg from '../../data/alzheimerData/wQuestionsImg.webp'
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