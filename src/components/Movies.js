import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import MovieSingle from './MovieSingle';

class Movies extends React.Component {


  render() {
    let movies = []
    
    try{
        movies = this.props.movies.map((movie, idx) => {
          return (
            <MovieSingle 
              key={idx}
              image={movie.image_url}
              title={movie.title}
              overview={movie.overview}
              averageRating={movie.average_votes}
              popularity={movie.popularity}
            />)})
  } catch {
    movies = <Card><Card.Title>No movies available for this search.</Card.Title></Card>
  }
  return (
    <CardColumns>
      {movies}
    </CardColumns>
  )}
}

export default Movies;