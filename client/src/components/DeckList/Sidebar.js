import React, { Component } from 'react';
import { connect } from 'react-redux';

class DeckListSidebar extends Component {
  render() {
    return (
      <div className="col s3">
        {this.props.user && (
          <div>
            <p className="heading medium bold">Deck List</p>
            {this.props.deckListFromServer
              .map((item, index) => (
                <ul className="list-item decklist-hover">
                  <a
                    href="#jump"
                    onClick={() => this.props.selectDeck(index)} // props from Main.js
                    className="font-black"
                  >
                    <li key={index} className="list-item-name">
                      {item.deckName === '' ? 'No title' : item.deckName}
                    </li>
                  </a>
                  <button
                    onClick={() => this.props.removeDeck(item._id)} // props from Main.js
                    className="x-button"
                  >
                    <i class="far fa-times-circle" />
                  </button>
                </ul>
              ))
              .reverse()}
          </div>
        )}
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
  null
)(DeckListSidebar);
