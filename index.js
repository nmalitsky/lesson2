/*
var app_args = process.argv.slice(2);

if(app_args.length == 0) {
   console.log("Usage:");
   console.log("HIDE: node index hide ./field/ ./pokemons.json");
   console.log("SEEK: node index seek ./field/");
   process.exit(1);
}
*/

const hidenseek = require('./hidenseek');

const Pokemon = require('./pokemon');
const PokemonList = require('./pokemonlist');

let pokemons = new PokemonList(	
	new Pokemon('Zirk', 3),
	new Pokemon('Zaza', 5),
	new Pokemon('Kirk', 1),
	new Pokemon('ZZKirk', 1),
	new Pokemon('fdfdKirk', 1),
	new Pokemon('faaaa', 1),
	new Pokemon('bbbbb', 1)
);


//hidenseek.hide('./field', pokemons);
hidenseek.seek('./field');