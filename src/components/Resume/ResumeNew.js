import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Boris-Huarachi-Perez-Dev.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        {" "}
        {/* 🔹 Header y botón */}{" "}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h1
            className="project-heading"
            style={{ color: "white", textAlign: "center" }}
          >
            ☁️{" "}
            <strong className="purple"> Mi Trayectoria en la Nube </strong>{" "}
          </h1>{" "}
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              maxWidth: "250px",
              fontSize: "1.1em",
              padding: "10px 20px",
              marginTop: "10px",
            }}
          >
            <AiOutlineDownload style={{ marginRight: "8px" }} />
            Descargar mi CV{" "}
          </Button>{" "}
        </Row>{" "}
        {/* 🔹 Contenido */}{" "}
        <Row style={{ justifyContent: "center", marginTop: "60px" }}>
          <Col
            md={10}
            style={{
              color: "white",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "15px",
              padding: "40px",
            }}
          >
            <h2 className="purple"> Perfil Profesional </h2>{" "}
            <p style={{ textAlign: "justify" }}>
              Soy un profesional junior especializado en{" "}
              <strong> DevOps </strong> y <strong> Cloud Computing </strong> ,
              con experiencia práctica en la automatización de entornos,
              despliegues CI / CD y administración de sistemas.Disfruto
              construyendo soluciones que integran desarrollo y operaciones para
              optimizar procesos y escalar aplicaciones en la nube,
              principalmente en <strong> AWS </strong>.{" "}
            </p>{" "}
            <h2
              className="purple"
              style={{ marginTop: "40px", marginBottom: "15px" }}
            >
              Experiencia{" "}
            </h2>{" "}
            <ul style={{ lineHeight: "1.8em" }}>
              <li>
                <strong> NTT DATA— Soporte & Operaciones Cloud </strong> (2022 –
                2023){" "}
                <ul>
                  <li>
                    Monitoreo y gestión de entornos en AWS, optimizando
                    despliegues mediante automatización con Docker y
                    Kubernetes.{" "}
                  </li>{" "}
                  <li>
                    Colaboración con equipos Dev para mejorar pipelines CI / CD,
                    reduciendo errores en despliegue.{" "}
                  </li>{" "}
                </ul>{" "}
              </li>{" "}
              <li style={{ marginTop: "10px" }}>
                <strong> Settings— Administrador de Sistemas </strong> (2023 –
                2024){" "}
                <ul>
                  <li>
                    Administración de sistemas Linux y Windows, automatización
                    de tareas con Bash e integración de pipelines con GitHub
                    Actions.{" "}
                  </li>{" "}
                  <li>
                    Mantenimiento de infraestructuras híbridas y soporte a
                    despliegues cloud bajo entornos AWS.{" "}
                  </li>{" "}
                </ul>{" "}
              </li>{" "}
            </ul>{" "}
            <h2
              className="purple"
              style={{ marginTop: "40px", marginBottom: "15px" }}
            >
              Certificaciones{" "}
            </h2>{" "}
            <ul>
              <li> AWS Certified Cloud Practitioner— 2025 </li>{" "}
              <li>
                {" "}
                Especialización DevOps Tools— CIFO Violeta(Barcelona){" "}
              </li>{" "}
            </ul>{" "}
            <h2
              className="purple"
              style={{ marginTop: "40px", marginBottom: "15px" }}
            >
              Educación{" "}
            </h2>{" "}
            <ul>
              <li>
                {" "}
                Desarrollo de Aplicaciones Multiplataforma— CIFO
                Violeta(2024){" "}
              </li>{" "}
              <li>
                Administración de Sistemas Informáticos y Redes— IES Joan d’
                Austria(2019– 2021){" "}
              </li>{" "}
            </ul>{" "}
            <h2
              className="purple"
              style={{ marginTop: "40px", textAlign: "center" }}
            >
              Stack Técnico{" "}
            </h2>{" "}
            <div
              style={{
                textAlign: "center",
                marginTop: "20px",
                lineHeight: "1.9em",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <p>
                <strong> ☁️Cloud: </strong> AWS (ECS, VPC, IAM, S3,
                CloudWatch){" "}
              </p>{" "}
              <p>
                <strong> ⚙️DevOps: </strong> Docker · Kubernetes · Jenkins ·
                GitHub Actions· Terraform{" "}
              </p>{" "}
              <p>
                <strong> 💻Backend: </strong> Java · Spring Boot · REST
                APIs{" "}
              </p>{" "}
              <p>
                <strong> 🖥️Frontend: </strong> React · Vite · TailwindCSS{" "}
              </p>{" "}
              <p>
                <strong> 📜Automatización / Scripting: </strong> Bash ·
                Python{" "}
              </p>{" "}
              <p>
                <strong> 🏗️Infraestructura como Código: </strong> Terraform ·
                CloudFormation{" "}
              </p>{" "}
            </div>{" "}
            <h2
              className="purple"
              style={{ marginTop: "40px", marginBottom: "15px" }}
            >
              Idiomas{" "}
            </h2>{" "}
            <ul>
              <li> Español— Nativo </li> <li> Inglés— Técnico </li>{" "}
              <li> Catalán— Intermedio </li>{" "}
            </ul>{" "}
            <h2
              className="purple"
              style={{ marginTop: "40px", marginBottom: "15px" }}
            >
              Proyectos Destacados{" "}
            </h2>{" "}
            <ul>
              <li>
                <strong> Aeropuerto Backend(Spring Boot) </strong> — API REST
                para la gestión de vuelos, pasajeros y operaciones
                aeroportuarias.{" "}
              </li>{" "}
              <li>
                <strong> Aeropuerto Frontend(React) </strong> — Interfaz moderna
                para administrar vuelos y operaciones, conectada al
                backend.{" "}
              </li>{" "}
              <li>
                <strong> Aeropuerto Cloud Deployment </strong> — Pipeline CI/CD
                con GitHub Actions y Docker, desplegado en AWS ECS.{" "}
              </li>{" "}
              <li>
                <strong> RoadMap DevOps </strong> — Guía interactiva de
                aprendizaje en Cloud, generada con Quarto y CI / CD en GitHub
                Actions.{" "}
              </li>{" "}
              <li>
                <strong> AWS Re / Start Labs </strong> — Portal de documentación
                de laboratorios AWS con despliegue automático en GitHub
                Pages.{" "}
              </li>{" "}
            </ul>{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>{" "}
    </Container>
  );
}

export default Resume;
