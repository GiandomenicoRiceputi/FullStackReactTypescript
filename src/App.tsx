import React from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Icon from "./components/Icon";
import FetchData from "./data/FetchData";

function App() {
  return (
    <>
      <Header home="Home" contact="Contact" hireMe="Hire Me" />
      <Card icon={<Icon />}>
        <h2>Shake your booty Iris !!!</h2>
        <FetchData
          url="https://jsonplaceholder.typicode.com/posts"
          message="Error fetching data"
        />
      </Card>
    </>
  );
}

export default App;
