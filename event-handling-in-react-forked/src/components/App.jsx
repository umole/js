import React, { useState } from "react";

function App() {
  const [headingText, setheadingtext] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function changeHeading() {
    setheadingtext("Submitted");
  }

  // let bgColor = "black";
  function changeBG() {
    setMouseOver(true);
  }

  function mouseOverOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={changeBG}
        onMouseOut={mouseOverOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
