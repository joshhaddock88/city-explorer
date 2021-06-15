import React from 'react';

class DisplayInfo extends React.Component {

  render () {
    return (
      <>
        <h2>{this.props.displayName}</h2>
        <h3>Longitude: {this.props.lon}</h3>
        <h3>Latitude: {this.props.lat}</h3>
      </>
    )
  }
}


export default DisplayInfo