import React from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {
  
  render() {
    let forecasts = [];
    try {
      forecasts = this.props.weather.map((forecast, idx) => <Card.Text key={idx}>Date: {forecast.date}: {forecast.description}</Card.Text>);
    } catch {
      forecasts = <Card.Text>Data unavailable</Card.Text>
    }
    return (
      <Card>
        <Card.Header as='h2'>Local Weather</Card.Header>
        <Card.Body>
          {forecasts}
        </Card.Body>
      </Card>
    );}
}

export default Weather;