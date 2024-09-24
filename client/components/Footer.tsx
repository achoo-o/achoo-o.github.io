import { Link } from "react-router-dom";

export default function Footer() {
  const nav = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Projects', link: '/projects'},
  ]
  return (
    <section>
      <ul>
        {nav.map((item, i) => {
          return (
          <li key={i}>
            <Link to={item.link}>
              {item.name}
            </Link>
          </li>
        )})}
      </ul>
    </section>
  )
}
