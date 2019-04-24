import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { getMovie, saveMovie } from '../services/fakeMovieService';
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

  // after form is render at first time
  componentDidMount() {
    // console.log(this.props);
    // if id is present
    const { id: movieId } = this.props.match.params;
    // console.log(movieId);
    if (!movieId) return;
    else {
      const movieDetails = getMovie(movieId);
      console.log('movieDetails', movieDetails);
      // get the ref to state
      const data = { ...this.state.data };
      data.title = movieDetails.title;
      data.genreId = movieDetails.genre._id;
      data.dailyRentalRate = movieDetails.dailyRentalRate;
      data.numberInStock = movieDetails.numberInStock;
      data._id = movieDetails._id;
      console.log('data:::', data);
      this.setState({ data }); // populate the movieForm

      // get the genre list
      // const gList = getGenres();
      // console.log('gList:', gList);
      // const genres = {...this.state.genres}
    }
  }
  schema = {
    _id: Joi.string(), // check how to make a field validation optional
    title: Joi.string().required(),
    genreId: Joi.string().required(),
    numberInStock: Joi.number().required(),
    dailyRentalRate: Joi.number().required()
  };

  doSubmit = () => {
    console.log('Movie saved');
    saveMovie(this.state.data);
    this.props.history.push('/');
  };
  render() {
    return (
      <div className='container'>
        <h1>Movies Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('title', 'Title')}
          {this.renderInput('genreId', 'Genre')}
          {this.renderInput('numberInStock', 'Number in Stocks')}
          {this.renderInput('dailyRentalRate', 'Daily Rental Rate')}
          {this.renderButton('Save')}
        </form>
      </div>
    );
  }
}

export default MoviesForm;
