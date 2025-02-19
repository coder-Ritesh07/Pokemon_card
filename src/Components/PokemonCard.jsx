import { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";

function PokemonCard() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon`).then((res) => {
      setPokemon(res.data.results);
    });
  }, []);
  return (
    <div>
      <h1 className="text-center text-black text-3xl font-bold my-3 ">Pokemon Cards</h1>
      <div className=" grid lg:grid-cols-5 md:grid-cols-4 md:gap-3 md:py-5 sm:grid-cols-3 sm:gap-2 sm:py-4 min-[320px]:grid-cols-1 min-[320px]:gap-2 min-[320px]:py-3 ">
      {pokemon.map((poke,idx) => (
         
        <PokemonList card={poke} id={idx+1} key={poke.name} />
      ))}
      </div>
    </div>
  );
}
export default PokemonCard;
