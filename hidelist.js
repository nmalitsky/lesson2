// generate (random) pokemon list (with specified length) for hide

const random = require('./random');
const PokemonList = require('./pokemonlist');

const hideList = (pokemonList, maxHideList) => {
	let hideList = pokemonList;
        if (pokemonList.length > maxHideList) {
            hideList = new PokemonList();
            let pokemonListCopy = pokemonList.slice();
            for (let i = 0; i < maxHideList; i++) {
                let pokemon = pokemonListCopy.splice(random(1, pokemonListCopy.length) - 1, 1)[0];
                hideList.push(pokemon);
            }

        }
	return hideList;
};

module.exports = hideList;