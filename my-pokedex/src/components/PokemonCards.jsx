import PropTypes from 'prop-types';

   
function PokemonCards({ pokemon }) {


    return (
        <figure>
            {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>???</p>)}
            <figcaption>
                {pokemon.name}

            </figcaption> 
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