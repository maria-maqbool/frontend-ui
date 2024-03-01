import { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
function Filters({movies, genre, setFiltered, setGenre}) {
  useEffect(() => {
    const filtered = genre === 0 ? movies : movies.filter((movie)=> movie?.genre_ids?.includes(genre));
    setFiltered(filtered);
  }, [genre]);
  return (
    <>
      <div className="filter-container flex gap-2 mb-3">
        <button onClick={()=> setGenre(0)} className="rounded-md bg-indigo-600 px-5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">All</button>
        <button onClick={()=> setGenre(35)} className="rounded-md bg-indigo-600 px-5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Comedy</button>
        <button onClick={()=> setGenre(28)} className="rounded-md bg-indigo-600 px-5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Action</button>
      </div>
    </>
  )
}

export default Filters
