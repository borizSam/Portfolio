import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// 🟣 Placeholder online (se muestra mientras no tengas tus capturas)
const placeholder = "https://via.placeholder.com/500x300.png?text=Project+Preview";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">DevOps & Cloud Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Automatizando ideas, escalando el futuro. ☁️
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 🧱 Aeropuerto Backend */}
          <Col md={4} className="project-card">
            <a
              href="https://github.com/borizSam/Aeropuerto-Back"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <ProjectCard
                imgPath="https://i.imgur.com/l4ktSLG.png" // 🔹 Tu imagen del backend
                isBlog={false}
                title="Aeropuerto Backend"
                description="API REST desarrollada con Spring Boot para la gestión integral de aeropuertos (vuelos, pasajeros y operaciones). Incluye seguridad con JWT, validaciones y base de datos relacional."
                ghLink="https://github.com/borizSam/Aeropuerto-Back"
                tech="Spring Boot · Java · MySQL · JPA · JWT"
              />
            </a>
          </Col>

          {/* 🖥️ Aeropuerto Frontend */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholder}
              isBlog={false}
              title="Aeropuerto Frontend"
              description="Interfaz web desarrollada en React para gestionar vuelos, usuarios y operaciones aeroportuarias. Consumo de API REST, UI moderna y panel de administración responsivo."
              ghLink="https://github.com/borizSam/Aeropuerto-Frontend"
              demoLink="https://aeropuerto.vercel.app"
              tech="React · Vite · Axios · TailwindCSS"
            />
          </Col>

          {/* ☁️ Aeropuerto Cloud & CI/CD */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholder}
              isBlog={false}
              title="Aeropuerto Cloud Deployment"
              description="Pipeline CI/CD con GitHub Actions y Docker para desplegar el sistema de aeropuertos en AWS ECS. Uso de Docker Hub, VPC, Load Balancer y auto-scaling configurado."
              ghLink="https://github.com/borizSam/Aeropuerto-Infra"
              tech="AWS ECS · Docker · GitHub Actions · VPC · CloudWatch"
            />
          </Col>

          {/* 📘 RoadMap DevOps */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholder}
              isBlog={false}
              title="RoadMap DevOps"
              description="Guía visual y práctica de mi camino hacia Cloud Architect. Creado con Quarto (Markdown avanzado) y desplegado automáticamente mediante CI/CD con GitHub Actions."
              ghLink="https://github.com/borizSam/RoadMapDevOps"
              demoLink="https://borizsam.github.io/RoadMapDevOps/"
              tech="Quarto · GitHub Actions · Markdown · CI/CD"
            />
          </Col>

          {/* ☁️ AWS Re/Start Labs */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholder}
              isBlog={false}
              title="AWS Re/Start Labs"
              description="Plataforma educativa con laboratorios documentados del programa AWS Re/Start. Usa Quarto y GitHub Actions para despliegue automático en GitHub Pages."
              ghLink="https://github.com/borizSam/AWS-Re_Start"
              demoLink="https://borizsam.github.io/AWS-Re_Start/"
              tech="AWS · Quarto · GitHub Actions · GitHub Pages"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;


