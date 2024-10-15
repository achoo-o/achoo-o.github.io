import iconList from "../data/skills"

export default function Skills() {
  return (
    <div className="transition-all flex flex-col justify-center items-center w-full">
      <section className='flex flex-col flex-wrap justify-center gap-6'>
        <hr className="mb-8 mx-5 h-[2px] rounded-full bg-blue-100 border-0"></hr>
        <span className="flex flex-wrap justify-center gap-8">
          {iconList.map((icon) => {
            return (
              <span key={icon.name} className="flex flex-col items-center gap-2 group">
                <i className={`devicon-${icon.class} text-6xl text-gray-200`} aria-labelledby={`${icon.name} logo`}></i>
                <p className="group-hover:opacity-100 opacity-0 text-gray-100 font-medium transition-all duration-300">
                  {icon.name}
                </p>
              </span>
            )
          })}
        </span>
      </section>
    </div>
  )
}
