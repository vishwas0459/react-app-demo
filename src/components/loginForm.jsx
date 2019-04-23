import React from 'react';
// import Input from './common/input';
import Joi from 'joi-browser';
import Form from './common/form';
class LoginForm extends Form {
  state = {
    data: {
      username: '',
      password: ''
    },
    errors: {}
  };
  // define schema for form to be validate
  schema = {
    username: Joi.string().required(),
    password: Joi.string().required()
  };

  doSubmit = () => {
    // if no validations errors
    console.log('Form Submitted!!!!', this.state.errors);
  };

  render() {
    return (
      <div className='container'>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Submit')}
        </form>
      </div>
    );
  }
}
export default LoginForm;
