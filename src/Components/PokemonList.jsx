import { useEffect, useState } from "react"


function PokemonList(props){
    const [pokedata,setPokedata]=useState(null)
    useEffect(()=>{
    //   console.log(props.card)
      fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}/`).then((res)=>{
        return res.json()
      }).then((data)=>{
        console.log("resdata-",data)
        setPokedata(data)
      }).catch((err)=>{
        console.log(err)
      })
    },[props.id])
    return  <>
    <div className=" bg-orange-300 p-2 rounded-md hover:scale-105 transition">
    {
        <div className="flex flex-col justify-center items-center gap-y-1">
            <img src={pokedata?.sprites?.front_default} alt="pokemon-img" className="md:w-full md:h-36 min-[320px]:w-52 min-[320px]:h-28"/>
            <p className="text-black font-bold text-xl">{pokedata?.name}</p>
            <p className="text-[#202020] font-bold text-[18px]">Type:{pokedata?.types?.map((typeInfo) => typeInfo.type.name).join(", ")}</p>
            <p className="font-bold"><span className="bg-orange-500 text-white font-semibold p-[2px] rounded text-xl mr-1">Weight-</span>{`${pokedata?.weight}Kg`}</p>
        </div>
        
    }

    </div>
  </>
}
export default PokemonList