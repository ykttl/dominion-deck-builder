import React, { Component } from 'react';
import { connect } from 'react-redux';

class DeckListSidebar extends Component {
  render() {
    return (
      <div className="col s3">
        {this.props.user && (
          <div>
            <h5 className="bold-700">Deck List</h5>
            {this.props.deckListFromServer
              .map((item, index) => (
                <div className="list-item list-item-decklist">
                  <a
                    href="#jump"
                    onClick={() => this.props.selectDeck(index)} // props from Main.js
                    className="ancher-select-deck"
                  >
                    <div>
                      <div key={index} className="list-item-name">
                        {item.deckName === '' ? 'No title' : item.deckName}
                      </div>
                    </div>
                  </a>
                  <button
                    onClick={() => this.props.removeDeck(item._id)} // props from Main.js
                    className="x-button"
                  >
                    <i class="far fa-times-circle" />
                  </button>
                </div>
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
