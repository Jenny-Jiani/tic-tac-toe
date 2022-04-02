import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// import Overview from '../pages/overview'
// import TicTacToe from '../pages/tic-tac-toe'
// import Clock from "../pages/clock";
import UserLayout from '../pages/user/layout'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
