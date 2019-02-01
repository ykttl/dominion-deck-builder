import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cards from './Cards';
import Sidebar from './Sidebar';
import * as actions from '../../actions/request';

class Main extends Component {
  state = {
    deckName: '',
    cards: []
  };
  async componentDidMount() {
    await this.props.fetchUser();
    await this.props.fetchDeckList();
    this.renderDeckList();
  }
  selectDeck = index => {
    const selectedDeck = this.props.deckListFromServer[index];
    this.setState({
      cards: selectedDeck.cards,
      deckName: selectedDeck.deckName
    });
  };
  removeDeck = async id => {
    await this.props.removeDeck(id);
    this.renderDeckList();
  };
  renderDeckList = () => {
    const deckListLength = this.props.deckListFromServer.length;
    if (deckListLength === 0) {
      this.setState({ cards: [], deckName: '' });
    } else {
      // always show the latest deck in the list
      const latestDeck = this.props.deckListFromServer[deckListLength - 1];
      this.setState({ cards: latestDeck.cards, deckName: latestDeck.deckName });
    }
  };
  render() {
    return (
      <div className="row">
        <Cards deckName={this.state.deckName} cards={this.state.cards} />
        <Sidebar
          deckName={this.state.deckName}
          cards={this.state.cards}
          selectDeck={this.selectDeck}
          removeDeck={this.removeDeck}
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
