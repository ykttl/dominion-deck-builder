import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/action";

class DeckListSidebar extends Component {
  selectDeck = index => {
    this.props.selectDeckParent(index);
  };
  removeDeck = id => {
    this.props.removeDeckParent(id);
    console.log(this.props.removeDeck);
  };

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
                    onClick={() => this.selectDeck(index)}
                    className="ancher-select-deck"
                  >
                    <div>
                      <div key={index} className="list-item-name">
                        {item.deckName === "" ? "No title" : item.deckName}
                      </div>
                    </div>
                  </a>
                  <button
                    onClick={() => this.removeDeck(item._id)}
                    className="x-button"
                  >
                    {" "}
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
  actions
)(DeckListSidebar);
