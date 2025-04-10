import React from 'react'

const WeatherDisplay = ({ data }) => {
    const {
        name,
        sys: { country },
        main: { temp },
        weather
    } = data;

    const description = weather[0].description
    const iconCode = weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;


    return (
        <div style={{ border: '2px solid #ccc', padding: '1rem', textAlign: 'center', marginTop: '1rem' }}>
            <h2> {name}, {country}</h2>
            <img src={iconUrl} alt={description} />
            <p><strong>Temperatura: </strong>{temp} º</p>
            <p><strong>Clima: </strong>{description}</p>
        </div>
    )
}

export default WeatherDisplay