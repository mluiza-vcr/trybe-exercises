import React from 'react';
import Pokemon from './Pokemon'
import pokemons from './data';

class Pokedex extends React.Component {
  render() {
    const itemsHTML = pokemons.map(item => <Pokemon pok={item} />);
    return (
      <div>
        {itemsHTML}
      </div>
    )
  }
}

export default Pokedex;