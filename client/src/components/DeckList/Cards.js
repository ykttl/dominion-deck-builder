import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/request';
import cardsData from '../../cardsData';

class DisplayCards extends Component {
  message() {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return <p>You can save your decks by sign up :D</p>;
      default:
        return <div />;
    }
  }
  renderDeckName() {
    if (this.props.deckName === '') {
      return <p> No Title</p>;
    } else {
      return <p> {this.props.deckName}</p>;
    }
  }
  renderCards() {
    let deck = this.props.cards;
    // this deck has only cards name,
    // to sort them in order to the cost,
    // replace the strings to data objects from cardsData.js
    deck = deck.map(
      card => (card = cardsData.filter(item => item.name === card))
    );
    function compare(a, b) {
      if (a[0].cost < b[0].cost) return -1;
      if (a[0].cost > b[0].cost) return 1;
      return 0;
    }
    deck.sort(compare);
    if (deck.length === 0) {
      return <p> no cards to be shown.</p>;
    } else {
      return deck.map(item => (
        <img src={`img/${item[0].name}.jpg`} width="20%" />
      ));
    }
  }
  render() {
    return (
      <div className="col s9">
        <div className="recomending-signup-msg">{this.message()}</div>
        <h4 className="bold-700">{this.props.user && this.renderDeckName()}</h4>
        {this.props.user && this.renderCards()}
      </div>
    );
  }
}

const mapStateToProps = ({ deckList, auth }) => {
  return {
    deckListFromServer: deckList.deckListFromServer,
    user: auth.user
  };
};

export default connect(
  mapStateToProps,
  actions
)(DisplayCards);
