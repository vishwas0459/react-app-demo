import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
  state = {
    account: {
      username: '',
      password: ''
    },
    errors: {}
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validateForm();
    this.setState({ errors });
    // if errors
    if (Object.keys(errors).length) {
      console.log('errors present', errors);
      return;
    }
    // if no errors
    console.log('Form Submitted!!!!', this.state.errors);
  };

  validateForm = () => {
    const { account } = this.state;
    const errors = {};
    if (account.username.trim() === '')
      errors.username = 'username is required!';
    if (account.password.trim() === '')
      errors.password = 'password is required!';
    return Object.keys(errors).length === 0 ? {} : errors;
    // console.log(Object.keys(errors).length);
  };

  changeHandler = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMsg = this.validateInput(input);
    console.log('errorMsg: ', errorMsg);
    if (errorMsg) {
      errors[input.name] = errorMsg;
    } else delete errors[input.name]; // to delete the existing errorMsg holding prop of error obj
    const account = { ...this.state.account }; // get a ref to account object
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  validateInput = ({ name, value }) => {
    // const error = {};
    if (value.trim() === '') return `${name} is required!!`;
  };
  render() {
    return (
      <div className='container'>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            type='text'
            name='username'
            lable='Username'
            id='username'
            value={this.state.account.username}
            onChange={this.changeHandler}
            error={this.state.errors.username}
          />
          <Input
            type='password'
            name='password'
            lable='Password'
            id='password'
            value={this.state.account.password}
            onChange={this.changeHandler}
            error={this.state.errors.password}
          />
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    );
  }
}
export default LoginForm;
