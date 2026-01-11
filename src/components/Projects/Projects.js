import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "./Projects.css";

function Projects() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">DevOps & Cloud Projects</strong>
        </h1>
        <p className="project-subtitle">
          Automatizando ideas, escalando el futuro ☁️
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 🧪 CI/CD Python Validation */}
          <Col md={4} className="project-card">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
            >
              <ProjectCard
                imgPath="https://imgur.com/a/bEYa1lY" // puedes cambiarlo luego
                title="CI/CD Validation Platform – Python"
                description="Pipeline de integración continua para validar automáticamente software en Python. Ejecuta tests por fases en cada commit (unitarios, integración y rendimiento), genera reportes como artifacts y bloquea cambios no válidos."
                ghLink="https://github.com/borizSam/ci-cd-python-test-automation"
                tech="Python · Pytest · GitHub Actions · CI/CD · Bash · Docker"
              />
            </motion.div>
          </Col>
          {/* 🧱 Aeropuerto Backend */}
          <Col md={4} className="project-card">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
            >
              <ProjectCard
                imgPath="https://i.imgur.com/l4ktSLG.png"
                title="Aeropuerto Backend – API REST & JWT"
                description="API REST desarrollada con Spring Boot para la gestión integral de aeropuertos (vuelos, pasajeros y operaciones). Incluye seguridad con JWT, validaciones y base de datos relacional."
                ghLink="https://github.com/borizSam/Aeropuerto-Back"
                tech="Spring Boot · Java · MySQL · JPA · JWT"
              />
            </motion.div>
          </Col>

          {/* 🖥️ Aeropuerto Frontend */}
          <Col md={4} className="project-card">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
            >
              <ProjectCard
                imgPath="https://i.imgur.com/lEwDE5k.png"
                title="Aeropuerto Frontend – React + Vite SPA"
                description="Interfaz web desarrollada en React + Vite para la gestión integral de vuelos, aerolíneas y aeropuertos. Se conecta al backend de Spring Boot y ofrece una UI moderna, responsiva y funcional."
                ghLink="https://github.com/borizSam/Aeropuerto-Front"
                demoLink="https://aeropuerto.vercel.app"
                demoText="🌐 Web"
                tech="React · Vite · TailwindCSS · Axios · Docker"
              />
            </motion.div>
          </Col>

          {/* ☁️ Aeropuerto Infraestructura */}
          <Col md={4} className="project-card">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
            >
              <ProjectCard
                imgPath="https://raw.githubusercontent.com/borizSam/Photos/refs/heads/main/Diagrama.jpg.png"
                title="Aeropuerto Infra – AWS ECS & CI/CD"
                description="Automatización completa del despliegue del sistema Aeropuerto en AWS ECS Fargate. Uso de Docker Hub, GitHub Actions y CloudWatch para CI/CD, monitoreo y escalabilidad."
                ghLink="https://github.com/borizSam/Aeropuerto-infra"
                tech="AWS ECS · Docker · GitHub Actions · CloudWatch · CI/CD"
              />
            </motion.div>
          </Col>

          {/* 📘 RoadMap DevOps */}
          <Col md={4} className="project-card">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
            >
              <ProjectCard
                imgPath="https://i.imgur.com/hC8PgU9.png"
                title="RoadMap DevOps – Learning Journey"
                description="Guía visual y práctica de mi camino hacia Cloud Architect. Creado con Quarto y desplegado automáticamente mediante CI/CD con GitHub Actions."
                ghLink="https://github.com/borizSam/RoadMapDevOps"
                demoLink="https://borizsam.github.io/RoadMapDevOps/"
                demoText="🌐 Web"
                tech="Quarto · GitHub Actions · Markdown · CI/CD"
              />
            </motion.div>
          </Col>

          {/* ☁️ AWS Re/Start Labs */}
          <Col md={4} className="project-card">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
            >
              <ProjectCard
                imgPath="https://i.imgur.com/QQaKPNX.png"
                title="AWS Re/Start Labs – Cloud Learning Journey"
                description="Sitio técnico y educativo creado con Quarto, donde documento mi proceso de aprendizaje en AWS RE/START: fundamentos cloud, Linux, redes, DevOps y laboratorios prácticos. Desplegado automáticamente con GitHub Actions en GitHub Pages."
                ghLink="https://github.com/borizSam/AWS-Re_Start"
                demoLink="https://borizsam.github.io/AWS-Re_Start/"
                demoText="🌐 Web"
                tech="Quarto · GitHub Pages · GitHub Actions · Markdown · CI/CD"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
