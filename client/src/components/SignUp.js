import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions/request';

class SignUp extends Component {
  state = { username: '', password: '' };
  localLogin = () => {
    const username = this.state.username;
    const password = this.state.password;
    axios
      .post('/auth/local-signup', { username: username, password: password })
      .then(res => {
        if (res.data === 'success') {
          window.location.href = '/';
        } else {
          this.props.fetchUser(res.data.message);
        }
      })
      .catch(err => console.log(err));
  };
  username = e => {
    const username = e.target.value;
    this.setState({ username });
  };
  password = e => {
    const password = e.target.value;
    this.setState({ password });
  };

  render() {
    return (
      <div className="auth-box">
        <h5 className="auth-title">Create Account</h5>
        {this.props.auth.user && (
          <p style={{ color: 'red' }}>
            You already have an account and logged in :D
          </p>
        )}

        <h6>with Google</h6>
        <a href="/auth/google">
          <img src="img/google/google-btn.png" className="google-img" />
        </a>

        <h6>OR</h6>

        <h6>Username and password</h6>
        <div style={{ color: 'red' }}>{this.props.auth.message}</div>
        <div className="input-box">
          <input type="text" placeholder="Username" onChange={this.username} />

          <input type="text" placeholder="Password" onChange={this.password} />
          <button
            onClick={this.localLogin}
            className="waves-effect waves-light btn"
          >
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(SignUp);
