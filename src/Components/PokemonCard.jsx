import { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";

function PokemonCard(props) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon`).then((res) => {
      setPokemon(res.data.results);
    });
  }, []);

  let filterPokemoncard = pokemon.filter((poke) => {
    if (props.searchdata === "") {
      return true; // Show all Pokémon if the search term is empty
    } else {
      return poke.name.toLowerCase().includes(props.searchdata.toLowerCase());
    }
  });

  console.log("filter data-", filterPokemoncard);

  return (
    <div>
      <h1 className="text-center text-black text-3xl font-bold my-3 ">Pokemon Cards</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 md:gap-3 md:py-5 sm:grid-cols-3 sm:gap-2 sm:py-4 min-[475px]:grid-cols-2 min-[320px]:grid-cols-1 min-[320px]:gap-2 min-[320px]:py-3">
        {filterPokemoncard.map((poke) => {
          const id = poke.url.split('/')[6]; // Get the actual Pokémon id from the URL
          return <PokemonList card={poke} id={id} key={poke.name} />;
        })}
      </div>
    </div>
  );
}

export default PokemonCard;
