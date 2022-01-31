import React from "react";

// Styles 
import "./App.scss";


// COMPONENTS
import Header from './components/Header';


// GENERAL IMPORTS 
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// DATA
import CardData from './components/Card';

import stays from "./data/stays.json";



function App() {
  return (
    <Container className="App" maxWidth="lg">
      <Header />
      <div className="c-stays__wrapper">
        <div className="c-stays__header">
          <p className="c-stays__header-title">Stays in Finland</p>
          <p className="c-stays__header-number">12+</p>
        </div>
        <Grid container spacing={4}>
          { stays.map((item) =>  <CardData el={item} key={item.id} /> )}
        </Grid>
      </div>
    </Container>
  );
}

export default App;
