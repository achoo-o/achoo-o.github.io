import * as motion from 'framer-motion/client'

export default function Home() {

  const container = {
    hidden: { opacity: 0, z: -100 },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 5,
        delayChildren: 0.4,
        staggerChildren: 0.75,
      },
    },
  }

  const text = {
    hidden: {
      opacity: 0,
      filter: 'blur(30px)',
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: { type: 'spring', bounce: 0, duration: 1 },
    },
  }

  return (
    <motion.section 
    className={`flex flex-col min-h-screen justify-center p-4 text-center z-0`}
    variants={container} 
    initial="hidden" 
    animate="visible">
      <motion.h1 
      className="mb-6 text-white text-5xl lg:text-7xl">
        Amy Jackson
      </motion.h1>
      
      <motion.h2 
      variants={text}
      className="text-gray-200 text-2xl lg:text-3xl">
        Full Stack Web Developer
      </motion.h2>
    </motion.section>
  )
}
