const fs = require('fs');

const random = require('./random');
const Pokemon = require('./pokemon');
const PokemonList = require('./pokemonlist');

const maxHideList = 3;

module.exports = {
    hide: function (path, pokemonList) {
        let hideList = pokemonList;
        if (pokemonList.length > maxHideList) {
            hideList = new PokemonList();
            let pokemonListCopy = pokemonList.slice();
            for (let i = 0; i < maxHideList; i++) {
                let pokemon = pokemonListCopy.splice(random(1, pokemonListCopy.length) - 1, 1)[0];
                hideList.push(pokemon);
            }

        }

        for (let i = 0; i < 10; i++) {
            fs.mkdir(`${path}/${(i < 9 ? '0' : '') + (i + 1)}`, function (err) {
                if (err) throw err;
            });
        }

        hideList.forEach(pokemon => {
            let numFolder = random(1, 10);
            let folder = `${path}/${(numFolder < 10 ? '0' : '') + numFolder}`;

            fs.writeFile(`${folder}/pokemon.txt`, JSON.stringify(pokemon.obj, null, 2), function (err) {
            	if (err) throw err;
            });

    	});

        return hideList;
    },

    seek: function (path, callback) {
        let findList = new PokemonList();

        fs.readdir(path, function (error, subDirs) {
            if (error) {
                console.log('Error find path:', path);
            } else {
                var readSubDirs = function (index, callback) {
                    if (index == subDirs.length) {
                        return callback(null, findList)
                    } else {
                        let file = `${path}/${subDirs[index]}/pokemon.txt`;
                        fs.readFile(file, 'utf-8', function (error, data) {
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