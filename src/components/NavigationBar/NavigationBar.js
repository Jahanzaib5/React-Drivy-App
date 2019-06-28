import React from 'react';
import { Nav, Navbar, Image} from 'react-bootstrap';
import './NavigationBar.css';
import {Container} from 'react-bootstrap';
import Apple from './logo.svg';


 

export const NavigationBar = () => (
    <Container-fluid className='hooman'>
        <Navbar expand='lg' className='hello'>
            <Navbar.Brand className="phutu" href="/"><Image src={Apple} height='25' alt='Apple'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item className="nada"><Nav.Link href="/"><p>For Business</p></Nav.Link></Nav.Item>
                    <Nav.Item className="nada"><Nav.Link href="/"><p>Sign in</p></Nav.Link></Nav.Item>
                    <Nav.Item className="nada"><Nav.Link href="/"><p>Any Questions?</p></Nav.Link></Nav.Item>
                    <Nav.Item className="nada er"><Nav.Link href="/about"><p>Hire out your Car</p></Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container-fluid>
)