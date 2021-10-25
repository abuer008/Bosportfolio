import React from 'react'
import {Container} from 'react-bootstrap'

import Header from '../../components/nav'
import { BasicBlock } from "../../components/basicBlock"
import { CrossImg } from '../../components/crossImg'

import LeichaVideo from '../../data/leichaData/leichaVideo.mp4'
import introductionImg from '../../data/leichaData/introductionImg.webp'
import analyseImg from '../../data/leichaData/analysationImg.webp'
import formfindingImg from '../../data/leichaData/formFindingCrossImg.webp'
import ideationImg from '../../data/leichaData/ideationImg.webp'
import sketchingImg from '../../data/leichaData/sketchingImg.webp'
import feasibilityImg from '../../data/leichaData/feasibilityCrossImg.webp'
import printImg from '../../data/leichaData/3dprintImg.webp'
import materialImg from '../../data/leichaData/materialCrossImg.webp'
import textureSketchingImg from '../../data/leichaData/textureSketchingImg.webp'
import textureImg from '../../data/leichaData/textureImg.webp'
import testingFullImg from '../../data/leichaData/testingFullImg.webp'
import summaryCrossImg from '../../data/leichaData/summaryCrossImg.webp'
import modelImg from '../../data/leichaData/modelImg.webp'
import summaryImg from '../../data/leichaData/summaryImg.webp'
import leichaData from '../../data/leichaData/leichaData.json'

const Leicha = () => {
  return (
    <>
      <Header>
      <Container fluid='sm'>
        <BasicBlock url={LeichaVideo} textData={leichaData.header} isVideo isHeader />
        <BasicBlock url={introductionImg} textData={leichaData.introduction} />
        <BasicBlock url='#' textData={leichaData.inheritance}/>
        <BasicBlock url={analyseImg} textData={leichaData.Analysation} />
      </Container>

      <CrossImg url={formfindingImg} title='Form finding' />

      <Container fluid='sm'>
        <BasicBlock url={ideationImg} textData={leichaData.ideation}/>
        <CrossImg url={sketchingImg} />
      </Container>

      <CrossImg url={feasibilityImg} title='Feasibility testing' white />

      <Container fluid='sm'>
        <BasicBlock url={printImg} textData={leichaData['3dprint']} />
      </Container>

      <CrossImg url={materialImg} title='Material and process' />

      <Container fluid='sm'>
        <CrossImg url={textureSketchingImg} />
        <BasicBlock url={textureImg} textData={leichaData.texture} />
        <CrossImg url={testingFullImg} />
      </Container>

      <CrossImg url={summaryCrossImg} title='Summary' />

      <Container fluid='sm'>
        <BasicBlock url={modelImg} textData={leichaData.final} />
        <BasicBlock url={summaryImg} textData={leichaData.summary} />
      </Container>
      </Header>
      </>
  )
}

export default Leicha;