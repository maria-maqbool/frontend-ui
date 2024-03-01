import {motion} from 'framer-motion'
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
function Movie({movie}) {
  return (
    <>
      {/* transition={{duration: 2}} */}
      <motion.div animate={{opacity: 1, scale: 1}} initial={{opacity: 0}} exit={{opacity: 0, scale: 0 }} layout>
      <h2 className="font-bold">{movie.title}</h2>
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
      </motion.div>
    </>
  )
}

export default Movie
