//-------------------Imports----------------------
import axios from 'axios';
import DisplayInfo from './DisplayInfo'
import React from 'react';
import Searchbar from './Searchbar';
import Weather from './Weather';

//-------------Boot Strap Imports-------------


//---------------Class Decleration----------------------
class Main extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      city: {},
      errorMessage: ``,
    };
  }

  getCityData = async (city) => {
    try {
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER}&q=${city}&format=json`);

      this.setState ({
        city: cityData.data[0]
      })
      // now that we have lat/lon, request the weather data
      let weatherData = await axios.get(`http://localhost:3001/weather?lat=${this.state.city.lat}&lon=${this.state.city.lon}&searchQuery=${this.state.city.display_name.split(',')[0]}`)

      console.log(weatherData);
      this.setState({
        weather: weatherData.data
      });
    } catch (err) {
      this.setState({
        errorMessage: `${err.message}: ${err.response.data.error}`
      });
    }

  }

  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <h2>Choose a city to explore!</h2>
        <Searchbar 
          getCityData = {this.getCityData}       
        />
        <DisplayInfo 
          displayName = {this.state.city.display_name}
          lon = {this.state.city.lon}
          lat = {this.state.city.lat}
          errorMessage = {this.state.errorMessage}
        />
        {this.state.weather ? <Weather weather={this.state.weather} /> : ''}
      </>
    )
  };
}

export default Main