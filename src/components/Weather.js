import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import WeatherDay from './WeatherDay.js'

class Weather extends React.Component {
  
  render() {
    let forecasts = [];
    try {
      forecasts = this.props.weather.map((forecast, idx) => {
        return(
        <WeatherDay 
          key={idx}
          date={forecast.date}
          description={forecast.description}
        />
      )})
      console.log('Forecasts for all days is ', forecasts)
    } catch {
      forecasts = <Card.Text>Data unavailable</Card.Text>
    }
    return (
      <>
        <h1>Local Weather</h1>
        <CardColumns>
          {forecasts}
        </CardColumns>
      </>
    )}
}

export default Weather;