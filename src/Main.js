//-------------------Imports----------------------
import axios from 'axios';
import DisplayInfo from './DisplayInfo'
import React from 'react';
import Searchbar from './Searchbar';

//-------------Boot Strap Imports-------------


//---------------Class Decleration----------------------
class Main extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      city: {},
      errorMessage: ``
    };
  }

  getCityData = async (city) => {
    try {
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER}&q=${city}&format=json`);

      this.setState ({
        city: cityData.data[0]
      })

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
      </>
    )
  };
}

export default Main