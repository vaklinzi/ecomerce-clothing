import React, { Component } from 'react';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { signInWithGoogle } from '../../utils/Firebase.js';

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

          <div className="buttons">
            <CustomButton type="submit" onSubmit={this.handleSubmit}>
              Sign In
            </CustomButton>

            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
