import axios from 'axios';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      displayname: ''
    };
  }

  handleChange = (e) => {
    //Capture what user typed
    //setState
    this.setState({ city: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const key = process.env.REACT_APP_CITY_EXPLORER;

    let URL = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.city}&format=json`;

    const response = await axios.get(URL);

    const cityInformation = response.data[0];

    // cityInformation.lat & .lon
    // These may help you get a map for food/weather

    let displayName = cityInformation.display_name;
    
    this.setState({displayName});

    //now we can get a map...

    console.log(cityInformation);
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <input name="city" onChange={this.handleChange} />
          <Button>Explore!</Button>
        </Form>
        <h2>{this.state.displayName}</h2>
      </>
    )
  };
}

export default Main