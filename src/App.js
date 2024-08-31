import React from 'react'

export default function App() {

  // https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=1d9b0f36e20f99ea00a2a68e7309dd20
  return (
    <div className='app'>
      <div className='container'>

    <div className='top'>
      <div className="location">
        <p>Dubai</p>
      </div>
      <div className='temp'>
        <h1>30&#8451;</h1>
      </div>
      <div className='desription'>
        <p>Rain</p>
      </div>
    </div>
    <div className='bottom'>
      <div className='feels'>
        <p>45&#8451;</p>
        <p>feels like</p>
      </div>
      <div className='hum'>
        <p>47%</p>
        <p>Humidity</p>
      </div>
      <div className='wind'>
        <p>7MPH</p>
        <p>Wind speed</p>
      </div>
    </div>
      </div>
    
  
  </div>
  )
}
