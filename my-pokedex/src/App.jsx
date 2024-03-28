import { useState } from 'react'
import './App.css'
import './components/PokemonCards'
import PokemonCards from './components/PokemonCards'


const pokemonList = [

  {

    name: "bulbasaur",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",

  },

  {

    name: "charmander",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",

  },

  {

    name: "squirtle",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",

  },

  {

    name: "pikachu",

    imgSrc:

      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",

  },

  {

    name: "mew",

  },

];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickNext = () =>{
    if (pokemonIndex === 4 ) {
      console.log('yen a pas plus')
    }
    else setPokemonIndex(pokemonIndex + 1)

  }
  const handleClickPrevious = () => {
    if (pokemonIndex === 0 ) {
      console.log('yen a pas avant')
    }

     else setPokemonIndex(pokemonIndex - 1)
  }
  return (
    <>
      <div>
        <PokemonCards pokemon={pokemonList[pokemonIndex]} />
        <button onClick={handleClickPrevious}>précédent</button>
        <button onClick={handleClickNext}>suivant</button>
      </div>


    </>
  );
}

export default App;
