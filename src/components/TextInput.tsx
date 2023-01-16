import React, { useState } from "react";
import "./textInput.scss";

const TextInput: React.FC = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log(event.target);
  };

  return (
    <>
      <h1 role="heading">{value}</h1>
      <input
        role="textbox"
        placeholder="Type a good word for you..."
        type="text"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default TextInput;
