import React, { useState } from 'react'

const WeatherForm = ({onSearch}) => {
const [city, setCity] = useState('')

const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim() !== '') {
        onSearch(city);
        setCity('')
    }
}

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Digite o nome da cidade'
        value={city}
        onChange={(e) => setCity(e.target.value)}        
        />
        <button type='submit'>Buscar</button>

    </form>
  )
}

export default WeatherForm
 