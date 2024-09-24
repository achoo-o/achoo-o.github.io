import { Link } from "react-router-dom";

export default function Footer() {
  const nav = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Projects', link: '/projects'},
  ]
  return (
    <section className="flex justify-center">
      <ul className="flex flex-row absolute bottom-0 gap-16 my-10">
        {nav.map((item, i) => {
          return (
          <li key={i} className="hover:text-blue-200">
            <Link to={item.link}>
              {item.name}
            </Link>
          </li>
        )})}
      </ul>
    </section>
  )
}
