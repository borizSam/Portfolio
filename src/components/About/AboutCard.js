import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola! 👋 Soy <span className="purple">Boris Huarachi Pérez</span>, un{" "}
            <span className="purple">DevOps Practitioner y Cloud Engineer Junior</span> de{" "}
            <span className="purple">Barcelona, España</span>.
            <br />
            <br />
            Me apasiona la tecnología, la automatización y todo lo relacionado con la nube.
            Siempre estoy buscando aprender algo nuevo y seguir creciendo profesionalmente.
            <br />
            <br />
            He trabajado con herramientas como{" "}
            <span className="purple">
              AWS, Docker, Kubernetes, Jenkins, GitHub Actions
            </span>{" "}
            y lenguajes como <span className="purple">Bash y Python</span> para crear entornos automatizados y seguros.
            <br />
            <br />
            Fuera del mundo tech, soy una persona activa y curiosa:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> 🏃 Me encanta el running y ponerme nuevos retos.
            </li>
            <li className="about-activity">
              <ImPointRight /> 🎮 Disfruto jugar videojuegos.
            </li>
            <li className="about-activity">
              <ImPointRight /> ☁️ Me motiva explorar nuevas tecnologías y herramientas.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Aprendiendo, creciendo y disfrutando el proceso."
          </p>
          <footer className="blockquote-footer">Boris Huarachi Pérez</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
