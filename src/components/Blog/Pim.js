import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "./pim.css";

function Pim() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Get all section headings
    const headings = document.querySelectorAll("h2, h3");
    const headingElements = Array.from(headings);

    const handleScroll = () => {
      // Find the current section
      const found = headingElements.find((heading) => {
        const rect = heading.getBoundingClientRect();
        return rect.top > 0 && rect.top < window.innerHeight / 2;
      });

      if (found) {
        setActiveSection(found.id);
      }
    };

    // Add IDs to headings if they don't exist
    headingElements.forEach((heading) => {
      if (!heading.id) {
        heading.id = heading.textContent.toLowerCase().replace(/\s+/g, "-");
      }
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const TableOfContents = () => (
    <nav className="table-of-contents">
      <ul className="toc-list">
        <li>
          <a
            href="#motivation"
            className={activeSection === "motivation" ? "active" : ""}
          >
            Motivation
          </a>
        </li>
        <li>
          <a
            href="#context"
            className={activeSection === "context" ? "active" : ""}
          >
            Context
          </a>
          <ul className="toc-list">
            <li className="toc-h3">
              <a
                href="#project-description"
                className={activeSection === "project-description" ? "active" : ""}
              >
                Project Description
              </a>
            </li>
            <li className="toc-h3">
              <a
                href="#project-management-methodology"
                className={activeSection === "project-management-methodology" ? "active" : ""}
              >
                Project Management Methodology
              </a>
            </li>
            <li className="toc-h3">
              <a
                href="#considerations-for-change"
                className={activeSection === "considerations-for-change" ? "active" : ""}
              >
                Considerations for Change
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#theory-vs-practice"
            className={activeSection === "theory-vs-practice" ? "active" : ""}
          >
            Theory vs Practice
          </a>
          <ul className="toc-list">
            <li className="toc-h3">
              <a
                href="#general"
                className={activeSection === "general" ? "active" : ""}
              >
                General
              </a>
            </li>
            <li className="toc-h3">
              <a
                href="#events"
                className={activeSection === "events" ? "active" : ""}
              >
                Events
              </a>
            </li>
            <li className="toc-h3">
              <a
                href="#team"
                className={activeSection === "team" ? "active" : ""}
              >
                Team
              </a>
            </li>
            <li className="toc-h3">
              <a
                href="#key-takeaways"
                className={activeSection === "key-takeaways" ? "active" : ""}
              >
                Key Takeaways
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#soft-skills"
            className={activeSection === "soft-skills" ? "active" : ""}
          >
            Soft Skills
          </a>
        </li>
        <li>
          <a
            href="#conclusion"
            className={activeSection === "conclusion" ? "active" : ""}
          >
            Conclusion
          </a>
        </li>
      </ul>
    </nav>
  );

  return (
    <Container fluid className="project-section">
      <Particle />
      <TableOfContents />
      <Container className="pim-container">
        <h1 className="project-heading">
          Experience within a <strong className="purple">PIM Project</strong>
        </h1>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12} className="project-description">
            <h2 id="motivation">Motivation</h2>
            <p>Text</p>
            <h2 id="context">Context</h2>
            <h3 id="project-description">Project Description</h3>
            <p>Text</p>
            <h3 id="project-management-methodology">
              Project Management Methodology
            </h3>
            <p>Text</p>
            <h3 id="considerations-for-change">Considerations for Change</h3>
            <p>Text</p>

            {/* ----------------------new section------------------------------ */}
            <h2 id="theory-vs-practice">Theory vs Practice</h2>
            <h3 id="general">General</h3>
            <div className="metrics-table">
              <table>
                <thead>
                  <tr>
                    <th>Theory</th>
                    <th>Practice</th>
                    <th>Effect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 id="events">Events</h3>
            <div className="metrics-table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Theory</th>
                    <th>Practice</th>
                    <th>Effect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="row-header">Event</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 id="team">Team</h3>
            <div className="metrics-table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Theory</th>
                    <th>Practice</th>
                    <th>Effect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="row-header">Member</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 id="key-takeaways">Key Takeaways</h3>
            <ul>
              <li>
                General:
                <br></br>
                Text
              </li>
              <li>Events:</li>
              <li>Team:</li>
              <li>Adaptibility:</li>
            </ul>
            {/* ----------------------new section------------------------------ */}
            <h2 id="soft-skills">Soft Skills</h2>
            <div className="metrics-table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Scrum Master</th>
                    <th>Developer</th>
                    <th>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="row-header">Problem-solving</td>
                    <td>foo</td>
                    <td>foo</td>
                    <td>foo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* ----------------------new section------------------------------ */}
            <h2 id="conclusion">Conclusion</h2>
            <p>Text</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Pim;
