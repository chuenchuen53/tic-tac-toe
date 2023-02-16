import React from "react";
import "./App.css";
import "./pages/TicTacToe";
import { TicTacToe } from "./pages/TicTacToe";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <div className="App">
      <TicTacToe />
    </div>
  );
}

export default App;
