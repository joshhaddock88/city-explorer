//-------------------Imports----------------------
import axios from 'axios';
import React from 'react';
import Searchbar from './Searchbar';

//-------------Boot Strap Imports-------------


//---------------Class Decleration----------------------
class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      displayName: 'Unknown',
      lon: '0',
      lat: '0',
      mapURL: '',
    };
  }

  handleChange = (e) => {
    //Capture what user typed
    //setState
    this.setState({ city: e.target.value })
  }

  handleSubmitForDisplay = async (e) => {
    e.preventDefault();
    // use this.state.city to: get data about the city(lon/lat)
    const key = process.env.REACT_APP_CITY_EXPLORER;
    // ------ Display Data --------
    let displayURL = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.city}&format=json`;

    const response = await axios.get(displayURL);

    const cityInformation = response.data[0];

    // lat, lon, displayName defined

    let displayName = cityInformation.display_name;

    this.setState({displayName})

    let lon = cityInformation.lon;
    
    this.setState({lon});

    let lat = cityInformation.lat;
    
    this.setState({lat});

    //---------- Map Data ---------

    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${key}&center=${lat},${lon}&zoom=12`
    console.log("Current map is", mapURL);

    this.setState({mapURL})

    console.log(cityInformation);
  }

  render() {
    return (
      <>
        <Searchbar 
          handleSubmit = {this.handleSubmitForDisplay}
          handleChange = {this.handleChange}
          displayName = {this.state.displayName}
          lon = {this.state.lon}
          lat = {this.state.lat}
          mapURL = {this.state.mapURL}
        />
      </>
    )
  };
}

export default Main