'use strict';

const Pokemon = require('./pokemon');

module.exports = class PokemonList extends Array {
	constructor (...pokemons) {
 		super(...pokemons);
	}

	// add Pokekon to the end of list
	add(name, level) {
		this.push(new Pokemon(name, level));
	}

	// show pokemoms info and list length
	show() {
		this.forEach(pokemon => pokemon.show())
		console.log(`----------------\nTotal in list: ${this.length}\n`);
	}

	// get max level of pokemons
	max() {
		return Math.max(...this);
	}
}
