import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Icon from "./components/Icon";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Header home="Home" contact="Contact" hireMe="Hire Me" />
      <Card icon={<Icon />}>
        <h2>Shake your booty Iris !!!</h2>
        <Loading
          loading={isLoading}
          label="press Me"
          onClick={() => {
            setIsLoading(!isLoading);
          }}
        />
      </Card>
    </>
  );
}

export default App;
