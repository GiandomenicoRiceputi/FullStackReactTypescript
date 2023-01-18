import React, { useState } from "react";
import "./App.css";
import InputEvent from "./components/InputEvent";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <h1>{inputValue}</h1>
      <InputEvent value={inputValue} onChange={handleChange} />
    </>
  );
}

export default App;
