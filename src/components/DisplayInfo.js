import React from 'react';
import Map from './Map'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Weather from './Weather';
import Movies from './Movies';

class DisplayInfo extends React.Component {

  render () {
    console.log(this.props);
    return (
      <>
        {this.props.errorMessage ? <h3>{this.props.errorMessage}</h3> : ''}
        {this.props.displayName ? 
        <Jumbotron>
          <h2>{this.props.displayName}</h2>
          <h3>Latitude: {this.props.lat}</h3>
          <h3>Longitude: {this.props.lon}</h3>
          <Map 
            lat = {this.props.lat}
            lon = {this.props.lon}
          />
        </Jumbotron> : ''}
        {this.props.weather ? <Weather weather={this.props.weather} /> : ''}
        {this.props.movies ? <Movies movies={this.props.movies} /> : ''}
      </>
    )
  }
}


export default DisplayInfo