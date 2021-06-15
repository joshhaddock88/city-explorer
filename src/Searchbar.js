import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Map from './Map.js';
import DisplayInfo from './DisplayInfo.js';

class Searchbar extends React.Component {


  render () {
    return (
    <>
      <Form onSubmit={this.props.handleSubmit}>
        <input name="city" onChange={this.props.handleChange} />
        <Button type="submit">Explore!</Button>
      </Form>

      <DisplayInfo 
        displayName = {this.props.displayName}
        lon = {this.props.lon}
        lat = {this.props.lat}
      />

      <Map 
        mapURL = {this.props.mapURL}
      />
    </>
    )
  }
}

export default Searchbar;
