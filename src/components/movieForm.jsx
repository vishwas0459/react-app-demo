import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { getMovie, saveMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
// import { getGenres } from '../services/fakeGenreService';
// import { getMovies } from './../services/fakeMovieService';

class MoviesForm extends Form {
  state = {
    data: {
      _id: '',
      title: '',
      genreId: '',
      numberInStock: '',
      dailyRentalRate: ''
    },
    errors: {},
    genres: []
  };

  schema = {
    _id: Joi.string(), // check how to make a field validation optional
    title: Joi.string().required(),
    genreId: Joi.string().required(),
    numberInStock: Joi.number().required(),
    dailyRentalRate: Joi.number().required()
  };
  // after form is render at first time
  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    // if id is present
    const { id: movieId } = this.props.match.params;
    // console.log(movieId);

    if (!movieId) {
      // this is a workarround
      const _id = new Date().getTime().toString();
      const data = { ...this.state.data };
      data._id = _id;
      this.setState({ data });
      return;
    } else {
      const movieDetails = getMovie(movieId);
      console.log('movieDetails', movieDetails);
      // get the ref to state
      const data = this.maptoViewModel(movieDetails);
      this.setState({ data });
    }
  }

  // as the data returned by RestAPI does not alwyas match with VIEW so map it accordingly
  maptoViewModel = movie => {
    return {
      _id: movie._id,
      genreId: movie.genre._id,
      title: movie.title,
      dailyRentalRate: movie.dailyRentalRate,
      numberInStock: movie.numberInStock
    };
  };

  doSubmit = () => {
    console.log('Movie saved');
    saveMovie(this.state.data);
    this.props.history.push('/');
  };

  render() {
    // const id = this.props.match.params.id;
    return (
      <div className='container'>
        <h1>Movies Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          {this.renderSelect('genreId', 'Genres', this.state.genres)}
          {this.renderInput('numberInStock', 'Number in Stocks')}
          {this.renderInput('dailyRentalRate', 'Daily Rental Rate')}
          {this.renderButton('Save')}
        </form>
      </div>
    );
  }
}

export default MoviesForm;
