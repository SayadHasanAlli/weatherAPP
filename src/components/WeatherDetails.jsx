import React from 'react'
import { FaThermometerEmpty } from 'react-icons/fa'
import { FiWind } from 'react-icons/fi'
import { BiSolidDropletHalf } from 'react-icons/bi'
import { GiSunrise } from 'react-icons/gi'
import { MdKeyboardArrowUp,MdKeyboardArrowDown } from 'react-icons/md'
import logo from "../assets/logo.png"

const WeatherDetails = ({data,loading}) => {
    if(loading) return(<div>
      <p className='text-3xl text-center'>
        Loading...
      </p>
    </div>)
    if(!data) return
    if (data.error) {
    return <div className="text-center text-red-500">Please Enter a Valid Location...</div>;
  }

  const {
    current: {
      feelslike_c,
      humidity,
      temp_c,
      wind_kph,
      condition: { text,icon }
    },
    location: { name, country, localtime }
  } = data;
  return (
    <div className='flex flex-col gap-5'>

      <div className='flex items-center justify-center md:text-xl text-cyan-300'>
        <p>{data.current.condition.text}</p>
      </div>

      <div className='flex flex-row items-center justify-around'>

        <img src={icon} alt="logo" className='h-15 w-15 scale-150 md:h-20 md:w-20'/>
        <h1 className=' text-2xl md:text-5xl'>{temp_c}°</h1>

        <div className='flex flex-col space-y-3 items-start'>
            <div className='flex items-center justify-center text-sm mr-2 mt'>
                <FaThermometerEmpty size={15} className='mr-1'/> Real Feel: <span className='ml-1'> {feelslike_c}°</span>
            </div>
            <div className='flex items-center justify-center text-sm mr-2 mt'>
                <BiSolidDropletHalf size={15} className='mr-1'/> Humidity: <span className='ml-1'>{humidity}%</span>
            </div>
            <div className='flex items-center justify-center text-sm mr-2 mt'>
                <FiWind size={15} className='mr-1'/> Wind: <span className='ml-1'>{wind_kph} <span>km/h</span></span>
            </div>

        </div>

      </div>

    </div>
  )
}

export default WeatherDetails
