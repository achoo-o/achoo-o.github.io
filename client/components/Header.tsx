import { Link, Outlet, useMatches } from "react-router-dom";
import useDocumentTitle from "./hooks/use-document-title";

export default function Header() {
  const nav = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Projects', link: '/projects'},
  ]
  const matches = useMatches()
  const pageTitle = matches[1].handle
  useDocumentTitle(pageTitle ? `${pageTitle}` : 'Amy | Developort.')
  return (
    <>
    <section className="flex justify-center">
      <ul className="flex flex-row absolute top-0 gap-16 my-10 z-[999]">
        {nav.map((item, i) => {
          return (
          <li key={i} className="text-gray-300 hover:text-blue-200">
            <Link to={item.link}>
              {item.name}
            </Link>
          </li>
        )})}
      </ul>
    </section>
    <Outlet />
    </>
  )
}
