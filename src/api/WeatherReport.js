import React from 'react'

const WeatherReport = async() => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=b6a5a19abfcf454593e33955251106&q=bhadrak&aqi=yes'
    const data = await fetch(url)
    const res = await data.json()
    console.log(res);
    
  return{
    temp: res.current.temp_c,
  }
}

export default WeatherReport
