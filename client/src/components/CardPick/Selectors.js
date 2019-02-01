import React, { Component } from 'react';
import Select from 'react-select';

class Selectors extends Component {
  render() {
    const expansion = [
      { value: null, label: 'All' },
      { value: 'base', label: 'Base Set' },
      { value: 'seaside', label: 'Seaside' },
      { value: 'prosperity', label: 'Prosperity' }
    ];
    const cost = [
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
    const type = [
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
      <div className="selectors">
        <Select
          options={expansion}
          styles={styles}
          placeholder="Expansion"
          onChange={this.props.selectExpansion}
        />
        <Select
          options={cost}
          styles={styles}
          placeholder="Cost"
          onChange={this.props.selectCost}
        />
        <Select
          options={type}
          styles={styles}
          placeholder="Type"
          onChange={this.props.selectType}
        />
      </div>
    );
  }
}

export default Selectors;
