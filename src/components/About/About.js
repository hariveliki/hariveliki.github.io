import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Sparetime from "./Sparetime";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center"}}>
          <Col md={10}>
            <Row>
              <Col md={6} className="px-4">
                <h1 className="project-heading" >
                  <span className="purple">Summary</span>
                </h1>
                <Aboutcard />
              </Col>
              <Col md={6} className="px-">
                <h1 className="project-heading" style={{ marginBottom: "20px" }}>
                  <span className="purple">Techstack</span>
                </h1>
                <Techstack />
                <h1 className="project-heading">
                  <span className="purple">Sparetime</span>
                </h1>
                <Sparetime />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
