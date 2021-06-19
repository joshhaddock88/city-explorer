import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Movies extends React.Component {


  render() {
    let movies = []
    console.log(this.props.movies);
    
    try{
        movies = this.props.movies.map((movie, idx) => {
        console.log(movie);
          return<Card key={idx}>
            <Card.Img width="50px" variant="top" src={movie.image_url} alt={`Poster from the film ${movie.title}`} class="filmPosters"/>
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>Average Rating: {movie.average_votes}</ListGroup.Item>
                <ListGroup.Item>Populartiy: {movie.popularity}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>});
  } catch {
    movies = <Card><Card.Title>No movies available for this search.</Card.Title></Card>
  }
  return (
    <CardColumns>
      {movies};
    </CardColumns>
  )}
}

export default Movies;