import React from 'react'
import { FiltersData } from './MoviesData'



const Filter = ({ filterHandler, activeFilter }) => {

  return (
    <>

      {/* <li className={`${active === filterNo ? "text-red-800" : "" }`}><button onClick={() => filters(filterNo)}>{filterName}</button></li> */}
      <div className='border-t-2 border-[#222B31] p-[1rem]'>
        <h1 className='py-[10px] text-lg text-[white] font-medium'>FILTERS</h1>

        <ul >
          {
            FiltersData.map((item) => (<>
              {/* // <Filter key={item.id} filters={filterHandler} filterNo={item.filterNo} filterName={item.filterType} active={activeFilter} /> */}
              {/* <li className={`${activeFilter === item.filterNo ? "text-red-800" : ""} py-[5px]`} key={item.id}><button onClick={() => { filterHandler(item.filterNo) }}>{item.filterType}</button></li> */}
              <li  className={`filter-button  my-[5px] ${activeFilter === item.filterNo ? "text-lime-200" : ""}`}   key={item.id}>
                <button        
                onClick={() => {filterHandler(item.filterNo) }}
                >
                {item.filterType}
                </button>
              </li>
            </>
            ))

          }
        </ul>
        {/* <h1>Filter Example</h1> */}
        {/* <FilterButton onClick={handleFilterClick} active={filterActive} /> */}
        {/* <FilterButton /> */}
      </div>
    </>
  )
}

export default Filter