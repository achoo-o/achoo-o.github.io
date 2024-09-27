import { Outlet, useMatches } from "react-router-dom";
import useDocumentTitle from './hooks/use-document-title.ts'
import BackgroundHeader from "./BackgroundHeader.tsx";


export default function App() {
  const matches = useMatches()
  const pageTitle = matches[1].handle
  useDocumentTitle(pageTitle ? `${pageTitle}` : 'Amy | Developort.')
  return (
    <div>
      <BackgroundHeader />
      <Outlet />
    </div>
  )
}
