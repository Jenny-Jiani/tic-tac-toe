import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TicTacToe from './tic-tac-toe'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tic-tac-toe" element={TicTacToe}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
