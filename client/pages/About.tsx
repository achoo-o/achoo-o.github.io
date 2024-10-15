import Skills from "../components/Skills";

export default function About() {
  return (
    <section className="flex flex-col items-center gap-5 mt-44 p-2">
      <h1 className="text-5xl text-white">About</h1>
      <section className="max-w-screen-md text-xl mt-8 text-gray-200 text-center leading-loose">
        <p className="mb-2">The background was made using p5.js</p>
          <a 
            className="text-xl text-blue-100 hover:underline" 
            href="https://editor.p5js.org/achoo-o/sketches/u-pKxOnxV"
            target="_blank" 
            rel="noreferrer">
              Sample here.
          </a>
        <p className="mt-2">My self-development journey started with&nbsp;
          <a 
            className="text-xl text-blue-100 hover:underline" 
            href="https://www.theodinproject.com/">
              The Odin Project
          </a>, 
          whose Ruby course I&apos;m looking forward to revisiting.
        </p>
        <p className="mt-2">I am an alumni of&nbsp;
          <a 
            href="https://devacademy.co.nz/"
            className="text-xl text-blue-100 hover:underline">
              Dev Academy Aotearoa
          </a>.
        </p>
      </section>
        <span className="mt-6 text-white">
          <a className="text-xl text-blue-50 hover:underline" href="mailto:dev@achoo-o.mozmail.com">
            email
          </a>
          &nbsp;&nbsp;•&nbsp;&nbsp;
          <a className="text-xl text-blue-50 hover:underline" href="https://github.com/achoo-o" target="_blank" rel="noreferrer">
            github
          </a>
        </span>
        <span className="mt-2 lg:mt-8">
          <Skills />
        </span>
    </section>
  )
}
