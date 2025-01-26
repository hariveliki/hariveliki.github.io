import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Haris Alic</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={6} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                <span className="purple">Work Experience in a Nutshell</span>
              </h1>
              <p className="home-about-body">
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    I started my apprenticeship in logistics for ABB where we
                    build turbo chargers. The focus on supply chain and business
                    processes led to a professional degree in industrial
                    engineering. This gave me the opportunity to lead a team in
                    the logistics department for the retailer Globus. The next
                    step was to switch to a different department and work in
                    various jobs in two software projects. During that time, I
                    decided to focus on software development and started to
                    study data science. For the future the goal is to lead big
                    software projects and help companies shift to the digital
                    era.
                  </p>
                </blockquote>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
