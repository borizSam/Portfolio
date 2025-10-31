import React from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <h3 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
         Aprendiendo, creando y mejorando un commit a la vez 🤖
      </h3>
      <GitHubCalendar
        username="borizSam"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
      <p style={{ color: "gray", textAlign: "center", marginTop: "15px" }}>
        Aún construyendo mi camino — cada línea de código cuenta 💪
      </p>
    </Row>
  );
}

export default Github;

