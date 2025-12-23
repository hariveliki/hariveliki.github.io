import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const isInternalLink = props.demoLink && (
    props.demoLink.startsWith("/blog/") ||
    props.demoLink.startsWith("#/blog/") ||
    props.demoLink.startsWith("/#/blog/")
  );

  const getInternalPath = (link) => {
    if (link.startsWith("#/blog/")) {
      return link.substring(1);
    }
    if (link.startsWith("/#/blog/")) {
      return link.substring(2);
    }
    if (link.startsWith("/blog/")) {
      return link;
    }
    return link;
  };

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
          <>
            {isInternalLink ? (
              <Button
                variant="primary"
                as={Link}
                to={getInternalPath(props.demoLink)}
              >
                <CgWebsite /> &nbsp;View
              </Button>
            ) : (
              <Button variant="primary" href={props.demoLink} target="_blank">
                <CgWebsite /> &nbsp;View
              </Button>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
