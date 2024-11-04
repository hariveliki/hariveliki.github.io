import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        {/* Conditionally render GitHub button */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;GitHub
          </Button>
        )}
        {/* Conditionally render Demo button */}
        {props.demoLink && (
          <Button variant="primary" href={props.demoLink} target="_blank">
            <CgWebsite /> &nbsp;View
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
