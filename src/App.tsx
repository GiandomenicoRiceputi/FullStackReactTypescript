import React from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Icon from "./components/Icon";
import Lifecycle from "./components/Lifecycle";

function App() {
  return (
    <>
      <Header home="Home" contact="Contact" hireMe="Hire Me" />
      <Card icon={<Icon />}>
        <h2>Shake your booty Iris !!!</h2>
        <Lifecycle hr={1} min={2} sec={3} />
      </Card>
    </>
  );
}

export default App;
