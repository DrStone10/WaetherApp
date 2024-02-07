import { useState } from "react"
import Search from "./CardComponents/Search"
import Waether from "./CardComponents/Weather"

export default function Card() {
  const apiKey = 'e108bf42277f9d1c009704b017a297c3'
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric'

  let [city, setCity] = useState('')
  let [icon, setIcon] = useState('')
  let [temp, setTemp] = useState(0)
  let [humidity, setHumidity] = useState(0)
  let [wind, setWind] = useState(0)
  let [error_text, setErrText] = useState('')

  async function checkWeather(city:string) {
    try {
      let res = await fetch(apiUrl + `&APPID=${apiKey}` + `&q=${city}`)
      let data = await res.json()
      setCity(data.name)
      setTemp(data.main.temp)
      setHumidity(data.main.humidity)
      setWind(data.wind.speed)
      setIcon(data.weather[0].main)
      setErrText('')
    } catch (error){
      setErrText('Please enter a valid city name.')
      setCity('not found')
      setIcon('')
      setTemp(0)
      setHumidity(0)
      setWind(0)
    }
    
  }
  
  return (
    <>
      <div className="card">
        <Search onSearch={checkWeather}/>
        <p className="error-text">{error_text}</p>
        <Waether 
        city={city} 
        temp={temp} 
        wind={wind} 
        humidity={humidity}
        icon={icon}/>
      </div>
    </>
  )
}
  