import React from 'react';


class Map extends React.Component {

  render () {
    return (
      <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER}&center=${this.props.lat},${this.props.lon}&zoom=12`} alt='' />
    )
  }
}

export default Map