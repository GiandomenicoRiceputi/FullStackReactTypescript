import React from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Icon from "./components/Icon";

function App() {
  return (
    <>
      <Header home="Home" contact="Contact" hireMe="Hire Me" />
      <Card icon={<Icon />}>
        <h2>Shake your booty Iris !!!</h2>
      </Card>
    </>
  );
}

export default App;
