import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as requests from '../../actions/request';
import * as actions from '../../actions/action';
import cardsData from '../../cardsData';

export class Sidebar extends Component {
  saveDeck = () => {
    if (!this.props.user) {
      alert('You can save your deck by sing-up :)');
      return;
    }
    if (this.props.deck.length === 0) {
      alert('Select cards to save :) ');
      return;
    }
    const deckToSave = this.props;
    this.props.requests.saveDeck(deckToSave);
    window.location.href = '/decklist';
    //this.props.history.push('/decklist');
  };
  nameDeck = e => {
    console.log(this.props.requests);
    const name = e.target.value;
    this.props.actions.nameDeck(name);
  };
  removeCard = card => {
    this.props.actions.removeCard(card);
  };
  renderCardName = () => {
    let deck = this.props.deck;

    // this deck has only card names. to sort them in order to the cost,
    // replace the strings to data objects from cardsData.js
    deck = deck.map(
      card => (card = cardsData.filter(data => data.name === card))
    );
    const compare = (a, b) => {
      if (a[0].cost < b[0].cost) return -1;
      if (a[0].cost > b[0].cost) return 1;
      return 0;
    };
    deck.sort(compare);

    // ----- render sorted cards -----
    return deck.map(card => {
      return (
        <ul className="list-item">
          <li className="list-item-cost">{card[0].cost}</li>
          <li className="list-item-name">{card[0].name}</li>
          <button
            onClick={() => this.removeCard(card[0].name)}
            className="x-button"
          >
            <i class="far fa-times-circle" />
          </button>
        </ul>
      );
    });
  };
  render() {
    return (
      <div>
        <p className="heading medium bold">DECK</p>
        <div className="flex">
          <input type="text" placeholder="deck name" onChange={this.nameDeck} />
          <a className="btn cyan" onClick={this.saveDeck}>
            save
          </a>
        </div>
        <p className="font-red small bold">{this.props.errorMessage}</p>
        {this.renderCardName()}
        <div style={{ textAlign: 'right' }}>
          <span className="bold">{this.props.deck.length}/10</span> cards
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

const mapDispatchToProps = dispatch => {
  return {
    requests: bindActionCreators(requests, dispatch),
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
