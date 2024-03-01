import React from 'react'
import MovieCard from './MovieCard';
import './index.css'



const HeroSection = ({filteredmovies, pageHandler}) => {

    return (
        <>
            <div className='w-[85%] p-[2.5rem] pt-[4rem]'>
                <h1 className='text-3xl text-[white]'>New Releases</h1>

                <div className="flex items-center	justify-between flex-wrap">
                    {filteredmovies && filteredmovies.map((movie) => (
                        <MovieCard key={`${movie.id}${movie.genre_ids}`} title={movie.title} imgUrl={movie.poster_path} />
                    ))}
                </div>

                <button className='custom-button' onClick={pageHandler}>Next Page</button>
                {/* <button className='custom-button mx-2' onClick={pageHandler}>Prev Page</button> */}



              

            </div>
        </>
    )
}

export default HeroSection