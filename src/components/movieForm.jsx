import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { getMovie, saveMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

class MovieForm extends Form {
  state = {
    data: {
      _id: '',
      title: '',
      genreId: '', //change to object
      numberInStock: '',
      dailyRentalRate: ''
    },
    genres: [],
    errors: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      const movieDetails = getMovie(id);
      console.log(movieDetails);
      const data = this.mapToViewModel(movieDetails);

      this.setState({ data });
    }
  }

  mapToViewModel = movie => {
    console.log(movie);
    const modelMovie = {};
    modelMovie._id = movie._id;
    modelMovie.title = movie.id;
    modelMovie.genreId = getGenres(movie.id);
    modelMovie.dailyRentalRate = movie.dailyRentalRate;
    modelMovie.numberInStock = movie.numberInStock;
    return modelMovie;
  };
  schema = {
    title: Joi.string().required(),
    genre: Joi.string().required(),
    stocks: Joi.number().required(),
    rate: Joi.number().required()
  };

  doSubmit = () => {
    console.log('In Submit!!');
    // const savedMovie = saveMovie(this.state.data);
    // console.log(saveMovie);
  };

  render() {
    // const genres = genres;
    return (
      <div className='container'>
        <form>
          {this.renderInput('title', 'Title')}
          {this.renderInput('genre', 'Genre')}
          {this.renderInput('stocks', 'Number in stocks')}
          {this.renderInput('rate', 'Rate', 'number')}
          {this.renderButton('Save')}
        </form>
      </div>
    );
  }
}

export default MovieForm;

// const MovieForm = ({ match, history }) => {
//   return (
//     <div className='container'>
//       <h1>Movie Form {match.params.id}</h1>
//       <button className='btn btn-primary' onClick={() => history.push('/')}>
//         Save
//       </button>
//     </div>
//   );
// };

// export default MovieForm;
