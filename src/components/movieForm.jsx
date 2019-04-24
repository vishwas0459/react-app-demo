import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { getMovie, saveMovie } from '../services/fakeMovieService';
import Select from './common/select';
import { getGenres } from '../services/fakeGenreService';
// import { getGenres } from '../services/fakeGenreService';
// import { getMovies } from './../services/fakeMovieService';

class MoviesForm extends Form {
  state = {
    data: {
      _id: '',
      title: '',
      genre: '',
      numberInStock: '',
      dailyRentalRate: ''
    },
    errors: {},
    genres: []
  };

  // after form is render at first time
  componentDidMount() {
    // console.log(this.props);
    // if id is present
    const { id: movieId } = this.props.match.params;
    // console.log(movieId);
    if (!movieId) {
      const genres = getGenres();
      this.setState({ genres });
      console.log('getGenres:', getGenres());
    } else {
      const movieDetails = getMovie(movieId);
      console.log('movieDetails', movieDetails);
      // get the ref to state
      const data = { ...this.state.data };
      data.title = movieDetails.title;
      data.genre = movieDetails.genre.name;
      data.dailyRentalRate = movieDetails.dailyRentalRate;
      data.numberInStock = movieDetails.numberInStock;
      data._id = movieDetails._id;
      console.log('data:::', data);
      this.setState({ data }); // populate the movieForm
    }
  }
  schema = {
    _id: Joi.string(), // check how to make a field validation optional
    title: Joi.string().required(),
    genre: Joi.string().required(),
    numberInStock: Joi.number().required(),
    dailyRentalRate: Joi.number().required()
  };

  doSubmit = () => {
    console.log('Movie saved');
    saveMovie(this.state.data);
    this.props.history.push('/');
  };
  render() {
    const id = this.props.match.params.id;
    return (
      <div className='container'>
        <h1>Movies Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          {id ? (
            this.renderInput('genre', 'Genre')
          ) : (
            <Select label='Genres' gType={getGenres(this.state.data.genreId)} />
          )}

          {this.renderInput('numberInStock', 'Number in Stocks')}
          {this.renderInput('dailyRentalRate', 'Daily Rental Rate')}
          {this.renderButton('Save')}
        </form>
      </div>
    );
  }
}

export default MoviesForm;
