import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";


const Header = () => {
  const [nav, setNav] = useState(false);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <RouterLink to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </RouterLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={ScrollLink} to="home" spy={true} smooth={true} offset={-100} duration={500}>
                Home
              </Nav.Link>
              <Nav.Link as={ScrollLink} to="about" spy={true} smooth={true} offset={-100} duration={500}>
                About
              </Nav.Link>
              <Nav.Link as={ScrollLink} to="menu" spy={true} smooth={true} offset={-100} duration={500}>
                Our Menu
              </Nav.Link>
              <Nav.Link as={ScrollLink} to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                Contact
              </Nav.Link>
              <Nav.Link as={ScrollLink}>
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
