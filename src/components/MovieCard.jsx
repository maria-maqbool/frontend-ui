import React from 'react'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

// style={{boxShadow: '0px 4px 7px 0px rgba(0,0,0,0.75)'}}


const MovieCard = ({title, imgUrl}) => {
  return (
    <>
        <div className="w-[220px] h-[320px] my-[3rem] bg-transparent relative  movieCard">
            <div className='bg-[#FFB10A]  text-center w-[60px] rounded-full absolute top-[-15px] left-20 p-[4px]'>6.8</div>
            <img className='w-[100%] h-[280px] ' src={`${POSTER_PATH}/${imgUrl}`} alt='Image'/>
            <h1 className='text-[white] pt-[10px] text-lg	'>{title}</h1>
            <p className='text-sm	text-[#607989]'>Mystery, Thriller</p>
        </div>
    </>
  )
}

export default MovieCard