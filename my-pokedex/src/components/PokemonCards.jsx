function PokeCards() {

  const Pokemon = (pokemonList[1]);

  

    return (
        <figure>
          {Pokemon.imgSrc? (<img src={Pokemon.imgSrc} alt={Pokemon.name}/>) : (<p>???</p>)}
          
          <figcaption>
                {Pokemon.name}

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

const pokemonList = [

    {
  
      name: "bulbasaur",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  
    },
  
    {
  
      name: "mew",
  
    },
  
  ];

export default PokeCards;