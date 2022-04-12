import { Outlet } from "react-router-dom"
import Head from "../../components/layout/head"

export default function UserLayout () {
  return (
    <main className="UserMain ReactMain">
      <section>
        <Head />
        <div className="contentView">
          <Outlet />
        </div>
      </section>
    </main>
  )
}