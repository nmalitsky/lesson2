// main

var app_args = process.argv.slice(2);

if(app_args.length == 0) {
	require('./usage');
}

const hidenseek = require('./hidenseek');
const Pokemon = require('./pokemon');
const PokemonList = require('./pokemonlist');

switch(app_args[0]) {
	case 'hide':
		if(app_args.length < 3) {
			console.log('Error: arguments is less than three');
			require('./usage');
		}
		// load data fo create pokemoms
		const pokemons = require(app_args[2]);
		const objects = pokemons.map(obj => new Pokemon(obj.name, obj.level));
		let pokemonList = new PokemonList(...objects);
		
		// hide pockemons in folders
		hidenseek.hide(app_args[1], pokemonList, (error, hidePokemons) => {
			if (!error) {
				console.log('hide pokemons list:');
				hidePokemons.show();
			}
		});
		break;
	case 'seek':
		if(app_args.length < 2) {
			console.log('Error: arguments is less than two');
			require('./usage');
		}
		
		// seek pokemons from folder
		hidenseek.seek(app_args[1], (error, seekPokemons) => {
			if (!error) {
				console.log('seek pokemons list:');
				seekPokemons.show();
			}
		});
		break;
	default:
		console.log('Error: incorrect command');
		require('./usage');
}