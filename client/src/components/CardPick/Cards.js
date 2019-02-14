import React, { Component } from 'react';
import Selectors from './Selectors';
import cardsData from '../../cardsData';
import { connect } from 'react-redux';
import * as actions from '../../actions/action';

export class Cards extends Component {
  state = {
    expansion: null,
    cost: null,
    type: null,
    cardName: '',
    cardsToRender: []
  };
  pickCard = cardName => {
    this.props.selectCard(cardName);
  };
  // ----- selectors -----
  selectExpansion = e => {
    this.setState({ expansion: e.value });
  };
  selectCost = e => {
    this.setState({ cost: e.value });
  };
  selectType = e => {
    this.setState({ type: e.value });
  };
  renderCards = () => {
    // display all cards by default
    let cardsToRender = cardsData;
    // ----- filter cards by selectors -----
    if (this.state.expansion) {
      cardsToRender = cardsToRender.filter(
        item => item.expansion === this.state.expansion
      );
    }
    if (this.state.cost) {
      cardsToRender = cardsToRender.filter(
        item => item.cost === this.state.cost
      );
    }
    if (this.state.type) {
      cardsToRender = cardsToRender.filter(
        item => item.type === this.state.type
      );
    }
    // ----- sort cards in order to the cost -----
    function compare(a, b) {
      if (a.cost < b.cost) return -1;
      if (a.cost > b.cost) return 1;
      return 0;
    }
    cardsToRender.sort(compare);

    // ----- render sorted cards -----
    if (cardsToRender.length === 0) {
      return <p>There are no matched cards.</p>;
    }
    return cardsToRender.map(item => {
      return (
        <a href="#/">
          <img
            key={item}
            onClick={() => this.pickCard(item.name)}
            src={`img/${item.name}.jpg`}
            className="card-img"
          />
        </a>
      );
    });
  };
  render() {
    return (
      <div>
        <Selectors
          selectExpansion={this.selectExpansion}
          selectCost={this.selectCost}
          selectType={this.selectType}
        />
        <div>{this.renderCards()}</div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Cards);
