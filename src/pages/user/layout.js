import { Outlet } from "react-router-dom"
import LeftSide from "../../components/layout/leftSide"
import Head from "../../components/layout/head"

export default function UserLayout () {
  return (
    <main className="UserMain">
      <LeftSide />
      <section>
        <Head />
        <div className="contentView">
          <Outlet />
        </div>
      </section>
    </main>
  )
}