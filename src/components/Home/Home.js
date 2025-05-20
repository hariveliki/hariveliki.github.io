import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        padding: "4rem 0",
        fontFamily: "ui-monospace, monospace",
      }}
    >
      <Container>
        <Row>
          {/* Image Section - 1/3 width */}
          <Col md={3}>
            <div
              className="text-center mb-4 position-sticky"
              style={{ top: "2rem", marginTop: "2rem" }}
            >
              <img
                src="/profile.jpeg"
                alt="Profile"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <div className="mt-4">
                <p
                  style={{
                    color: "#0d6efd",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                  }}
                >
                  Problem Solver
                </p>
              </div>
            </div>
          </Col>

          <Col md={7} className="mx-auto">
            {/* Services Section */}
            <div style={{ marginTop: "2rem" }} className="p-4 mb-1">
              <h2
                style={{
                  textDecoration: "underline",
                  marginTop: "4px",
                  fontWeight: "bold",
                }}
                className="mb-4"
              >
                Erfahrung
              </h2>
              <Row style={{ marginBottom: "2rem" }}>
                <Col md={6} className="mb-4">
                  <h3
                    style={{
                      // fontWeight: "bold",
                      marginBottom: "1.5rem",
                      // color: "#0d6efd",
                      textDecoration: "underline",
                    }}
                  >
                    Software / AI
                  </h3>
                  <p>
                    <a
                      href="/#/blog/onboarding"
                      style={{ textDecoration: "none" }}
                    >
                      PIM, Onboarding & Microservices
                    </a>
                  </p>
                  <p>Machine Learning</p>
                  <p>
                    <a href="/#/blog/mps" style={{ textDecoration: "none" }}>
                      Large Language Models
                    </a>
                  </p>
                  <p>
                    <a
                      href="/#/blog/scrumdev"
                      style={{ textDecoration: "none" }}
                    >
                      Scrum Master und Entwickler
                    </a>
                  </p>
                  <img
                    src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/svgs/solid/rocket.svg"
                    alt="Rocket Icon"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginTop: "0.5rem",
                      marginRight: "1rem",
                    }}
                  />
                  <img
                    src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/svgs/solid/magic.svg"
                    alt="Magic Wand Icon"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginTop: "0.5rem",
                      marginRight: "1rem",
                    }}
                  />
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/openai.svg"
                    alt="OpenAI AI Icon"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginTop: "0.5rem",
                      marginRight: "1rem",
                    }}
                  />
                </Col>
                <Col md={6} className="mb-4">
                  <h3
                    style={{
                      // fontWeight: "bold",
                      marginBottom: "1.5rem",
                      // color: "#0d6efd",
                      textDecoration: "underline",
                    }}
                  >
                    Projekt Management
                  </h3>
                  <p>AI-Interaktion mit Ihrem Gebäude</p>
                  <p>
                    <a
                      href="/#/blog/centralization"
                      style={{ textDecoration: "none" }}
                    >
                      PIM Daten Zentralisierung
                    </a>
                  </p>
                  {/* <p>
                    <a href="/#">Change Management</a>
                  </p>
                  <p>
                    <a href="/#">Product Life Cycle Management</a>
                  </p>
                  <p>
                    <a href="/#">Managing Returns while Growing Rapidly</a>
                  </p> */}
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/homeassistant.svg"
                    alt="Futuristic Building Icon"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginTop: "0.5rem",
                      marginRight: "1rem",
                    }}
                  />
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/graphql.svg"
                    alt="Graph Icon"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginTop: "0.5rem",
                      marginRight: "1rem",
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-4">
                  <h3
                    style={{
                      // fontWeight: "bold",
                      marginBottom: "1.5rem",
                      // color: "#0d6efd",
                      textDecoration: "underline",
                    }}
                  >
                    Leadership
                  </h3>
                  <p>
                    <a
                      href="/#/blog/centralization"
                      style={{ textDecoration: "none" }}
                    >
                      Servant Leadership
                    </a>
                  </p>
                  <p>Management Retourenabteilung</p>
                  <img
                    src="https://cdn.jsdelivr.net/gh/lucide-icons/lucide/icons/handshake.svg"
                    alt="Servant Leadership Icon"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginTop: "0.5rem",
                      marginRight: "1rem",
                    }}
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/lucide-icons/lucide/icons/users.svg"
                    alt="Management Icon"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginTop: "0.5rem",
                      marginRight: "1rem",
                    }}
                  />
                </Col>
                <Col md={6} className="mb-4">
                  <h3
                    style={{
                      // fontWeight: "bold",
                      marginBottom: "1.5rem",
                      // color: "#0d6efd",
                      textDecoration: "underline",
                    }}
                  >
                    Coaching
                  </h3>
                  <p>Strategie, Motivation und Realisierung</p>
                  <img
                    src="https://cdn.jsdelivr.net/gh/lucide-icons/lucide/icons/goal.svg"
                    alt="Target with Arrow Icon"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginTop: "0.5rem",
                    }}
                  />
                </Col>
              </Row>
            </div>

            {/* Reviews Section */}
            {/* <div className="p-4">
              <h2
                style={{ textDecoration: "underline", fontWeight: "bold" }}
                className="mb-4"
              >
                Reviews
              </h2>
              <Row>
                <Col md={6} className="mb-4">
                  <div
                    className="p-3"
                    style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}
                  >
                    <p style={{ fontStyle: "italic" }}>
                      "Mithilfe von Haris konnten wir LLMs nutzen um unsere
                      Prozesse signifikant zu optimieren."
                    </p>
                    <p className="mb-0">
                      <a
                        href="https://www.linkedin.com/in/i-am-neven/"
                        style={{ textDecoration: "none" }}
                      >
                        <strong>- Neven Nikic</strong>
                      </a>
                    </p>
                    <small>
                      E-Commerce Leiter @{" "}
                      <a
                        href="https://www.mobileparts.ch/"
                        style={{ textDecoration: "none" }}
                      >
                        mobileparts
                      </a>
                    </small>
                  </div>
                </Col>
                <Col md={6} className="mb-4">
                  <div
                    className="p-3"
                    style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}
                  >
                    <p style={{ fontStyle: "italic" }}>
                      "Dank Haris habe ich jetzt meinen eigenen{" "}
                      <a
                        href="https://mareika.ch/"
                        style={{ textDecoration: "none" }}
                      >
                        Onlinehshop
                      </a>
                      "
                    </p>
                    <p className="mb-0">
                      <a
                        href="https://www.instagram.com/mareika.art"
                        style={{ textDecoration: "none" }}
                      >
                        <strong>- Marianne E. Kaufmann</strong>
                      </a>
                    </p>
                    <small>Freischaffende Künstlerin</small>
                  </div>
                </Col>
              </Row>
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
