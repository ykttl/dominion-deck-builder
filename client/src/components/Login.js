import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions/request';

class Login extends Component {
  state = { username: '', password: '' };
  localLogin = () => {
    const username = this.state.username;
    const password = this.state.password;
    axios
      .post('/auth/local-login', { username: username, password: password })
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
      <div className="auth-container">
        <p className="bold large heading font-cyan">Log in</p>
        {this.props.auth.user && (
          <p className="font-red">
            You already have an account and logged in :D
          </p>
        )}
        <p className="small">with Google</p>
        <a href="/auth/google">
          <img src="img/google/google-btn.png" className="google-img" />
        </a>
        <p className="small">OR</p>
        <p className="small">Username and password</p>
        <div className="font-red">{this.props.auth.errorMessage}</div>
        <div className="input-box">
          <input type="text" placeholder="Username" onChange={this.username} />
          <input type="text" placeholder="Password" onChange={this.password} />
          <button
            onClick={this.localLogin}
            className="waves-effect waves-light btn auth-btn"
          >
            Log in
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
)(Login);
