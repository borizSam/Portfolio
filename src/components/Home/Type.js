import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AWS Certified Practitioner",
          "Cloud Enthusiast ☁️",
          "Building Scalable Systems 🚀",
          "Docker & Kubernetes",
          "CI/CD Automation",
          "Infrastructure as Code ⚙️",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
