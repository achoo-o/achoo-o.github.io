import { Outlet } from "react-router-dom";
import Header from "./Header";


export default function App() {
  return (
    <div className="bg-black font-poppins">
      <Header />
      <Outlet />
    </div>
  )
}
