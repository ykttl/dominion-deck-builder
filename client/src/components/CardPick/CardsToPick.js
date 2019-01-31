import React, { Component } from 'react';
import Select from 'react-select';
import cardsData from '../../cardsData';
import { connect } from 'react-redux';
import * as actions from '../../actions/action';

class CardPick extends Component {
  state = { expansion: null, cost: null, type: null, cardName: '' };
  pickCard = cardName => {
    this.props.selectCard(cardName);
  };
  selectExpansion = e => {
    this.setState({ expansion: e.value });
  };
  selectCost = e => {
    this.setState({ cost: e.value });
  };
  selectType = e => {
    this.setState({ type: e.value });
  };
  renderCards() {
    let cardsToRender = cardsData;

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

    function compare(a, b) {
      if (a.cost < b.cost) return -1;
      if (a.cost > b.cost) return 1;
      return 0;
    }

    cardsToRender.sort(compare);

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
  }
  render() {
    const options1 = [
      { value: null, label: 'All' },
      { value: 'base', label: 'Base Set' },
      { value: 'seaside', label: 'Seaside' },
      { value: 'prosperity', label: 'Prosperity' }
    ];
    const options2 = [
      { value: null, label: 'All' },
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 4, label: 4 },
      { value: 5, label: 5 },
      { value: 6, label: 6 },
      { value: 7, label: 7 },
      { value: 8, label: 8 }
    ];
    const options3 = [
      { value: null, label: 'All' },
      { value: 'action', label: 'Action' },
      { value: 'attack', label: 'Attack' },
      { value: 'reaction', label: 'Reaction' },
      { value: 'duration', label: 'Duration' },
      { value: 'victory', label: 'Victory' },
      { value: 'treasure', label: 'Treasure' }
    ];
    const styles = {
      control: styles => ({
        ...styles,
        width: '150px',
        height: '30px',
        border: 'solid gray',
        'font-size': '1.2rem'
      })
    };

    return (
      <div>
        <div className="selectors">
          <Select
            options={options1}
            styles={styles}
            placeholder="Expansion"
            onChange={this.selectExpansion}
          />
          <Select
            options={options2}
            styles={styles}
            placeholder="Cost"
            onChange={this.selectCost}
          />
          <Select
            options={options3}
            styles={styles}
            placeholder="Type"
            onChange={this.selectType}
          />
        </div>
        <div>{this.renderCards()}</div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(CardPick);
