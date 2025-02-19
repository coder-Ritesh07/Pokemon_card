import { useState } from "react";
import PokemonCard from "./PokemonCard";

function HomePage() {
    const [search, setSearch] = useState('');

    return (
        <>
            <div className="bg-orange-200 h-full min-h-screen">
                <header>
                    <nav className="h-20 bg-[#EB5B00] flex justify-between items-center sm:px-2 min-[320px]:px-1">
                        <div className="flex items-center">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png"
                                alt="pokemon-ball"
                                className="sm:w-10 sm:h-10 min-[320px]:w-6 min-[320px]:h-6"
                            />
                            <h2 className="sm:text-3xl min-[320px]:text-xl font-bold text-white mr-1">
                                Poke<span className="sm:text-2xl min-[320px]:text-[17px]  font-bold bg-white rounded p-1 text-[#EB5B00]">Mon</span>
                            </h2>
                        </div>
                        <div className="flex gap-x-2">
                            <input
                                type="text"
                                className="sm:w-80 sm:h-9 min-[475px]:w-52 min-[475px]:h-8 min-[375px]:w-48 min-[320px]:w-40 min-[320px]:h-7 focus:outline-none rounded-md pl-1 font-bold"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <div>

                        </div>
                    </nav>
                </header>
                <main className="max-w-[90%] mx-auto my-0">
                    <PokemonCard searchdata={search} />
                </main>
            </div>
        </>
    );
}

export default HomePage;
