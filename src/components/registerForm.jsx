import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
class RegisterForm extends Form {
  state = {
    data: {
      email: '',
      password: '',
      username: ''
    },
    errors: {}
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string()
      .required()
      .alphanum()
      .min(3)
      .max(8),
    email: Joi.string()
      .email()
      .required()
  };
  doSubmit = () => {
    console.log('no validation errors');
  };
  render() {
    return (
      <div className='container'>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('email', 'Email', 'email')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('username', 'Username')}
          {this.renderButton('Register')}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
