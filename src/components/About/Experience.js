import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  DiCode,
} from "react-icons/di";
import {
  MdManageAccounts,
} from "react-icons/md";
import { 
  GiTeamUpgrade,
  GiProgression
} from "react-icons/gi";

function Experience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiCode />
        <p className="exp-label">Programming</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiProgression />
        <p className="exp-label">Project Management</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiTeamUpgrade />
        <p className="exp-label">Leadership</p>
      </Col>
    </Row>
  );
}

export default Experience;
