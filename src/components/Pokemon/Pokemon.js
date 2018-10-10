import React, { Component } from 'react';
import {getFirstAbility, convertPoundsToKilograms} from './Pokemon.service';
import { Link } from 'react-router-dom';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      hasErrored: false,
      isLoading: false };
  }

  getPokemon = (pokemonId) => {
    const parseResult = response => response.json();
    this.setState({...this.state, isLoading: true})
    fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonId)
      .then(parseResult)
      .then(result => this.setState({pokemon: result, 
                                     isLoading: false}))
      .catch(e => console.log(e));
  }

  componentDidMount() {
    const {pokemonId} = this.props;
    this.getPokemon(pokemonId);
  }

  render() {
    if (this.state.hasErrored || this.state.pokemon == null) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.state.isLoading) {
        return <p>Loading…</p>;
    }

    const {pokemonId} = this.props;
    return (
      <p>
        <Link to={`detail-page/${pokemonId}`}><b>{this.state.pokemon.name}</b></Link>
        <img src={this.state.pokemon.sprites.front_default} alt={this.state.pokemon.name}/><br/>
        First ability: {getFirstAbility(this.state.pokemon)}<br/>
        Weight: {convertPoundsToKilograms(this.state.pokemon.weight)} kg
      </p>
    );
  }
}

export default Pokemon;
