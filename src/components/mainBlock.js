import React from 'react'

import {Link} from 'gatsby'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {Headline} from './headline'
import {VideoBlock} from "./videoBlock"

export const MainBlock = ({url, textData, buttonLink, buttonText, imgAlt = '', isVideo = false}) => {
  return (
    <>
      <Container className='py-5'>
        <Row>
          <Col md>
            {isVideo ? <VideoBlock videoSource={url} /> : <img width='550' src={url} alt={imgAlt} />}
          </Col>
          <Col md>
            <Headline headline={textData.headline} subheadline={textData.subheadline} body={textData.body} />
            <Link to={buttonLink}>
            <Button variant='outline-dark'>{buttonText}</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}