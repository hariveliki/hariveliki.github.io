import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple">Workself</span>
            </h1>
            <p className="home-about-body">
              I have worked in the following professions:
              <ul>
                <li>
                  <span className="purple">Software Developer</span>
                </li>
                <li>
                  <span className="purple">Application Manager</span>
                </li>
                <li>
                  <span className="purple">Scrum Master</span>
                </li>
                <li>
                  <span className="purple">Data Analyst</span>
                </li>
                <li>
                  <span className="purple">Logistics Coordinator</span>
                </li>
              </ul>
              And in the following sectors:
              <ul>
                <li>
                  <span className="purple">Retail</span>
                </li>
                <li>
                  <span className="purple">Manufacturing</span>
                </li>
                <li>  
                  <span className="purple">Logistics</span>
                </li>
              </ul>
              I have a good understanding of the following topics:
              <ul>
                <li>
                  <span className="purple">Software Development</span>
                </li>
                <li>
                  <span className="purple">Agile Project Management</span>
                </li>
                <li>
                  <span className="purple">ERP and PIM systems</span>
                </li>
                <li>
                  <span className="purple">Business Processes</span>
                </li>
              </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hariveliki"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/haris-alic-4a545a151/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
