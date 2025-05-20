import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "white",
        fontFamily: "ui-monospace, monospace",
        borderTop: "1px solid #dee2e6",
        padding: "1rem 0",
        marginTop: "auto",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <a
          href="https://github.com/hariveliki"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#666" }}
        >
          <AiFillGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/iam-haris-alic/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#666" }}
        >
          <FaLinkedinIn size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
