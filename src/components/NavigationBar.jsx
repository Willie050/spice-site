import React, { useState, useEffect} from 'react';
import { Row, Col, Navbar, NavDropdown, Nav, Button, Image } from 'react-bootstrap'
import logo from '../media/logo.jpg'

const NavigationBar = () => {
    return(
        <>
            <Navbar style={{backgroundColor: "#009999"}}>
                <Navbar.Brand>
                    <span>
                        <Image fluid={true} src={logo} rounded width="80px" style={{marginLeft:"10px"}}/>
                        <span>   Will's Foodie Frenzy</span>
                    </span>
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default NavigationBar