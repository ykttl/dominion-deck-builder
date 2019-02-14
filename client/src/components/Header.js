import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import * as actions from '../actions/request';

class Header extends Component {
  componentDidMount = () => {
    this.props.fetchUser();
  };
  render() {
    return (
      <nav id="jump" className="nav-wrapper blue-grey darken-4">
        <div
          className="nav-wrapper blue-grey darken-4"
          style={{ maxWidth: '1400px', margin: '0 auto' }}
        >
          <Menu />
          <Link
            to="/"
            class="brand-logo"
            style={{ color: 'cyan', 'padding-left': '20px' }}
          >
            Dominion Deck Builder
          </Link>
        </div>
      </nav>
    );
  }
}

export default connect(
  null,
  actions
)(Header);
