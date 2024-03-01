import React from 'react'
import {Navigation } from './MoviesData'

const NavSection = () => {
    return (
        <>
         <div className='p-[1rem]'>
                    <h1 className='text-lg text-[white] font-medium'>MOVIES</h1>
            <ul>
                {
                    Navigation.map((item) => (
                        // <li className={`${activeFilter === item.filterNo ? "text-red-800" : ""}, p-[10px]`}><button>{item.page}</button></li>
                        <li className= 'py-[8px]'><button>{item.page}</button></li>
                    ))
                }
            </ul>
            </div>
        </>
    )
}

export default NavSection