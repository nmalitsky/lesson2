// general functional

const fs = require('fs');

const random = require('./random');
const Pokemon = require('./pokemon');
const PokemonList = require('./pokemonlist');

const maxHideList = 3;

module.exports = {
    hide(path, pokemonList, callback) {
	// select 3 pokemons for hide
        let hideList = require('./hidelist')(pokemonList, 3);

	// prepare 10 folders for pokemons ...
	require('./createsubfolders')(path, 10, () => {
		// ... and hide pokemons in random folders
		require('./hidepokemons')(hideList, path, (error, hideList) => {
			return callback(null, hideList);
		});
	});
    },

    seek(path, callback) {
        let findList = new PokemonList();

        fs.readdir(path, (error, subDirs) => {
            if (error) {
                console.log('Error find path:', path);
            } else {
                var readSubDirs = (index, callback) => {
                    if (index == subDirs.length) {
                        return callback(null, findList)
                    } else {
                        let file = `${path}/${subDirs[index]}/pokemon.txt`;
                        fs.readFile(file, 'utf-8', (error, data) => {
                            if (!error) {
                                let obj = JSON.parse(data);
                                findList.add(obj.name, obj.level);
                            }
                            readSubDirs(index + 1, callback)
                        });
                    }
                };
                readSubDirs(0, callback);
            }
        });
    }
};