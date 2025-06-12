import React, { useEffect, useState } from 'react'
import DayForcast from './DayForcast'
import DataNotFound from './DataNotFound'

const DailyForcast = ({search, LocationNotFound}) => {
  const [fdata, setFdata] = useState([])
  const [temp,setTemp] = useState("london")
  // if(search){
  //   setTemp("london")
  // }else{
  //   setTemp(search)
  // }
   
  const forecast = async () =>{
     try{
      const forcastData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=b6a5a19abfcf454593e33955251106&q=${search}&days=10&aqi=no&alerts=no`)
      const data = await forcastData.json();
      // console.log(data)
      //  console.log(data.forecast.forecastday.map((i) =>({
      //     temp: i.day.avgtemp_c,
      //  })));
      console.log(data.location.name)
      if(data.forecast || data.forecast.forecastday){
        await new Promise(resolve => setTimeout(resolve, 2000));
        setFdata(data.forecast.forecastday)
      }
      else{
        console.log("data not found")
        setFdata(null)
      }
     }catch(e){
      console.log("error",e)
     }

  }


  useEffect(()=>{

    forecast(search);

  },[search])

  // formating data -> june 12 from 2025-06-12
  const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
  });
};


  return (
    <div>
      <h1 className='text-bold md:text-3xl font-bold'>Daily - Forcast</h1>

       <div className='flex flex-row overflow-x-auto mt-5 justify-around items-center'>
        {
          LocationNotFound?
          <DataNotFound/>
          :fdata.map((i) => (
            <DayForcast
              date = {formatDate(i.date)}
              maxtemp = {i.day.maxtemp_c}
              mintemp = {i.day.mintemp_c}
              icon = {i.day.condition.icon}
            />
          ))
        }

       </div>
    </div>
  )
}

export default DailyForcast
