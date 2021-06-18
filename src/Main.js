//-------------------Imports----------------------
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import DisplayInfo from './DisplayInfo';
import Form from 'react-bootstrap/Form';
import React from 'react';


//-------------Boot Strap Imports-------------


//---------------Class Decleration----------------------
class Main extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      city: {},
      weather: [],
      movies: [],
      errorMessage: ``,
      showAlert: false
    };
  }

  // send user query to the server.
  handleSubmit = async (e) => {
    e.preventDefault();
    try {

      // gets submitted city data from location IQ
      const key = process.env.REACT_APP_CITY_EXPLORER;
      let query = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${e.target.citySearch.value}&format=json`;
      console.log('Our query is', query);
      const response = await axios.get(query);
      console.log('We get back', response.data)
      console.log('Dispaly name is ', response.data[0].display_name);

      const server = process.env.REACT_APP_SERVER;


      // get weather data from server
      let weatherQuery = await axios.get(`${server}/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}`);
      console.log(weatherQuery);
      const weather = await axios.get(weatherQuery)

      // get movie data from server
      let movieQuery = `${server}/movies?city=${e.target.citySearch.value}`;
      const movies = await axios.get(movieQuery);

      // apply retrieved server data to state.
      this.setState ({
        city: response.data[0],
        weather: weather.data,
        movies: movies.data
      });
      console.log(this.state.city);
    } catch (err) {
      this.setState({
        errorMessage: err.message,
        showAlert: true
      });
    }
  }

  render() {
    return (
      <>
        <h1>City Explorer!</h1>
        <h2>Choose a city to explore!</h2>
        <Form onSubmit={this.handleSubmit} >
          <Form.Group controlId='citySearch'>
            <Form.Control type='text'/>
          </Form.Group>
          <Button variant='primary' type="submit">Explore!</Button>
        </Form>
        <Alert variant='danger' onClose={() => this.setState({showAlert: false})} show={this.state.showAlert} dismissible>
          {this.state.errorMessage}
        </Alert>
        <DisplayInfo 
          displayName = {this.state.city.display_name}
          lat = {this.state.city.lat}
          lon = {this.state.city.lon}
          errorMessage = {this.state.errorMessage}
          weather = {this.state.weather}
          movies = {this.state.movies}
        />
      </>
    )
  };
}

export default Main