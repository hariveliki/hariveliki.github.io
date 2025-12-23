import React from "react";
import { Col, Row } from "react-bootstrap";
import { MdSportsMartialArts } from "react-icons/md";
import { IoIosBicycle } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import { GiMeditation, GiHiking } from "react-icons/gi";

function Sparetime() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <MdSportsMartialArts />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoIosBicycle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBookOpen />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiMeditation />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiHiking />
      </Col>
    </Row>
  );
}

export default Sparetime;
