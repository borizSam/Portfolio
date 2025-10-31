import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Avatar.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            {/* 🧠 Presentación principal */}
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                ¡Hola!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                👋
                </span>
              </h1>

              <h1 className="heading-name">
                Soy
                <strong className="main-name"> Boris Huarachi Pérez </strong>
              </h1>

              <h2 className="heading-subtitle">
                DevOps Practitioner|Cloud Engineer
              </h2>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* 🪩 Avatar con animación de scroll */}
            <Col
              md={5}
              style={{
                paddingBottom: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={homeLogo}
                alt="Avatar de Boris"
                className="img-fluid"
                style={{
                  maxHeight: "380px",
                  borderRadius: "50%",
                  boxShadow: "0 0 35px rgba(162, 93, 255, 0.45)",
                  transform: `translateY(${offsetY * 0.2}px)`, // 💫 efecto parallax
                  transition: "transform 0.1s ease-out",
                  background: "rgba(255,255,255,0.05)",
                  padding: "5px",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* 👇 Sección “Sobre mí” */}
      <Home2 />

      {/* 🔗 Redes sociales */}
      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Conecta conmigo</h1>
            <p>
              No dudes en{" "}
              <span className="purple">contactarme </span> o seguirme en mis redes.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/borizSam"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/boriz69"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/boris-ivan-huarachi-perez-859638219/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/boriz_ivan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
