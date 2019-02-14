import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Menu extends Component {
  renderAuthNavList() {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return [
          <li>
            <Link to="/signup" className="signup">
              Sign Up
            </Link>
          </li>,
          <li>
            <Link to="/login" className="login">
              Login
            </Link>
          </li>
        ];
      default:
        return (
          <li>
            <a href="/api/logout" className="logout">
              Logout
            </a>
          </li>
        );
    }
  }
  render() {
    return (
      <ul className="right hide-on-med-and-down">
        <li>
          <Link to="/" className="cardpick">
            Card Pick
          </Link>
        </li>
        <li>
          <Link to="/decklist" className="decklist">
            Deck List
          </Link>
        </li>
        {this.renderAuthNavList()}
      </ul>
    );
  }
}

function mapStateToProps({ auth }) {
  return { user: auth.user };
}

export default connect(
  mapStateToProps,
  null
)(Menu);
