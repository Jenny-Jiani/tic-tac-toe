import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, useRoutes } from "react-router-dom"


import TicTacToe from '../pages/react-learning/tic-tac-toe'
import Clock from "../pages/react-learning/clock";
import UserLayout from '../pages/user/layout'
import Overview from '../pages/overview'
import ReactLayout from '../pages/react-learning/layout';

import Count1 from '../pages/react-learning/count-1'

import Share3 from '../pages/post/share-3'

// const GetRoutes = () => {
//   const routes = useRoutes([
//     {
//       path: '/',
//       element: <UserLayout />,
//       children: [
//         {
//           path: '',
//           element: <Overview />
//         }
//       ]
//     },
//     {
//       path: '/react',
//       element: <ReactLayout />,
//       children: [
//         {
//           path: 'tic-tac-toe',
//           element: <TicTacToe />
//         },
//         {
//           path: 'clock',
//           element: <Clock />
//         }
//       ]
//     },
//     {
//       path: '*',
//       element: <Navigate to="/" />
//     }
//   ])
// }


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="" element={<Overview />}></Route>
        </Route>
        <Route path="/react" element={<ReactLayout />}>
          <Route path="tic-tac-toe" element={<TicTacToe />}></Route>
          <Route path="clock" element={<Clock />}></Route>
          <Route path="count-1" element={<Count1 />}></Route>
        </Route>
        <Route path="/post" element={<ReactLayout />}>
          <Route path="share-220711" element={<Share3 />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
