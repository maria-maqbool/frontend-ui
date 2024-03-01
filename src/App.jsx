
import React, { useEffect, useState } from 'react'
import SideBar from './components/SideBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { BASE_URL } from './constant';



const App = () => {

  const [movies, setMovies] = useState([]);
  const [filteredmovies, setFilteredmovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchMovie, setSearchMovie] = useState('');
  const [activeFilter, setActiveFilter] = useState(0);


  useEffect(() => {
    const fetchMovies = async () => {

      const response = await fetch(`${BASE_URL}${page}`);
      const data = await response.json();
      setMovies([...movies, ...data.results]);
      setFilteredmovies([...movies, ...data.results]);
    };
    fetchMovies();
  }, [page]);

  const filterHandler = (type) => {
    setActiveFilter(type);
  };


  const applyFilterAndSearch = (movies, searchTerm, filterType) => {
    return movies.filter((movie) => {
      const matchesFilter = filterType === 0 || movie.genre_ids.includes(filterType);
      const matchesSearch = searchTerm === '' || movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  };

  useEffect(() => {
    const filtered = applyFilterAndSearch(movies, searchMovie, activeFilter);
    setFilteredmovies(filtered);
  }, [activeFilter, movies, searchMovie]);

  const SearchHandler = (event) => {
    const searchTerm = event.target.value;
    setSearchMovie(searchTerm);
    const filtered = applyFilterAndSearch(filteredmovies, searchTerm, activeFilter);
    setFilteredmovies(filtered);
  };


  const pageHandler = () => {
    setPage(page+1);
  }

  const prePage = () => {
    setPage(page-1);
  }

  console.log("PreviousPage: ", prePage );

  return (
    <>
      <div className='bg-[#222B31]'>
        <Header search={SearchHandler} />

        <div className='flex text-[white]'>

          <SideBar filterHandler={filterHandler} activeFilter={activeFilter} />

          <HeroSection  filteredmovies={filteredmovies} pageHandler={pageHandler} prePage={prePage}/>
     


        </div>
      </div>
    </>
  )
}

export default App