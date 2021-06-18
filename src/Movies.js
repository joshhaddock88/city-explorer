import React from 'react';

class Movies extends React.Component {


  render() {
    let movies = []
    return (
      <>
        <h3>Movies</h3>
        {this.props.movies.map(movies => <>
            <h3>{movies.title}</h3>
            <p>{movies.overview}</p>
          </>
          )}
      </>
    )
  }
}

export default Movies;