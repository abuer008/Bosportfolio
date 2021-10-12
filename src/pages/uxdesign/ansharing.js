import React from 'react'

import {Container} from 'react-bootstrap'
import Header from '../../components/nav'
import { BasicBlock } from "../../components/basicBlock"
import { CrossImg } from "../../components/crossImg"

import analyseImg from '../../data/ansharing/analyseImg.png'
import commImg from '../../data/ansharing/commImg.png'
import foodImg from '../../data/ansharing/foodImg.png'
import headerImg from '../../data/ansharing/headerImg.png'
import interviewImg from '../../data/ansharing/interviewImg.png'
import landingImg from '../../data/ansharing/landingImg.png'
import letterImg from '../../data/ansharing/letterImg.png'
import personalImg from '../../data/ansharing/personalImg.png'
import prototypeCrossImg from '../../data/ansharing/prototypeCrossImg.png'
import registerImg from '../../data/ansharing/registerImg.png'
import sharingImg from '../../data/ansharing/sharingImg.png'
import storyImg from '../../data/ansharing/storyImg.png'
import userflowImg from '../../data/ansharing/userflowImg.png'
import researchCrossImg from '../../data/ansharing/researchCrossImg.png'
import wireCrossImg from '../../data/ansharing/wireCrossImg.png'
import wireframeImg from '../../data/ansharing/wireframeImg.png'
import ansharingData from '../../data/ansharing/ansharingData.json'
import { AnsharingProto } from "../../components/ansharingProto"

const Ansharing = () => {
  return (
    <>
      <Header>
        <Container>
          <BasicBlock url={headerImg} textData={ansharingData.header} isHeader />
        </Container>

        <CrossImg url={researchCrossImg} title='Research' white />

        <Container>
          <BasicBlock url={interviewImg} textData={ansharingData.interview} />
          <BasicBlock url={sharingImg} textData={ansharingData.sharing} />
          <BasicBlock url={storyImg} textData={ansharingData.story} />
          <CrossImg url={personalImg} />
        </Container>

        <CrossImg url={wireCrossImg} title='Wireframes' />

        <Container>
          <BasicBlock url={wireframeImg} textData={ansharingData.userflow} />
          <CrossImg url={userflowImg} />
          <CrossImg url={analyseImg} />
        </Container>

        <CrossImg url={prototypeCrossImg} />

        <Container>
          <AnsharingProto url={landingImg} textData={ansharingData.landing} />
          <AnsharingProto url={registerImg} textData={ansharingData.register} />
          <img src={letterImg} className='w-50' />
          <CrossImg url={foodImg} />
          <AnsharingProto url={commImg} textData={ansharingData.community} />
        </Container>
      </Header>
    </>
  )
}

export default Ansharing