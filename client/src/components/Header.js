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
          <ul>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
            <li>
              <a href="/login" onClick={this.props.fetchUser()}>
                Login
              </a>
            </li>
          </ul>
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
    // using Materialize css
    return (
      <nav id="jump" className="nav-wrapper blue-grey darken-4">
        <div
          className="nav-wrapper blue-grey darken-4"
          style={{ maxWidth: '1400px', margin: '0 auto' }}
        >
          <div className="">
            <ul className="right">{this.renderContent()}</ul>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/">Card Pick</Link>
              </li>
              <li>
                <Link to="/decklist">Deck List</Link>
              </li>
            </ul>
            <a
              href="/"
              class="brand-logo "
              style={{ color: 'cyan', 'padding-left': '20px' }}
            >
              Dominion Deck Builder
            </a>
          </div>
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
