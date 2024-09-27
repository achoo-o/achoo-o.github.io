import { useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"

export default function Projects() {
  const projects = [
    {
      name: 'pawpals', 
      description: 'Made as part of the DevAcademy course in a group of 5, pawpals is a website made to bring pet-lovers together.', 
      link: 'https://pawpals-matai-24.devacademy.nz/',
      thumbnail: 'pawpals.png',
      alt: ''
    },
    {
      name: 'Whakataukī API', 
      description: 'This project was made to promote Te Reo Māori usage in the developer space via Whakataukī, Māori "proverbs".', 
      link: 'https://whakatauki-api.up.railway.app/',
      thumbnail: 'whakatauki.png',
      alt: ''
    },
    {
      name: 'My \'First\' Project', 
      description: 'A simple rock, paper, scissors project made as part of The Odin Project. One of the very first games I managed to deploy.', 
      link: 'https://achoo-o.github.io/paper-scissors-rock/paperScissorsRock.html',
      thumbnail: 'rockpaperscissors.png',
      alt: ''
      },
  ]

  const [ slide, setSlide ] = useState(0)

  function handleClick(dir: string): void {
    const max = 2

    switch(dir) {
      case'left':
        slide === 0 ? setSlide(max) : setSlide(slide - 1)
        break;
      case 'right':
        slide === max ? setSlide(0) : setSlide(slide + 1)
    }
  }

  //https://flowbite.com/docs/components/card/
  return (
    <div className="transition-all flex flex-col justify-center items-center p-4">
      <div className="flex flex-row gap-10">
      {projects.map((project, i) => {
        const {name, description, link, thumbnail, alt} = project
        const hidden = slide === i ? 'flex' : 'hidden'
        return(
          <div key={name} className={`${hidden} flex-row items-center mt-20 min-w-144`}>
            <BsArrowLeftCircleFill className="left-0 mr-7 w-12 h-12 shrink-0 text-gray-200 hover:cursor-pointer" onClick={() => handleClick('left')}/>
            <section  className="max-w-lg bg-blue-500 bg-opacity-5 border-2 border-gray-900 rounded-lg shadow-lg">
              <a href={link}>
                  <img 
                  className="transition-all rounded-t-lg  object-cover max-h-96 min-h-96 w-full" 
                  src={`images/${thumbnail}`} 
                  alt={alt} />
              </a>
              <div className="p-5">
                  <a href={link}>
                      <h1 className="mb-2 text-2xl font-bold tracking-tight text-white">{name}</h1>
                  </a>
                  <p className="mb-3 font-normal text-gray-300">
                    {description}
                  </p>
                  <a href={link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center mt-3 px-3 py-3 text-sm font-semibold text-center text-white bg-orange-400 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300">
                      View Project
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
            </section>
            <BsArrowRightCircleFill className="right-0 ml-7 w-12 h-12 shrink-0 text-gray-200 hover:cursor-pointer" onClick={() => handleClick('right')}/>
          </div>
        )
      })}
      </div>
      <div className="flex flex-row gap-2 mt-10 text-center">
        <button onClick={() => setSlide(0)} tabIndex={0} className={`transition-all w-4 h-4 rounded-full ${slide === 0 ? 'bg-gray-200' : 'bg-gray-700'}`}></button>
        <button onClick={() => setSlide(1)} tabIndex={0} className={`transition-all w-4 h-4 rounded-full ${slide === 1 ? 'bg-gray-200' : 'bg-gray-700'}`}></button>
        <button onClick={() => setSlide(2)} tabIndex={0} className={`transition-all w-4 h-4 rounded-full ${slide === 2 ? 'bg-gray-200' : 'bg-gray-700'}`}></button>
      </div>
    </div>
  )
}
