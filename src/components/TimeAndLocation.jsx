import React from 'react'
import toast from 'react-hot-toast';

const TimeAndLocation = ({data}) => {
  
  if(!data){
    return(<h2 className="text-2xl text-center font-semibold text-red-600">Location Not Found</h2>)
  }
   
  const {location:{country,region,name,localtime}} = data

  // covertion of local time
  const formatLocalTime = (localtime) => {
    const dateObj = new Date(localtime.replace(" ", "T")); // convert to ISO format

    const optionsDate = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: true };

    const formattedDate = dateObj.toLocaleDateString('en-US', optionsDate);
    const formattedTime = dateObj.toLocaleTimeString('en-US', optionsTime);

    return `${formattedDate} | Local time: ${formattedTime}`;
  };

  return (
    <div className=''>
      <div>
        <p className='text-[12px] sm:text-[20px] flex items-center justify-center'>
            {formatLocalTime(localtime)}
        </p>
      </div>
      <div className='text-2xl flex mt-5 font-semibold justify-center items-center'>
        <p>
            {name},{region} | {country}
        </p>
      </div>
    </div>
  )
}

export default TimeAndLocation
