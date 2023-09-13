import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Alpha from "./components/Alpha";

function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <Alpha />
    </div>
  );
}

export default App;
