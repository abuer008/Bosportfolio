import React from 'react'
import {Container} from 'react-bootstrap'

import Header from '../../components/nav'
import { BasicBlock } from "../../components/basicBlock"
import { CrossImg } from '../../components/crossImg'

import LeichaVideo from '../../data/leichaData/leichaVideo.mp4'
import introductionImg from '../../data/leichaData/introductionImg.png'
import analyseImg from '../../data/leichaData/analysationImg.png'
import formfindingImg from '../../data/leichaData/formFindingCrossImg.png'
import ideationImg from '../../data/leichaData/ideationImg.png'
import sketchingImg from '../../data/leichaData/sketchingImg.png'
import feasibilityImg from '../../data/leichaData/feasibilityCrossImg.png'
import printImg from '../../data/leichaData/3dprintImg.png'
import materialImg from '../../data/leichaData/materialCrossImg.png'
import textureSketchingImg from '../../data/leichaData/textureSketchingImg.png'
import textureImg from '../../data/leichaData/textureImg.png'
import testingFullImg from '../../data/leichaData/testingFullImg.png'
import summaryCrossImg from '../../data/leichaData/summaryCrossImg.png'
import modelImg from '../../data/leichaData/modelImg.png'
import summaryImg from '../../data/leichaData/summaryImg.png'
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