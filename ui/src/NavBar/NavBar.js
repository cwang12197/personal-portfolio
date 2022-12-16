import "./NavBar.css";
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

    return (
        <>
        <Navbar collapseOnSelect expand="md"
        fixed="top"
         className="animate-navbar nav-theme justify-content-between"
         variant="dark">
            <Navbar.Brand href="/">
                <img className="pfp" src="pfp.jpeg" alt='personal profile picture'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#blogs">Blogs</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
    )

}
export default NavBar