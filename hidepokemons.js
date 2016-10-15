// hide hide pokemons (from list) to folders (random selected)
// return stored list in folders

const fs = require('fs');
const PokemonList = require('./pokemonlist');
const random = require('./random');

const hidePokemons = (pokemonList, path, callback) => {

        let hideList = new PokemonList();

        fs.readdir(path, (error, subDirs) => {
            if (error) {
                console.log('Error find path:', path);
		return callback(null, hideList);
            } else {
		var hidePokemon = (index, callback) => {
			if(index == pokemonList.length) {
				return callback(null, hideList);
			}
			let numFolder = random(1, subDirs.length);
	            	let folder = `${path}/${(numFolder < 10 ? '0' : '') + numFolder}`;
	            	let file = `${folder}/pokemon.txt`;
	
	            	fs.writeFile(file, JSON.stringify(pokemonList[index].obj, null, 2), err => {
	            		if (!err) {
					console.log(`Hide pokemon in file ${file}`);
					hideList.push(pokemonList[index]);
				}
				hidePokemon(index + 1, callback);
	            	});

		}
		hidePokemon(0, callback);
	}
	});
};

module.exports = hidePokemons;