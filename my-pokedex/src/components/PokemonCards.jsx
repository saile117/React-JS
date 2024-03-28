import PropTypes from 'prop-types';


function PokemonCards({pokemon}) {

  
 


  // const Pokemon = pokemonList[1];

  

    return (
        <figure>
          {pokemon.imgSrc? (<img src={pokemon.imgSrc} alt={pokemon.name}/>) : (<p>???</p>)}
          
          <figcaption>
                {pokemon.name}

            </figcaption>
            {/* <img
                alt="bulbasaur"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            />
            <figcaption>
                Bulbasaur

            </figcaption> */}
        </figure>
    );
  
}
PokemonCards.propTypes = 
{

pokemon: PropTypes.shape({

    name: PropTypes.string.isRequired,
  
    img: PropTypes.string,
  
}),
};

export default PokemonCards;