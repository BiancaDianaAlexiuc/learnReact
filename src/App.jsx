// General
import React, { useState, useEffect } from "react";

// Style
import "./App.scss";

// Components
import Suites from "./components/suites/Suites";
import Header from "./components/header/Header";

// Material UI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function App() {
  const [apartmentCount, setApartmentCount] = useState(0);
  const [initialSuites, setInitialSuites] = useState([]);
  const [suites, setSuites] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await window.fetch("/data/stays.json");
      const suites = await data.json();

      setSuites(suites);
      setInitialSuites(suites);
    })();
  }, []);

  return (
    <Container className="App" maxWidth="lg">
      <Header
        initialSuites={initialSuites}
        setApartmentCount={setApartmentCount}
        setSuites={setSuites}
      />
      <div className="c-stays__wrapper">
        <div className="c-stays__header">
          <p className="c-stays__header-title">Stays in Finland</p>
          <p className="c-stays__header-number">{apartmentCount}+</p>
        </div>
        <Grid container spacing={4}>
          <Suites suites={suites} />
        </Grid>
      </div>
    </Container>
  );
}

export default App;
