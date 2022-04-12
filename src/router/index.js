import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"


import TicTacToe from '../pages/react-learning/tic-tac-toe'
import Clock from "../pages/react-learning/clock";
import UserLayout from '../pages/user/layout'
import Overview from '../pages/overview'
import ReactLayout from '../pages/react-learning/layout';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="/" element={<Overview />}></Route>
        </Route>
        <Route path="/react" element={<ReactLayout />}>
          <Route path="tic-tac-toe" element={<TicTacToe />}></Route>
          <Route path="clock" element={<Clock />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
