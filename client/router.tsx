import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Projects from './pages/Projects.tsx'


export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} handle={'Amy | Web Developer'} />
    <Route path="about" element={<About />} handle={'Amy | About'} />
    <Route path="projects" element={<Projects />} handle={'Amy | Projects'} />
  </Route>
)

export const router = createBrowserRouter(routes)