import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UN POCO <span className="purple"> SOBRE </span> MÍ
            </h1>
            <p className="home-about-body">
              Soy un <b className="purple">DevOps Practitioner</b> y{" "}
              <b className="purple">Cloud Engineer</b> apasionado por la
              automatización, la escalabilidad y el diseño de infraestructuras
              en la nube eficientes.
              <br />
              <br />
              A lo largo del tiempo he trabajado con tecnologías que impulsan
              los sistemas modernos, desde la{" "}
              <b className="purple">contenerización</b> hasta la{" "}
              <b className="purple">integración y entrega continua (CI/CD)</b>.
              <br />
              <br />
              Tengo experiencia con{" "}
              <b className="purple">
                AWS, Docker, Kubernetes, Jenkins, Bash y Python
              </b>
              . Disfruto diseñando entornos seguros, escalables y automatizados
              que mejoran el desarrollo y despliegue de aplicaciones.
              <br />
              <br />
              Mis principales áreas de interés son la{" "}
              <b className="purple">Arquitectura Cloud</b>, la{" "}
              <b className="purple">Infraestructura como Código (IaC)</b> y la{" "}
              <b className="purple">automatización de pipelines CI/CD</b>.
              <br />
              <br />
              Siempre que puedo, me gusta optimizar sistemas con{" "}
              <b className="purple">AWS</b> y crear soluciones que transformen
              procesos en la nube ☁️.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
