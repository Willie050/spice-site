import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Navbar, NavDropdown, Nav, Button, Image } from 'react-bootstrap'
import { SiApplemusic, SiSpotify, SiYoutube, SiInstagram, SiFacebook } from "react-icons/si";
import { BsList } from 'react-icons/bs'
import { GiShoppingCart } from 'react-icons/gi'
// import MediaQuery  from 'react-responsive'
import logo from '../media/logo.jpg'
import MediaQuery  from 'react-responsive';

const NavigationBar = () => {
    const [navbarExpand, setNavbarExpand] = useState(false)
    return(
        <>
            <Navbar expand="xl" expanded={navbarExpand} fixed='top' style={{backgroundColor: "#009999"}}>
                <Navbar.Brand>
                    <span>
                        <Image src={logo} rounded width="80px" style={{marginLeft:"10px"}}/>
                        <span style={{color:'white', fontFamily:"sans-serif", fontSize:"150%"}}>   Will's Foodie Frenzy</span>
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'white' }} onClick={()=>{setNavbarExpand(!navbarExpand)}}>
                    <span><BsList size='40px' style={{ color: 'white' }} /></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" style={{ color: 'white' }}>
                    {/* <Nav className="mr-auto" style={{ justifyContent: 'right' }}> */}
                        <Row style={{ marginLeft: '5px', backgroundColor: '#009999', width: '90%'}}>
                            <Col className='col-2'>
                                <Link style={{ color: "white", fontWeight: "700", fontSize: "25px", marginBottom: "5px", marginRight: "20px" }} onClick={()=>{setNavbarExpand(false)}} to="/">Home</Link>
                                </Col>
                                <Col className='col-2'>
                                <Link style={{ color: "white", fontWeight: "700", fontSize: "25px", marginBottom: "5px", marginRight: "20px" }} onClick={()=>{setNavbarExpand(false)}} to="/purchase">Purchase</Link>
                                </Col>
                                <Col className='col-7'>
                                </Col>
                                <Col className='col-1'>
                                <Link style={{ color: "white", fontWeight: "700", fontSize: "25px", marginBottom: "5px", marginRight: "20px" }} onClick={()=>{setNavbarExpand(false)}} to="about">
                                <GiShoppingCart size="2em" color="whitesmoke" />
                                </Link>
                                </Col>
                        </Row>
                    {/* </Nav> */}
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavigationBar