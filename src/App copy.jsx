import { useState, useEffect } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import './App.css'
import Filters from './components/Filters';
import { useRoutes } from "react-router-dom";
import Movie from './Movie';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
function App() {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [genre, setGenre] = useState(0);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=cb43d8e789fe997e8f71935951457b0b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
      const movies = await response.json();
      setMovies(movies.results);
      setFiltered(movies.results);
      console.log('newData: ', );
    };
  
    fetchMovies();
  }, []);
  return (
    <>
      <div className='App'>
        <Filters movies={movies} setFiltered={setFiltered}  genre={genre} setGenre={setGenre} />
        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0 }} layout className='popular-movies grid'>
          <AnimatePresence>
            {filtered && filtered.map((movie, index)=> {
              return <Movie movie={movie} key={index} />
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  )
}

export default App
