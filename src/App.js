import './App.css';
import React, {useState} from 'react';

function App() {
  const [city, setCity] = useState("")
  const [result, setResult] = useState("")
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then
    (response => response.json()).then
    (data => {
      const kelvin = data.main.temp
      const celsius = kelvin - 273.15
      setResult("Temperature at "+ city +  " is " +  Math.round(celsius) + '°C')
    })
    
  }

  return (
    <div className='container'>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h1 className='card-title'>Weather App</h1>
            <br/>
            <form onSubmit={submitHandler}>
            <input type="text" name='city' value={city} onChange = {e => setCity(e.target.value)}/><br/><br/>
            <input type="submit" className='sub-btn' value = "Get Temperature" />
            </form>
            <br/>
            <h1> {result} </h1>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
