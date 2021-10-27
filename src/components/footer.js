import React from 'react'
import {Link} from 'gatsby'
import {DiJsBadge} from 'react-icons/di';
import {IconContext} from 'react-icons';
import {FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare, FaReact, FaPhoneSquare, FaBootstrap} from 'react-icons/fa';
import {BsMailbox2} from 'react-icons/bs';
import {GrGatsbyjs} from 'react-icons/gr'

import muthesiusLogo from '../data/muthesiusLogo.svg'

export const Footer = () => {
  return (
    <>
    <footer className='fixed-footer bg-light m-auto p-0'>
      {/*<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">*/}

      {/*  <div className="me-5 d-none d-lg-block">*/}
      {/*    <span>Get connected with me on social networks:</span>*/}
      {/*  </div>*/}

      {/*  <IconContext.Provider value={{size: '2em'}}>*/}
      {/*  <div>*/}
      {/*    <a href="" className="me-4 text-reset">*/}
      {/*      <FaFacebookSquare />*/}
      {/*    </a>*/}
      {/*    <a href="" className="me-4 text-reset">*/}
      {/*      <FaTwitterSquare />*/}
      {/*    </a>*/}
      {/*    <a href="" className="me-4 text-reset">*/}
      {/*      <FaInstagramSquare />*/}
      {/*    </a>*/}
      {/*    <a href="" className="me-4 text-reset">*/}
      {/*      <FaLinkedin />*/}
      {/*    </a>*/}
      {/*    <a href="" className="me-4 text-reset">*/}
      {/*      <FaGithubSquare />*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*  </IconContext.Provider>*/}
      {/*</section>*/}

      <section className="p-2">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Bos Portfolio
              </h6>
              <p>
                Thanks to visiting my personal portfolio, this portfolio is conducted with Gatsbyjs, Reactjs, organised with Bootstrap frameworks.
              </p>
              <IconContext.Provider value={{size: '1.5em'}}>
              <section className='d-flex flex-row'>
                <div className='p-2'>
                  <DiJsBadge />
                </div>

                <div className='p-2'>
                <FaReact />
                </div>

                <div className='p-2'>
                  <FaBootstrap />
                </div>

                <div className='p-2'>
                  <GrGatsbyjs />
                </div>
              </section>
              </IconContext.Provider>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Design Projects
              </h6>
              <p>
                <Link to="/product-design/leicha" className="text-reset">Leicha</Link>
              </p>
              <p>
                <Link to='/product-design/freed' className="text-reset">Free D</Link>
              </p>
              <p>
                <Link to='/uxdesign/alzheimar' className="text-reset">AlzheimAR</Link>
              </p>
              <p>
                <Link to="/uxdesign/ansharing" className="text-reset">Ansharing</Link>
              </p>
            </div>

            {/*<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">*/}
            {/*  <h6 className="text-uppercase fw-bold mb-4">*/}
            {/*    Relative links*/}
            {/*  </h6>*/}


            {/*  <a href='https://en.muthesius-kunsthochschule.de/'>*/}
            {/*    <img src={muthesiusLogo} className='m-auto w-50 py-2' />*/}
            {/*  </a>*/}
            {/*</div>*/}

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Contact
              </h6>
              <a href='mailto:kongboo@outlook.com' className='text-decoration-none text-reset'>
              <p>
                <BsMailbox2 />    kongboo@outlook.com
              </p>
              </a>
              <p><FaPhoneSquare />    + 49 15252347218</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
        © 2021 Copyright: <a className="text-reset fw-bold" href="https://bo-portfolio.com/">Bo Kong</a>
      </div>
    </footer>
      </>
  )
}