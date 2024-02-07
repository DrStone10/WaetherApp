interface WeatherProps {
    city:string;
    icon:string;
    temp:number;
    wind:number;
    humidity:number;
}

export default function Waether({city, temp, wind, humidity, icon}:WeatherProps) {
    var image:string = ''

    if (icon == 'Clear'){
        var image = 'src/assets/clear.png'
    } else if (icon == 'Clouds') {
        var image = 'src/assets/clouds.png'
    } else if (icon == 'Drizzle') {
        var image = 'src/assets/drizzle.png'
    } else if (icon == 'Mist') {
        var image = 'src/assets/mist.png'
    } else if (icon == 'Rain') {
        var image = 'src/assets/rain.png'
    } else if (icon == 'Snow') {
        var image = 'src/assets/snow.png'
    }

    return (
      <>
        <div className="weather">
            <img className="weather-icon" src={image}/>
            <p className="state">{icon}</p>
            <h1 className="temp">{Math.round(temp)}°c</h1>
            <h2 className="city">{city}</h2>
            <div className="details">
                <div className="col">
                    <img src='src/assets/humidity.png' />
                    <div>
                        <p className="humidity">{humidity}%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className="col">
                    <img src='src/assets/wind.png' />
                    <div>
                        <p className="wind">{wind} km/h</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}