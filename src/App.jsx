import { useState } from 'react'
import WeatherForm from './components/WeatherForm'
import './App.css'
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null)
  const API_KEY = '772af37a88e452eb1c932d1c6fbcf33e'

  const handleSearch = async (cityName) => {
    try{
      setError(null)
      setWeatherData(null)

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=pt_br`
      )

      if (!response.ok) {
        throw new Error ('Cidade não encontrada!')
      }

      const data = await response.json()
      setWeatherData(data)

    } catch (err){
      setError(err.message)
    }
    
  }

  return (
    <div>
      <h1>Previsão do Tempo</h1>
      <WeatherForm onSearch={handleSearch} />
      {error && <p style={{color: 'red'}}>Erro {error}</p>}
      {weatherData && <WeatherDisplay data={weatherData}/>}
    </div>
  )
}

export default App
 