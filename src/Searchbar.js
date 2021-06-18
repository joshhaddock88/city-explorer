import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Searchbar extends React.Component {
  onFormSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(e.target.city.value);
  }

  render () {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <Form.Group controlId='citySearch'>
          <Form.Control type='text'/>
        </Form.Group>
        <Button variant='primary' type="submit">Explore!</Button>
      </Form>
    )
  }
}

export default Searchbar;
