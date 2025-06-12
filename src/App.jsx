import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavPart from './components/NavPart'
import TimeAndLocation from './components/TimeAndLocation'
import WeatherDetails from './components/WeatherDetails'
import { Toaster } from 'react-hot-toast'
import DailyForcast from './components/DailyForcast'




function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('delhi');
  const [locationNotFound,setLocationNotFound] = useState(false)

  const API_KEY = "b6a5a19abfcf454593e33955251106";

  // Function to fetch weather data
  const fetchWeather = async (query) => {
    try {
      setLoading(true);
      const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}&aqi=yes`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.error) {
        setLocationNotFound(true)
        setError(data.error.message);
        setWeatherData(null);
      } else {
        setWeatherData(data);
        setError(null);
        setLocationNotFound(false)
      }
    } catch (err) {
      setError("Failed to fetch weather data.");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  // Call API when search is updated
  useEffect(() => {
    if (search) {
      fetchWeather(search);
    }
  }, [search]);

  // On first load, try user location
 const gps = () => {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      const coords = `${latitude},${longitude}`;

      try {
        setLoading(true)
        const res = await fetch(`http://api.weatherapi.com/v1/search.json?key=b6a5a19abfcf454593e33955251106&q=${coords}`);
        const data = await res.json();

        if (data.length > 0) {
          const locationName = data[0].name; 

          // Set search value for user location name
          fetchWeather(locationName);
          setSearch(locationName)
        } else {
          console.warn("No location found, fallback to default.");
          fetchWeather("Delhi");
        }
      } catch (error) {
        console.error("Reverse geocoding failed:", error);
        fetchWeather("Delhi");
        setLoading(false)
      }
    },
    (error) => {
      console.error("Geolocation permission denied:", error);
      fetchWeather("Delhi");
    }
  );
};


  useEffect(() => {
    gps()
  },[]);
  

  return (
    <div className='flex flex-col md:gap-10 gap-5 md:mt-10 overflow-hidden overflow-x-hidden'>
      <Toaster/>
      <NavPart setSearch={setSearch} gps={gps}/>
      <TimeAndLocation data={weatherData}/>
      <WeatherDetails data={weatherData} loading={loading}/>
      <DailyForcast search={search} LocationNotFound={locationNotFound}/>
    </div>
  )
}

export default App
