import "./App.css";
import React from "react";
import { GeneralBox } from "./components/Box.styled";
import ProductBox from "./components/ProductBox";
import Summary from "./components/Summary";

function App() {
  return (
    <GeneralBox>
      <ProductBox />
      <Summary />
    </GeneralBox>
  );
}

export default App;
