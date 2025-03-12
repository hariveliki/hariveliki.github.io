import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./pim.css";

function Centralization() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const headings = document.querySelectorAll("h2, h3");
    const headingElements = Array.from(headings);

    const handleScroll = () => {
      const found = headingElements.find((heading) => {
        const rect = heading.getBoundingClientRect();
        return rect.top > 0 && rect.top < window.innerHeight / 2;
      });

      if (found) {
        setActiveSection(found.id);
      }
    };

    headingElements.forEach((heading) => {
      if (!heading.id) {
        heading.id = heading.textContent.toLowerCase().replace(/\s+/g, "-");
      }
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const TableOfContents = () => (
    <nav className="table-of-contents">
      <ul className="toc-list">
        <li>
          <span
            data-target="einführung"
            className={activeSection === "einführung" ? "active" : ""}
          >
            Einführung
          </span>
        </li>
        <li>
          <span
            data-target="meine-rolle-und-scope"
            className={activeSection === "meine-rolle-und-scope" ? "active" : ""}
          >
            Meine Rolle und Scope
          </span>
        </li>
        <li>
          <span
            data-target="projektvorgehen"
            className={activeSection === "projektvorgehen" ? "active" : ""}
          >
            Projektvorgehen
          </span>
        </li>
        <li>
          <span
            data-target="scrum-methodologie"
            className={activeSection === "scrum-methodologie" ? "active" : ""}
          >
            Scrum-Methodologie
          </span>
          <ul className="toc-list">
            <li className="toc-h3">
              <span
                data-target="team"
                className={activeSection === "team" ? "active" : ""}
              >
                Team
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="backlog"
                className={activeSection === "backlog" ? "active" : ""}
              >
                Backlog
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="epics"
                className={activeSection === "epics" ? "active" : ""}
              >
                Epics
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="planning"
                className={activeSection === "planning" ? "active" : ""}
              >
                Planning
              </span>
            </li>
            <li className="toc-h3">
              <span
                data-target="daily-stand-ups"
                className={activeSection === "daily-stand-ups" ? "active" : ""}
              >
                Daily Stand-ups
              </span>
            </li>
          </ul>
        </li>
        <li>
          <span
            data-target="kommunikation"
            className={activeSection === "kommunikation" ? "active" : ""}
          >
            Kommunikation
          </span>
        </li>
        <li>
          <span
            data-target="dokumentation"
            className={activeSection === "dokumentation" ? "active" : ""}
          >
            Dokumentation
          </span>
        </li>
        <li>
          <span
            data-target="reflexion"
            className={activeSection === "reflexion" ? "active" : ""}
          >
            Reflexion
          </span>
        </li>
      </ul>
    </nav>
  );

  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        padding: "4rem 0",
        fontFamily: "ui-monospace, monospace",
      }}
    >
      <div className="table-of-contents-wrapper">
        <TableOfContents />
      </div>

      <Container style={{ paddingLeft: "calc(12% + 1.5rem)", maxWidth: "95%" }}>
        <Row>
          <Col md={12} className="mx-auto">
            <div className="p-3 mb-1">
              <h1
                style={{
                  marginTop: "3rem",
                  fontWeight: "bold",
                }}
              >
                <span style={{ color: "#0d6efd", textDecoration: "underline" }}>
                  Von Dezentralen zu Zentralen Produkt Stammdaten
                </span>
              </h1>

              <Row style={{ justifyContent: "center", padding: "10px" }}>
                <Col md={12} className="project-description">
                  <h2 id="einführung">Einführung</h2>
                  <p>
                    [Content for Einführung section]
                  </p>

                  <h2 id="meine-rolle-und-mein-verantwortungsbereich">Meine Rolle und Scope</h2>
                  <p>
                    [Content for Meine Rolle und Scope section]
                  </p>

                  <h2 id="projektvorgehen">Projektvorgehen</h2>
                  <p>
                    [Content for Projektvorgehen section]
                  </p>

                  <h2 id="scrum-methodologie">Scrum-Methodologie</h2>
                  <p>
                    [Content for Scrum-Methodologie section]
                  </p>

                  <h3 id="team">Team</h3>
                  <p>
                    [Content for Team section]
                  </p>

                  <h3 id="backlog">Backlog</h3>
                  <p>
                    [Content for Backlog section]
                  </p>

                  <h3 id="epics">Epics</h3>
                  <p>
                    [Content for Epics section]
                  </p>

                  <h3 id="planning">Planning</h3>
                  <p>
                    [Content for Planning section]
                  </p>

                  <h3 id="daily-stand-ups">Daily Stand-ups</h3>
                  <p>
                    [Content for Daily Stand-ups section]
                  </p>

                  <h2 id="kommunikation">Kommunikation</h2>
                  <p>
                    [Content for Kommunikation section]
                  </p>

                  <h2 id="dokumentation">Dokumentation</h2>
                  <p>
                    [Content for Dokumentation section]
                  </p>

                  <h2 id="reflexion">Reflexion</h2>
                  <p>
                    [Content for Reflexion section]
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Centralization;
