import { useState } from 'react'
import './App.css'
import './components/PokemonCards'
import PokemonCards from './components/PokemonCards'
import NavBar from './components/NavBar'



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
    
    }
    else setPokemonIndex(pokemonIndex + 1)

  }
  const handleClickPrevious = () => {
    if (pokemonIndex === 0 ) {
      
    }

     else setPokemonIndex(pokemonIndex - 1)
  }
  return (
    <>
      <div>
       <NavBar handleClickNext={handleClickNext} handleClickPrevious={handleClickPrevious}/>
        <PokemonCards pokemon={pokemonList[pokemonIndex]} />
       
      </div>


    </>
  );
}

export default App;
