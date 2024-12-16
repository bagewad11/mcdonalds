import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../assets/menu/burger-11.png";
import Image2 from "../../assets/menu/burger-12.png";
import Image3 from "../../assets/menu/burger-13.png";
import Image4 from "../../assets/menu/burger-14.png";
import Image5 from "../../assets/menu/burger-15.png";
import Image6 from "../../assets/menu/burger-16.png";
import Image7 from "../../assets/menu/burger-17.png";
import Image8 from "../../assets/menu/burger-18.png";
import Image9 from "../../assets/menu/burger-19.png";
import Image10 from "../../assets/menu/burger-20.png";
import Image11 from "../../assets/menu/burger-21.png";
import Image12 from "../../assets/menu/burger-22.png";


import Cards from "../../components/Layouts/Cards";
import { Link } from "react-router-dom";

// Mock Data Cards
const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Mc Egg",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    price: 0.00,
  },
  {
    id: "0002",
    image: Image2,
    title: "Maharaja Mac-Veg",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    price: 0.00,
  },
  {
    id: "0003",
    image: Image3,
    title: "Big Spicy Chicken-wrap",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 4,
    price: 0.00,
  },
  {
    id: "0004",
    image: Image4,
    title: "Mc Spicy Chicken-Single",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    price: 0.00,
  },
  {
    id: "0005",
    image: Image5,
    title: "Mc Veggie-Single",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3.0,
    price: 0.00,
  },
  {
    id: "0006",
    image: Image6,
    title: "Big Spicy-Paneer wrap-single",
    paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 3,
    price: 0.00,
  },
  {
    id: "0007",
    image: Image7,
    title: "Mcaloo-tikki Cheese",
    paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    price: 0.00,
  },
  {
    id: "0008",
    image: Image8,
    title: "Filet-o-Fish",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 0.00,
  },
  {
    id: "0009",
    image: Image9,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 0.00,
  },
  {
    id: "00010",
    image: Image10,
    title: "Mc Veggie Single",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 0.00,
  },
  {
    id: "00011",
    image: Image11,
    title: "Mcspicy Paneer Single",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 0.00,
  },
  {
    id: "00012",
    image: Image12,
    title: "Mc AlooTikki",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 0.00,
  },
  // Add more mock data objects as needed
];

// Rating Logical Data
const renderRatingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

function Section3() {
  return (
    <section className="menu_section" id="menu">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>Meals Made For You</h2>
            <p className="para">
            Start your day with McDonald’s
            </p>
          </Col>
        </Row>
        <Row>
          {mockData.map((cardData, index) => (
            <Cards
              key={index}
              image={cardData.image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              renderRatingIcons={renderRatingIcons}
            />
          ))}
        </Row>

        <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;
