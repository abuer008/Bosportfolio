import React from 'react'

import {Container} from 'react-bootstrap'
import Header from '../../components/nav'
import { BasicBlock } from "../../components/basicBlock"
import { CrossImg } from "../../components/crossImg"

import analyseImg from '../../data/ansharing/analyseImg.webp'
import commImg from '../../data/ansharing/commImg.webp'
import foodImg from '../../data/ansharing/foodImg.webp'
import headerImg from '../../data/ansharing/headerImg.webp'
import interviewImg from '../../data/ansharing/interviewImg.webp'
import landingImg from '../../data/ansharing/landingImg.webp'
import letterImg from '../../data/ansharing/letterImg.webp'
import personalImg from '../../data/ansharing/personalImg.webp'
import prototypeCrossImg from '../../data/ansharing/prototypeCrossImg.webp'
import registerImg from '../../data/ansharing/registerImg.webp'
import sharingImg from '../../data/ansharing/sharingImg.webp'
import storyImg from '../../data/ansharing/storyImg.webp'
import userflowImg from '../../data/ansharing/userflowImg.webp'
import researchCrossImg from '../../data/ansharing/researchCrossImg.webp'
import wireCrossImg from '../../data/ansharing/wireCrossImg.webp'
import wireframeImg from '../../data/ansharing/wireframeImg.webp'
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