import React, { Component } from 'react';

import {getFirstAbility, convertPoundsToKilograms} from './Pokemon.service';
// Import routing components

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonDetails: null,
      hasErrored: false,
      isLoading: false };
  }

  getPokemonDetails = (pokemonId) => {
    const parseResult = response => response.json();
    this.setState({...this.state, isLoading: true})
    fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonId)
      .then(parseResult)
      .then(result => this.setState({pokemonDetails: result, 
                                     isLoading: false}))
      .catch(e => console.log(e));
  }

  componentDidMount() {
    this.getPokemonDetails(this.props.match.params.id);
  }

  render() {
    if (this.state.hasErrored || this.state.pokemonDetails == null) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.state.isLoading) {
        return <p>Loading…</p>;
    }

    return (
      <div>
        <h3># {this.state.pokemonDetails.id} : {this.state.pokemonDetails.name}</h3>
        <img src={this.state.pokemonDetails.sprites.front_default} alt={this.state.pokemonDetails.name}/><br/>
        First ability: {getFirstAbility(this.state.pokemonDetails)}<br/>
        Weight: {convertPoundsToKilograms(this.state.pokemonDetails.weight)} kg<br/>
        Base experience: {this.state.pokemonDetails.base_experience}<br/>
        Type(s): <ul>{this.state.pokemonDetails.types.map(elt => (
                      <li key={`${elt.slot}`}>
                        {elt.type.name}
                      </li>
                    ))}</ul><br/>
      </div>
    );
  }
}
export default DetailPage;