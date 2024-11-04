import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Sparetime from "./Sparetime";
import Experience from "./Experience"; 

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="project-heading">
              <span className="purple">In a Nutshell</span>
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          <span className="purple">Experience</span>
        </h1>
        <Experience />

        <h1 className="project-heading">
          <span className="purple">Techstack</span>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <span className="purple">Sparetime</span>
        </h1>
        <Sparetime />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
