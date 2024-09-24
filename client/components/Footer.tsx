import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects">
            Projects
          </Link>
        </li>
      </ul>
    </section>
  )
}
