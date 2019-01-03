import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions/action";

class Header extends Component {
  componentDidMount = () => {
    this.props.fetchUser();
  };
  componentDidUpdate() {
    console.log(this.props.auth);
  }

  renderContent() {
    switch (this.props.user) {
      case null: // still deciding
        return;
      case false: // logged out
        return (
          <li>
            <a href="/login" onClick={this.props.fetchUser()}>
              Login
            </a>
          </li>
        );
      default:
        // logged in
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
        <div className="nav-wrapper  blue-grey darken-4">
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
            style={{ color: "cyan", fontFamily: "Cinzel" }}
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
