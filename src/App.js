import React, { Component, Fragment } from 'react';
import './App.css';
import Pokemon from './components/Pokemon/Pokemon.js';

import { BrowserRouter, Route } from 'react-router-dom';
import DetailPage from './components/Pokemon/DetailPage';

class App extends Component {

  render() {
    var rows = [];
    for (var i = 1; i < 10; i++) {
        // note: we add a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        rows.push(<Pokemon key={i} pokemonId={i} />);
    }
    return (
      <div>
        {rows}
        <BrowserRouter>
          <Fragment>
            <Route exact path="/detail-page" component={DetailPage}/>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
