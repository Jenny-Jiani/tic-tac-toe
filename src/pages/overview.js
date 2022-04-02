import React from "react"
import { Link, Outlet } from "react-router-dom"

function Overview () {
  return (
    <main>
      <ul>
        <li><Link to="/tic-tac-toe">TicTacToe</Link></li>
        <li><Link to="/clock">Clock</Link></li>
      </ul>
      <Outlet />
    </main>
  )
}

export default Overview