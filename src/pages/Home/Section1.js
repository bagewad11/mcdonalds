import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="hero_section" id="home">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} className="img-fluid animated-image" alt="Hero" />
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center animated-text">
              <h1 className="text-white">McDonald's</h1>
              <h2 className="text-white">Lovin’ Every Bite, Every Moment!</h2>
              
              <Link to="menu" className="btn order_now">
                Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
