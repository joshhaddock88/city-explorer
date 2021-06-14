//-------------------Imports----------------------
import axios from 'axios';
import React from 'react';

//-------------Boot Strap Imports-------------
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


//---------------Class Decleration----------------------
class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      displayname: '',
      lon: '0',
      lat: '0'
    };
  }

  handleChange = (e) => {
    //Capture what user typed
    //setState
    this.setState({ city: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    // use this.state.city to: get data about the city(lon/lat)
    const key = process.env.REACT_APP_CITY_EXPLORER;

    let URL = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.city}&format=json`;

    const response = await axios.get(URL);

    const cityInformation = response.data[0];

    // cityInformation.lat & .lon
    // These may help you get a map for food/weather

    let displayName = cityInformation.display_name;

    this.setState({displayName})

    let lon = cityInformation.lon;
    
    this.setState({lon});

    let lat = cityInformation.lat;
    
    this.setState({lat});

    //now we can get a map...

    console.log(cityInformation);
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <input name="city" onChange={this.handleChange} />
          <Button type="submit">Explore!</Button>
        </Form>
        <h2>{this.state.displayName}</h2>
        <h3>Longitude: {this.state.lon}</h3>
        <h3>Latitue: {this.state.lat}</h3>
      </>
    )
  };
}

export default Main