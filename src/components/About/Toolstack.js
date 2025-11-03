import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaLinux, FaWindows, FaChrome } from "react-icons/fa";
import { SiVisualstudiocode, SiIntellijidea } from "react-icons/si";

function Toolstack() {
  const iconStyle = { fontSize: "3em", marginBottom: "1px" };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux style={iconStyle} />
        <div className="tech-icons-text">Linux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaWindows style={iconStyle} />
        <div className="tech-icons-text">Windows</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaChrome style={iconStyle} />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={iconStyle} />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea style={iconStyle} />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>
    </Row>
  );
}

export default Toolstack;

