import { Link } from "react-router-dom"

export default function Head () {
  return (
    <header className="header">
      <div className="logo">奚鱼</div>
      <p className="websiteName fontMedievalSharp"><Link to="/">XIYU HOME</Link></p>
    </header>
  )
}