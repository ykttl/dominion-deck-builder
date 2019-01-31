import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayCards from './DisplayCards';
import DeckListSidebar from './DeckListSidebar';
import * as actions from '../../actions/action';

class Main extends Component {
  state = { deckName: '', cards: [] };
  async componentDidMount() {
    await this.props.fetchUser();
    await this.props.fetchDeckList();
    let index = this.props.deckListFromServer.length;
    if (index === 0) {
      this.setState({ cards: [], deckName: '' });
    } else {
      let item = this.props.deckListFromServer[index - 1]; // every time page is refreshed, the top deck of the list will be shown
      this.setState({ cards: item.cards, deckName: item.deckName });
    }
  }

  selectDeck = index => {
    const item = this.props.deckListFromServer[index];
    this.setState({ cards: item.cards, deckName: item.deckName });
  };
  removeDeck = async id => {
    await this.props.removeDeck(id);
    let index = this.props.deckListFromServer.length;

    if (index === 0) {
      this.setState({ cards: [], deckName: '' });
    } else {
      let item = this.props.deckListFromServer[index - 1];
      this.setState({ cards: item.cards, deckName: item.deckName });
    }
  };

  render() {
    return (
      <div className="row">
        <DisplayCards deckName={this.state.deckName} cards={this.state.cards} />
        <DeckListSidebar
          deckName={this.state.deckName}
          cards={this.state.cards}
          selectDeckParent={this.selectDeck}
          removeDeckParent={this.removeDeck}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ deckList, auth }) => {
  return {
    deckListFromServer: deckList.deckListFromServer,
    auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(Main);
