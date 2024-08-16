import React from "react";

function Features() {
  return (
    <div className="feat">
      <h1>Features</h1>
      <div className="feat-left">
        <img src={process.env.PUBLIC_URL + "/5o.jpeg"} alt="feat" />
        <div className="feat-text">
          <div>Card Title</div>
          <div>
            Some quick example text ot build on the card title and make up the
            bulk of the card's content.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;