import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select';

class Form extends Component {
  state = {
    data: {},
    errors: {},
    options: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validateForm();
    // console.log('errors from From', errors);

    if (errors)
      // this.setState({ errors });   setState triggers the render method.
      return;

    //if no error
    this.doSubmit();
  };

  validateForm = () => {
    //validate using joi
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    console.log('errors:', errors);
    return errors;
  };

  changeHandler = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMsg = this.validateInput(input);
    console.log('errorMsg: ', errorMsg);
    if (errorMsg) {
      errors[input.name] = errorMsg;
    } else delete errors[input.name]; // to delete the existing errorMsg holding prop of error obj
    const data = { ...this.state.data }; // get a ref to data object
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  validateInput = ({ name, value }) => {
    const inputProp = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(inputProp, schema);
    return error ? error.details[0].message : null;
  };

  renderButton = label => {
    return (
      <button className='btn btn-primary' disabled={this.validateForm()}>
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = 'text') => {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        label={label}
        id={name}
        value={data[name]}
        onChange={this.changeHandler}
        error={errors[name]}
      />
    );
  };

  renderSelect = (name, label, options) => {
    const { data, errors } = this.state;
    // const options = getGenres();
    return (
      <Select
        name={name}
        label={label}
        value={data[name]}
        options={options}
        onChange={this.changeHandler}
        error={errors[name]}
      />
    );
  };
}

export default Form;
