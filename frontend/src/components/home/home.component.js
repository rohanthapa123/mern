import React from 'react'
import {  Nav,  Navbar, Container, Row, Col} from "react-bootstrap";
import logo from "../../assets/images/Xiaomi-Logo-2014.png";
import {FaMapMarked, FaPhoneAlt} from "react-icons/fa"
import "../../assets/css/global.css"
import { NavLink } from 'react-router-dom';
import "./footer-layout.css"
export const NavBar = (props) => {
  return (
    <>
    <Navbar bg="light" variant="light" style={{maxHeight: "30px"}}>
        <Container>
            <Row>
                <Col><FaPhoneAlt/><span className="ms-2 me-3">9744375757</span>
                <span><FaMapMarked/></span>
                </Col>
            </Row>
            <FaPhoneAlt/>
        </Container>
    </Navbar>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Container className='logo-image '>
            <img alt="logo" src={logo} className="img img-fluid logo-image " />
            </Container>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className={"nav-link"} to="/">Home</NavLink>
          </Nav>
          <Nav>
            <NavLink className={"nav-link"} to="/cart">Cart (0)</NavLink>
            <NavLink className={"nav-link"} to={props.link1}>{props.opt1}</NavLink>
            <NavLink className={"nav-link"} to={props.link2}>{props.opt2}</NavLink>
            <NavLink className={"nav-link"} to={props.link3}>{props.opt3}</NavLink>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}
export const Footerlayout = () =>{
  return (
    <>
    <footer className="bg-dark footer-position" >
        <Container fluid className="text-white">
          <Row>
            <Col sm={12} lg={4}>
              First Col
            </Col>
            <Col sm={12} lg={4}>
              Second Col
            </Col>
            <Col sm={12} lg={4}>
              Third Col
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}