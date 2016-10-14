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
		const pokemons = require(app_args[2]);
		const objects = pokemons.map(obj => new Pokemon(obj.name, obj.level));
		let pokemonList = new PokemonList(...objects);
		hidePokemons = hidenseek.hide(app_args[1], pokemonList);
		console.log('hide pokemons list:');
		hidePokemons.show();
		break;
	case 'seek':
		if(app_args.length < 2) {
			console.log('Error: arguments is less than two');
			require('./usage');
		}
		hidenseek.seek(app_args[1], function(error, seekPokemons) {
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





