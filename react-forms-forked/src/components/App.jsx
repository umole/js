import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [inputName, setInputName] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleEvent(event) {
    setInputName(true);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {inputName && name}</h1>
      <form onSubmit={handleEvent}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
