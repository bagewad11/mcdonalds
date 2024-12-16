import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  // Scroll State
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Location</h5>
                <p>25, Bazaar Lane,  </p>
                <p>Bengali Market,</p>
                <p>New Delhi 110001</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Working Hours</h5>
                <p>Mon-Fri: 10:00AM - 11:00PM</p>
                <p>Saturday: 10:00AM - 11:00PM</p>
                <p>Sunday: 10:00PM - 11:00PM</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Order Now</h5>
                <p>Craving for It? Order Now!</p>
                <p>
                  <Link to="tel:000000000" className="calling">
                    00000000000
                  </Link>
                </p>
              </div>
            </Col>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Follow Us</h5>
                <p>Join the McJourney!</p>
                <ul className="list-unstyled text-center mt-2">
                  <li>
                    <Link to="https://www.facebook.com/McDonaldsIndia/">
                      <i class="bi bi-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://x.com/mcdonaldsindia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                      <i class="bi bi-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/mcdonalds_india/?hl=en">
                      <i class="bi bi-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.youtube.com/@McDonaldsIndiaOfficial">
                      <i class="bi bi-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="copy_right">
            <Col>
              <div>
                <ul className="list-unstyled text-center mb-0">
                  <li>
                    <Link to="/">
                      © 2024 <span>McDonald's</span>. All Rights Reserved
                    </Link>
                  </li>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Terms Of Use</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Sroll To Top */}
      {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          <i class="bi bi-arrow-up"></i>
        </div>
      )}
    </>
  );
}

export default Footer;
