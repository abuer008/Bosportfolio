import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export const AlzheimerTitle = ({title}) => {
  return (
    <>
      <Container fluid='md'>
        <Row className='p-5 m-5' />
        <Row>
          <Col md={6} />
          <Col md={1} style={{width: '10px', height: '45px', backgroundColor: '#6850F5'}} />
          <Col>
            <h1 className='fw-bold'>{title}</h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}