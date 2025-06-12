// import React, { useState } from 'react'

// const Weather = () => {
//     const [temp,setTemp] = useState(null)
//     const [name,setName] = useState(null)
//     const [text,setText] = useState(null)
//     const [icon,setIcon] = useState(null)


//     const getData = async (cityName) =>{
//         const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=b6a5a19abfcf454593e33955251106&q=${cityName}&aqi=yes`)
//         return await data.json();
//     }
//         const callApi = async(name) =>{
//             const res = await getData(name)
//             console.log(res);  
//             setTemp(res.current.temp_c)
//             setName(res.location.name)
//             setIcon(res.current.condition.icon)
//         }

       

//   return (
//     <div>
//         <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
//         <button onClick={()=>{callApi(text)}}>Search</button>
//         <p className='text-black'>{name} & {temp}</p>
//         <img src={icon} alt="" />
//     </div>
//   )
// }

// export default Weather

