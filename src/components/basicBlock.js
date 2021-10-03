import React from 'react'

import {Container, Row, Col} from 'react-bootstrap'

import {TextBlock} from "./textBlock"
import {VideoBlock} from "./videoBlock"
import {Headline} from "./headline"

export const BasicBlock = ({url, textData, imgAlt = '', isVideo = false, isHeader = false}) => {

  return (
    <>
      <Container fluid='lg' className='p-md-5 my-md-5 w-100'>
        <Row>
          <Col md >
            {isVideo ? <VideoBlock videoSource={url} /> : <img width='550' src={url} alt={imgAlt} />}
          </Col>
          <Col md>
            {isHeader ? <Headline headline={textData.headline} subheadline={textData.subheadline} body={textData.body} /> : <TextBlock title={textData.title} body={textData.body}/>}
          </Col>
        </Row>
      </Container>
    </>
  )
}