import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Searchbar extends React.Component {
  onFormSubmit = e => {
    e.preventDefault();
    this.props.getCityData(e.target.city.value);
  }

  render () {
    return (
    <>
      <Form onSubmit={this.onFormSubmit}>
        <input name="city" onChange={this.props.handleChange} />
        <Button type="submit">Explore!</Button>
      </Form>
    </>
    )
  }
}

export default Searchbar;
