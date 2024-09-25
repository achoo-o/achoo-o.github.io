import { Outlet, useMatches } from "react-router-dom";
import useDocumentTitle from './hooks/use-document-title.ts'
import Header from "./Header";


export default function App() {
  const matches = useMatches()
  const pageTitle = matches[1].handle
  useDocumentTitle(pageTitle ? `${pageTitle}` : 'Amy | Developort.')
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
