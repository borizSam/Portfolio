import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiGitlab,
  SiTerraform,
  SiGrafana,
  SiPython,
  SiGnubash,
  SiLinux,
  SiGit,
  SiReact,
  SiSpringboot,
  SiOpenjdk
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Cloud & DevOps */}
      <Col xs={4} md={2} className="tech-icons"><SiAmazonaws title="AWS" /><div className="tech-icons-text">AWS</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDocker title="Docker" /><div className="tech-icons-text">Docker</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiKubernetes title="Kubernetes" /><div className="tech-icons-text">Kubernetes</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJenkins title="Jenkins" /><div className="tech-icons-text">Jenkins</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGithubactions title="GitHub Actions" /><div className="tech-icons-text">GitHub Actions</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGitlab title="GitLab CI/CD" /><div className="tech-icons-text">GitLab CI/CD</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTerraform title="Terraform" /><div className="tech-icons-text">Terraform</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGrafana title="Grafana" /><div className="tech-icons-text">Grafana</div></Col>

      {/* Development */}
      <Col xs={4} md={2} className="tech-icons"><SiReact title="React" /><div className="tech-icons-text">React</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSpringboot title="Spring Boot" /><div className="tech-icons-text">Spring Boot</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiOpenjdk title="Java" /><div className="tech-icons-text">Java</div></Col>

      {/* Scripting & Systems */}
      <Col xs={4} md={2} className="tech-icons"><SiPython title="Python" /><div className="tech-icons-text">Python</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGnubash title="Bash" /><div className="tech-icons-text">Bash</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiLinux title="Linux" /><div className="tech-icons-text">Linux</div></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGit title="Git" /><div className="tech-icons-text">Git</div></Col>
    </Row>
  );
}

export default Techstack;
