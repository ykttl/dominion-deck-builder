import React, { Component } from 'react';
import Cards from './Cards';
import Sidebar from './Sidebar';

class CardPick extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s9">
          <Cards />
        </div>
        <div className="col s3 sticky">
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default CardPick;
