import React from 'react'
import Header from '../components/nav'

import { Container, Row, Col } from 'react-bootstrap'

import avatar from '../data/avatar.png'

export default function Contact() {
  return (
    <div>
      <Header>
        <Container className='py-5 my-5'>
          <Row>
            <Col xs={2} />
            <Col xs={1}>
              <img src={avatar} alt='avatar of bo' className='w-100' />
            </Col>
            <Col>
              <h1 className='display-1 fw-bold'>Bo Kong</h1>
              <h3 className='fw-bold'>
                <a href='mailto: kongboo@outlook.com' className='text-decoration-none text-info'>kongboo@outlook.com</a>
              </h3>
              <br />
              <h2 className='fw-bold lh-lg'>2011-2015</h2>
              <h5>Bachelor of Industrial design in Wuhan, China</h5>
              <h2 className='fw-bold lh-lg'>2016</h2>
              <h5>Industrial designer assistant (intership) in sentisina design lab, Berlin</h5>
              <h2 className='fw-bold lh-lg'>2017-2020</h2>
              <h5>Bachelor of Industrial design in the Muthesius Kunsthochschule, Kiel</h5>
              <h2 className='fw-bold lh-lg'>2020</h2>
              <h5>Industrial designer in Changsha, China</h5>
              <h2 className='fw-bold lh-lg'>2021-current</h2>
              <h5>Visual designer in EMO design agency, Shanghai, China</h5>
            </Col>
          </Row>
        </Container>
      </Header>
    </div>
  )
}