import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/action";
import cardsData from "../../cardsData";

class Sidebar extends Component {
  saveDeck = () => {
    if (!this.props.user) {
      alert("You can save your decks by sing-up :)");
      this.props.history.push("/");
    } else {
      const deckToSave = this.props;
      this.props.saveDeck(deckToSave);
      window.location.href = "/decklist";
    }
  };
  nameDeck = e => {
    const name = e.target.value;
    this.props.nameDeck(name);
  };
  removeCard = card => {
    this.props.removeCard(card);
  };
  renderCardName() {
    let cardsToRender = cardsData;
    let deck = this.props.deck;
    let orderedDeck = deck.map(
      card => (card = cardsToRender.filter(item => item.name === card))
    );

    function compare(a, b) {
      if (a[0].cost < b[0].cost) return -1;
      if (a[0].cost > b[0].cost) return 1;
      return 0;
    }

    orderedDeck.sort(compare);

    return orderedDeck.map(item => {
      return (
        <div className="list-item">
          <div className="list-item-cost">{item[0].cost}</div>
          <div className="list-item-name">{item[0].name}</div>
          <button
            onClick={() => this.removeCard(item[0].name)}
            className="x-button"
          >
            <i class="far fa-times-circle" />
          </button>
        </div>
      );
    });
  }
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
        <div>
          <span className="bold-900">{this.props.deck.length}/10</span> cards
          selected.
        </div>

        {this.renderCardName()}
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
