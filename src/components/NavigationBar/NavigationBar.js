import React from 'react';
import { Nav, Navbar, Image} from 'react-bootstrap';
import './NavigationBar.css';
import Apple from './logo.svg';


 

export const NavigationBar = () => (
    <div className='hooman'>
        <Navbar expand='lg' className='hello'>
            <Navbar.Brand className="phutu" href="/"><Image src={Apple} height='25' alt='Apple'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item className="nada"><Nav.Link href="/"><p>For Business</p></Nav.Link></Nav.Item>
                    <Nav.Item className="nada"><Nav.Link href='contact'><p>Sign in</p></Nav.Link></Nav.Item>
                    <Nav.Item className="nada"><Nav.Link href="nomatch"><p>Sign up</p></Nav.Link></Nav.Item>
                    <Nav.Item className="nada er"><Nav.Link href="about"><p>Hire out your Car</p></Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
)