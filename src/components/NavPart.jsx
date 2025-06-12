import React, { useState } from 'react'
import { BiCurrentLocation, BiSearch } from 'react-icons/bi'

const NavPart = ({setSearch,gps}) => {
  const [query,setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault() // auto submission
    if (query) {
      setSearch(query);
      setQuery('');
    }
  };

  return (
    <div className='flex justify-around mx-auto max-w-screen bg-amber-50 p-8 rounded-xl shadow-xl shadow-black/20'>
      <form className='flex flex-row flex-wrap gap-3 justify-center items-center '>

        <input type="text" value={query} onChange={(e)=>{setQuery(e.target.value)}} className=' lg:w-[800px] md:w-[500px]  sm:w-[350px] bg-gray-300 p-1.5 px-4 rounded-2xl text-black border-none outline-none' placeholder='Enter City Name...'/>

        <button onClick={handleSearch} class="group h-8 select-none rounded-lg bg-white px-3 text-sm leading-8 text-zinc-950 shadow-[0_-1px_0_0px_#d4d4d8_inset,0_0_0_1px_#f4f4f5_inset,0_0.5px_0_1.5px_#fff_inset] hover:bg-zinc-100 hover:via-zinc-900 hover:to-zinc-800 active:shadow-[-1px_0px_1px_0px_#e4e4e7_inset,1px_0px_1px_0px_#e4e4e7_inset,0px_0.125rem_1px_0px_#d4d4d8_inset] md:scale-110"><span class="block group-active:[transform:translate3d(0,1px,0)] cursor-pointer text-[15px]">Search </span> </button>

        <BiCurrentLocation size={25} onClick={gps} className='md:ml-4 hover:text-blue-700 cursor-pointer text-black'/>

      </form>
    </div>  
  )
}

export default NavPart
