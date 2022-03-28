import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TicTacToe from './tic-tac-toe'
import Clock from "./clock";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tic-tac-toe" element={<TicTacToe></TicTacToe>}></Route>
        <Route path="/clock" element={<Clock></Clock>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
