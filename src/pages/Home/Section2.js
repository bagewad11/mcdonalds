import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Goodfood from "../../assets/about/good-food.png";
import Goodpeole from "../../assets/about/good-people.png";
import Goodbusiness from "../../assets/about/Good Neighbours.jpg";
import { Link as ScrollLink } from "react-scroll";

// Mock Data Cards
const mockData = [
  {
    image: Goodfood,
    title: "Good Food",
    paragraph: `We have been continuously enhancing menu and nutritional choices in response to customers’ needs and nutrition preferences. We take the well-being of our customers very seriously and we’ve worked hard on our recipes and menu choice to reduce fat, salt and sugar in our food and provide our customers with wholesome food choices.`,
  },
  {
    image: Goodpeole,
    title: "Good People",
    paragraph: `Our people make us the leaders that we are. Driven by a rich culture that has anchored the company’s position as the world’s leading restaurant chain, McDonald’s, continual commitment towards its employees and consumers has become a trademark for its success.`,
  },
  {
    image: Goodbusiness,
    title: "Good Neighbours",
    paragraph: `We conduct our business in a way that is good for the people, good for the community and good for the planet. We take our social responsibilities and our commitment to the society and ethics seriously.`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>What we stand for</h2>
              <p>
                We take great pride in our food! It is made with the best
                quality, fresh ingredients which are sourced from our local
                suppliers in India who have been our partners for over two
                decades. We serve food that not only tastes good, but also makes
                our customers feel good.
              </p>
              <Link as={ScrollLink} to="/" spy={true} smooth={true} offset={-100} duration={500} className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
