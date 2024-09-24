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
      description: 'A simple rock, paper, scissors project made as part of The Odin Project.', 
      link: 'https://achoo-o.github.io/paper-scissors-rock/paperScissorsRock.html',
      thumbnail: 'rockpaperscissors.png',
      alt: ''
      },
  ]
  //https://flowbite.com/docs/components/card/
  return (
    <div className="flex flex-col h-screen justify-center items-center p-4 text-center">
      <div className="flex flex-row gap-10">
      {projects.map((project) => {
        const {name, description, link, thumbnail, alt} = project
        return(
          <section key={name} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href={link}>
                <img className="rounded-t-lg  object-cover max-h-56 w-full" src={`images/${thumbnail}`} alt={alt} />
            </a>
            <div className="p-5">
                <a href={link}>
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-black">{name}</h1>
                </a>
                <p className="mb-3 font-normal text-gray-800">
                  {description}
                </p>
                <a href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View Project
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </section>
        )
      })}
      </div>
      {/* <div className="text-center">
        <div className="w-4 h-4 rounded-full bg-gray-700"></div>
        <div className="w-4 h-4 rounded-full bg-gray-700"></div>
        <div className="w-4 h-4 rounded-full bg-gray-700"></div>
      </div> */}
    </div>
  )
}
