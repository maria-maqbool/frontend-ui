import React from 'react'
import { LiaSignalSolid } from "react-icons/lia";
import { FaSearch } from "react-icons/fa";

const Header = ({search}) => {
    return (
        <>
            <header className='bg-[#FF424F] p-[20px] flex items-center	justify-center text-[white] '>
                <LiaSignalSolid />
                <h6 className='w-[15%] px-[10px]'>MEDIA APP</h6>
                <div className='flex items-center	justify-between w-[85%]'>
                    <div className=' flex items-center	justify-center  text-[#D5D7D8] '>
                        <FaSearch />
                        <input className='bg-transparent text-xs px-[5px]' type="text" placeholder='Search movies' onInput={search} />
                    </div>
                    <p className='text-sm  px-[20px] text-[#D5D7D8]'>John Meyer</p>
                </div>
            </header>
        </>

    )
}

export default Header