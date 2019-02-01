import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions/request';

class Header extends Component {
  componentDidMount = () => {
    this.props.fetchUser();
  };

  renderContent() {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/login" onClick={this.props.fetchUser()}>
              Login
            </a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }
  render() {
    return (
      <nav id="jump">
        <div className="nav-wrapper blue-grey darken-4">
          <ul>
            <li>
              <Link to="/">Card Pick</Link>
            </li>
            <li>
              <Link to="/decklist">Deck List</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
          <a
            href="/"
            class="center brand-logo "
            style={{ color: 'cyan', fontFamily: 'Cinzel' }}
          >
            Dominion Deck Builder
          </a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { user: auth.user };
}

export default connect(
  mapStateToProps,
  actions
)(Header);
