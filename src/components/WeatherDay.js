import React from 'react';
import Card from 'react-bootstrap/Card';

class WeatherDay extends React.Component{


  render () {

    return (
    <Card key={this.props.key}>
      <Card.Body>
        <Card.Text>
          Date: {this.props.date}: {this.props.description}
        </Card.Text>
      </Card.Body>
    </Card>
    )
  }
}


export default WeatherDay