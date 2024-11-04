import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I started my apprenticeship in logistics for ABB where we build
            turbo chargers. The focus on supply chain and business processes led
            to a professional degree in industrial engineering. This gave me the
            opportunity to lead a team in the logistics department for the
            retailer Globus. The next step was to switch to a different
            department and work in various jobs in two software projects. During
            that time, I decided to focus on software development and started to
            study data science. For the future the goal is to lead big software
            projects and help companies shift to the digital era.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
