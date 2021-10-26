import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {Footer} from './footer'

const Header = ({children}) => {
  const data = useStaticQuery(graphql`
      query navData {
          allHeaderDataJson {
              edges {
                  node {
                      name
                      link
                      eventKey
                      id
                  }
              }
          }
          file(name: {eq: "logo"}) {
              publicURL
          }
      }
  `)

  console.log(data.allHeaderDataJson.edges)

  return (
    <div>
    <Navbar sticky='top' expand='lg' bg='white' variant='light'>
        <Navbar.Brand>
          <Link to='/'>
          <img src={data.file.publicURL} alt='' width='46' height='46' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse>
          <Nav className='m-auto' defaultActiveKey='/'>
          { data.allHeaderDataJson.edges.map(item => {
            return <Nav.Item key={item.node.id} className='mx-5 text-uppercase'>
              <Nav.Link href={item.node.link} eventKey={item.node.eventKey}>{item.node.name}</Nav.Link>
            </Nav.Item>
          })}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
      {children}
      <Footer />
    </div>
  )
}

export default Header

// export const navData = graphql`
//     {
//         allHeaderDataJson {
//             edges {
//                 node {
//                     name
//                     link
//                     eventKey
//                     id
//                 }
//             }
//         }
//         file(name: {eq: "logo"}) {
//             publicURL
//         }
//     }
// `
