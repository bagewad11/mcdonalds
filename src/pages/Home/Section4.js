import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section"id="about">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                Hardcastle Restaurants Pvt. Ltd. (HRPL). owns & operates
                McDonald’s restaurants across West and South India. It has a
                Master Franchisee relationship with McDonald’s Corporation USA
                and has been the custodian of the brand since its inception in
                1996.
              </p>
              <p>
                HRPL is a direct subsidiary of Westlife Development Limited
                (WDL), a company listed on the Bombay Stock Exchange (BSE:
                505533). It currently operates over 300 McDonald’s restaurants
                across 42 cities and 11 states in West and South India.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/TOSI51ijfcI?si=M6FI7OOciKyCNxGS&autoplay=1&loop=1&playlist=TOSI51ijfcI&controls=0&showinfo=0&rel=0&modestbranding=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
    </>
  );
}

export default Section4;
