import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function effectChange(event) {
    setInputText(event.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={effectChange} value={inputText} type="text" />
        <button
          onClick={() => {
            setItems((items) => {
              return [...items, inputText];
            });
            setInputText("");
          }}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItems) => (
            <li>{todoItems}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
