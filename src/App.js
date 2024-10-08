import React, {useState} from 'react'

import axios from 'axios'

export default function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")


const url = `${process.env.REACT_APP_WEATHER_API_URL}?q=${location}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

 const searchLocation =(e) => {
  if(e.key ==="Enter"){
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data);  
    })

  }
 }

  return (
    <div className='app'>
      <div className="search">
        <input 
        onKeyPress={searchLocation}
        placeholder='Enter location'
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        type="text" />
      </div>

      <div className='container'>

    <div className='top'>
      <div className="location">
        <p>{data.name}</p>
      </div>
      <div className='temp'>
        {data.main ? <h1>{data.main.temp.toFixed()}&#8451;</h1> : null  }
      </div>
      <div className='description'>
      {data.weather ? <p>{data.weather[0].main}</p> : null }
      
      </div>
    </div>

{data.name !==undefined &&

    <div className='bottom'>
    <div className='feels'>
        {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}&#8451;</p> : null  }
        <p>feels like</p>

      </div>
      <div className='humiity'>
        <p className='bold'></p>
        {data.main ? <p className='bold'>{data.main.humidity}%</p> : null  }
        <p>Humidity</p>
      </div>
      <div className='wind'>

        {data.wind ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null  }
        <p>Wind speed</p>
      </div>
    </div>

}

      </div>
  </div>
  )
}
