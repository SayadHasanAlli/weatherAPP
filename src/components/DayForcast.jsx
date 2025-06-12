import React from 'react'
import logo from "../assets/logo.png"

const DayForcast = ({maxtemp, mintemp, icon, date}) => {
  return (
    <div className='border-2 m-2 mr-6 ml-4 p-1 px-2 md:scale-110 flex scale-x-160 flex-wrap flex-col justify-center items-center shadow-xl shadow-black/10'>
        <p>{date}</p>
        <img className='md:h-20 md:w-20' src={icon} alt="icon" />
        <h5 className='text-[10px]'>{maxtemp}°C / {mintemp}°C</h5>
    </div>
  )
}

export default DayForcast
