import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { CrossImg } from "./crossImg"
import { TextBlock } from "./textBlock"

export const AnsharingProto = ({url, textData}) => {
  return (
    <>
      <Container className='position-relative'>
        <CrossImg url={url} />
        <Container className='position-absolute top-0 pt-5'>
          <Row>
            <Col md />
            <Col md>
              <TextBlock title={textData.title} body={textData.body} />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}