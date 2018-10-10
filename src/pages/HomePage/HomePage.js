import React, { Component } from 'react';
import Pokemon from '../../components/Pokemon/Pokemon.js';

class HomePage extends Component {

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
      </div>
    );
  }

}

export default HomePage;