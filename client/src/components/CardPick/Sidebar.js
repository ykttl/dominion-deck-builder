import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/action';
import cardsData from '../../cardsData';

class Sidebar extends Component {
  saveDeck = () => {
    if (!this.props.user) {
      alert('You can save your deck by sing-up :)');
    }
    if (this.props.deck.length === 0) {
      alert('Select cards to save :) ');
    } else {
      const deckToSave = this.props;
      this.props.saveDeck(deckToSave);
      window.location.href = '/decklist';
      //this.props.history.push('/decklist');
    }
  };
  nameDeck = e => {
    const name = e.target.value;
    this.props.nameDeck(name);
  };
  removeCard = card => {
    this.props.removeCard(card);
  };
  renderCardName = () => {
    let deck = this.props.deck;
    // this deck has only cards name,
    // to sort them in order to the cost,
    // replace the strings to data objects from cardsData.js
    deck = deck.map(
      card => (card = cardsData.filter(data => data.name === card))
    );
    function compare(a, b) {
      if (a[0].cost < b[0].cost) return -1;
      if (a[0].cost > b[0].cost) return 1;
      return 0;
    }
    deck.sort(compare);

    // ----- render sorted cards -----
    return deck.map(card => {
      return (
        <div className="list-item">
          <div className="list-item-cost">{card[0].cost}</div>
          <div className="list-item-name">{card[0].name}</div>
          <button
            onClick={() => this.removeCard(card[0].name)}
            className="x-button"
          >
            <i class="far fa-times-circle" />
          </button>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h5 className="bold-700">DECK</h5>
        <div className="input-area">
          <input type="text" placeholder="deck name" onChange={this.nameDeck} />
          <a className="btn cyan" onClick={this.saveDeck}>
            save
          </a>
        </div>
        <p className="duplicate-error-msg">{this.props.errorMessage}</p>
        {this.renderCardName()}
        <div style={{ textAlign: 'right' }}>
          <span className="bold-900">{this.props.deck.length}/10</span> cards
          selected
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deck: state.deck.deck,
    deckName: state.deck.deckName,
    errorMessage: state.deck.errorMessage,
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  actions
)(Sidebar);
