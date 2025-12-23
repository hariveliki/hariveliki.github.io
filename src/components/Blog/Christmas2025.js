import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./christmas-2025.css";
import christmas2025 from "../../Assets/Blog/Christmas-2025/christmas-2025.jpg";

function Christmas2025() {
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
        <Row className="align-items-center">
          <Col md={6} className="image-column">
            <div className="image-container">
              <img
                src={christmas2025}
                alt="Christmas 2025"
                className="img-fluid"
              />
            </div>
          </Col>
          <Col md={6} className="text-column">
            <div className="text-content">
              <h1 className="blog-title">23.12.2025</h1>
              <div className="blog-text">
                <p>Mini gliebti Simi</p>
                <p>
                  2025 isch es astrengends johr gsi. S'Studium fertig gmacht,
                  job gsuecht und job gfunde, und du immer a minere Site zum
                  mich motiviere. Ich möcht mich be der bedanke für all dini
                  Unterstützig und ufmunternde Wort i dem Jahr. Sie send mini
                  Therapie gsi i schwere Zite.
                </p>
                <p>
                  Danke für all dini materialistische und immaterialistische
                  Gschenk während dene Wiehnachte. Ich hoffe mini hend der
                  gfalle, au wenn sie ned so vel gsi send, wie du erwartet hesch
                  :D Defür send die wos geh het, bruchbar oder speziell gsi :D
                  Freu mich ufs negste Jahr mit dir und eusne Abentür womer
                  schomal lut dänkt hend. Lieb di mega fescht.
                </p>
                <p>Din Hari-Bari</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Christmas2025;
