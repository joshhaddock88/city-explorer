import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class MovieSingle extends React.Component {

  render() {
    return(
      <Card key={this.props.key} style={{width: "18 rem"}}>
        <Card.Img variant="top" src={this.props.image} alt={`Poster from the film ${this.props.title}`} className="filmPosters" style={{width: "18 rem"}}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.overview}</Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>Average Rating: {this.props.averageRating}</ListGroup.Item>
            <ListGroup.Item>Populartiy: {this.props.popularity}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    )
  }
}

export default MovieSingle