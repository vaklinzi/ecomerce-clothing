import React, { Component } from 'react';

import FormInput from '../form-input/FormInput';

import './SignIn.scss';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            handleChange={this.handleChange}
            value={email}
            name="email"
            label="email"
            required
          />
          <FormInput
            type="password"
            handleChange={this.handleChange}
            value={password}
            name="password"
            label="password"
            required
          />

          <input type="submit" onSubmit={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
