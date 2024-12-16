import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section7() {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>We Guarantee</h4>
            <h2>
              {" "}
              To ensure a safe and delicious experience for all customers:{" "}
            </h2>
            <p>
              McDonald’s India brings you the Golden Guarantee Promise: 100%
              Safe, 100% Delicious. Whether it’s contactless dine-in, takeaway,
              delivery, or on-the-go, we ensure world-class health and safety
              standards for every experience
            </p>
            <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
              Call: 0000000000
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;
