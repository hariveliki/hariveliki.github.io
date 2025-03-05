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
                <p style={{ color: "#666", fontSize: "1.1rem" }}>
                  Serveant Leader, Industrial Engineer, Software Developer, Data
                  Scientist, or simply a Generalist.
                </p>
              </div>
            </div>
          </Col>

          {/* Services and Reviews Section - 2/3 width */}
          <Col md={7} className="mx-auto">
            {/* Services Section */}
            <div className="p-4 mb-5">
              <h2 style={{ textDecoration: "underline", marginTop: "4px" }} className="mb-4">
                Services
              </h2>
              <Row>
                <Col md={4} className="mb-4">
                  <p
                    style={{
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                      color: "#0d6efd",
                      textDecoration: "underline",
                    }}
                  >
                    Software / KI
                  </p>
                  <p>Custom software solutions</p>
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg"
                    alt="Software/AI Icon"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginTop: "0.5rem",
                    }}
                  />
                </Col>
                <Col md={4} className="mb-4">
                  <p
                    style={{
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                      color: "#0d6efd",
                      textDecoration: "underline",
                    }}
                  >
                    PIM / ERP
                  </p>
                  <p>Business systems integration</p>
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/sap.svg"
                    alt="PIM/ERP Icon"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginTop: "0.5rem",
                    }}
                  />
                </Col>
                <Col md={4} className="mb-4">
                  <p
                    style={{
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                      color: "#0d6efd",
                      textDecoration: "underline",
                    }}
                  >
                    Project Management
                  </p>
                  <p>Digital transformation</p>
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/trello.svg"
                    alt="Project Management Icon"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginTop: "0.5rem",
                    }}
                  />
                </Col>
                <Col md={4} className="mb-4">
                  <p
                    style={{
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                      color: "#0d6efd",
                      textDecoration: "underline",
                    }}
                  >
                    Online Shops
                  </p>
                  <p>E-commerce solutions</p>
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/shopify.svg"
                    alt="Online Shops Icon"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginTop: "0.5rem",
                    }}
                  />
                </Col>
                <Col md={4} className="mb-4">
                  <p
                    style={{
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                      color: "#0d6efd",
                      textDecoration: "underline",
                    }}
                  >
                    Web Pages
                  </p>
                  <p>Modern web development</p>
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg"
                    alt="Web Pages Icon"
                    style={{
                      width: "24px",
                      height: "24px",
                      marginTop: "0.5rem",
                    }}
                  />
                </Col>
                <Col md={4} className="mb-4">
                  <p
                    style={{
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                      color: "#0d6efd",
                      textDecoration: "underline",
                    }}
                  >
                    Coaching
                  </p>
                  <p>Technical mentoring</p>
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/microsoftteams.svg"
                    alt="Coaching Icon"
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
            <div className="p-4">
              <h2 style={{ textDecoration: "underline" }} className="mb-4">
                Reviews
              </h2>
              <Row>
                {/* Review Cards */}
                <Col md={6} className="mb-4">
                  <div
                    className="p-3"
                    style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}
                  >
                    <p style={{ fontStyle: "italic" }}>
                      "Text"
                    </p>
                    <p className="mb-0">
                      <strong>- Person</strong>
                    </p>
                    <small>Function</small>
                  </div>
                </Col>
                <Col md={6} className="mb-4">
                  <div
                    className="p-3"
                    style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}
                  >
                    <p style={{ fontStyle: "italic" }}>
                      "Text"
                    </p>
                    <p className="mb-0">
                      <strong>- Person</strong>
                    </p>
                    <small>Function</small>
                  </div>
                </Col>
                <Col md={6} className="mb-4">
                  <div
                    className="p-3"
                    style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}
                  >
                    <p style={{ fontStyle: "italic" }}>
                      "Text"
                    </p>
                    <p className="mb-0">
                      <strong>- Person</strong>
                    </p>
                    <small>Function</small>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
