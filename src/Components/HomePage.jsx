import PokemonCard from "./PokemonCard";

function HomePage() {
  return (
    <>
      <div className="bg-orange-200 h-full">
        <header>
          <nav className="h-20 bg-[#EB5B00] flex justify-start px-2">
            <div className="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png"
                alt="pokemon-ball"
                className="w-10 h-10 "
              />
              <h2 className="text-3xl font-bold text-white mr-1">
                Poke<span className="text-2xl font-bold bg-white rounded p-1 text-[#EB5B00]">Mon</span>
              </h2>
            </div>
          </nav>
        </header>
        <main className=" max-w-[90%] mx-auto my-0">
          <PokemonCard/>
        </main>
      </div>
    </>
  );
}
export default HomePage;
