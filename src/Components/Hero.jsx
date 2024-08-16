import React from "react";
import Button from "react-bootstrap/Button";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-h1">WE MAKE YOUR IDEA'S</div>
        <div className="hero-h2">INTOREALITY</div>
        <p>
          Some quick example text to build on the card title and make puthe bulk
          of the card's content.Some quick example text ot build on hte card
          title and make up the bulk of the card's content.
        </p>
        <div className="hero-btn">
          <Button variant="primary">Primary</Button>{" "}
          <Button variant="light">Secondary</Button>{" "}
        </div>
      </div>

      <div className="hero-right">
        <img src={process.env.PUBLIC_URL + "/2o.jpeg"} alt="hero" />
      </div>
    </div>
  );
}

export default Hero;