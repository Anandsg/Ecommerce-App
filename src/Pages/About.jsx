import React from "react";

import { Container, Image } from "react-bootstrap";

const About = () => {
  return (
    <>
      {/* <p
        className="display-5 text-center p-3 bg-secondary mt-1 text-white"
        style={{ fontSize: "6em", fontFamily: "bold" }}
      >
        The Generics
      </p> */}
      <Container>
        <h2 style={{ textAlign: "center" }}>About</h2>
        <Image
          src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
          alt="Logo"
          roundedCircle
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            float: "left",
            marginTop: "2rem",
            marginRight: "2rem",
            marginBottom: "1rem",
          }}
        />
        <p style={{ fontSize: "1.2em", fontFamily: "bold", marginTop: "7rem" }}>
          Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
          sorrows, hates no prosecutors will unfold in the enduring of which
          were born in it? Often leads smallest mistake some pain main
          responsibilities are to stand for the right builder of pleasure,
        </p>
      </Container>
    </>
  );
};

export default About;
