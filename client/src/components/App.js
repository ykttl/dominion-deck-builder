import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import CardPick from './CardPick/Main';
import DeckList from './DeckList/Main';
import SignUp from './SignUp';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route key={1} exact path="/" component={CardPick} />
            <Route key={2} exact path="/decklist" component={DeckList} />
            <Route key={3} exact path="/signup" component={SignUp} />
            <Route key={4} exact path="/login" component={Login} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
