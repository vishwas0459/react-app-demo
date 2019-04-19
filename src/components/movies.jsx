import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
class Movies extends Component {
  //get the movie list from fakeservice into state
  state = {
    movies: getMovies()
  };
  handleDelete = mId => {
    console.log('Clicked movie delete on id :', mId);
    const updatedMovies = this.state.movies.filter(movie => movie._id !== mId);
    this.setState({ movies: updatedMovies });
  };
  render() {
    const { length: movieCount } = this.state.movies;
    if (movieCount === 0) return <p>There are no movies in database!</p>;
    return (
      <div>
        <h3> {movieCount} of movies in database at present!!</h3>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Title</th>
              <th scope='col'>Gener</th>
              <th scope='col'>Stock</th>
              <th scope='col'>Rate</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie, index) => (
              <tr key={movie._id}>
                <th scope='row'>{index + 1}</th>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className='btn btn-danger'
                    onClick={() => this.handleDelete(movie._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
