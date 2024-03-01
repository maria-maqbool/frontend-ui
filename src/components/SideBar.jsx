import React from 'react'
import { FiltersData, Navigation } from './MoviesData'
import Filter from './Filter'
import NavSection from './NavSection'

const SideBar = ({filterHandler, activeFilter}) => {

  return (
    <>
            <div className='w-[15%] bg-[#191C1F] text-[#96A1A8] p-[1rem] pt-[3rem]'>
            {/* <ul>
                {
                    Navigation.map((item) => (
                        <li className='p-[10px]'><button>{item.page}</button></li>
                    ))
                }
              
              <li className='p-[10px]'><button>Trending</button></li>
              <li className='p-[10px]'><button>Coming Soon</button></li>
              <li className='p-[10px]'><button>Favourites</button></li>
              <li className='p-[10px]'><button>Watch Later</button></li>
            </ul> */}
                <NavSection />
           
                <Filter  filterHandler={filterHandler} activeFilter={activeFilter}/>
         
           
         
            
            {/* <ul className='text-[white]'>
              {
                FiltersData.map((item) => (
                  <Filter key={item.id} filters={filterHandler} filterNo={item.filterNo} filterName={item.filterType} active={activeFilter} />
                ))

              }
            </ul> */}
          </div>
    </>
  )
}

export default SideBar