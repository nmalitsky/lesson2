'use strict';

module.exports = class Pokemon {
	constructor (name, level) {
		this.name = name;
		this.level = level;
	}

	// show Pokemon name and level
	show() {
		console.log(`Pokemon '${this.name}', level: ${this.level}`);
	}

	get obj() {
		return {name: this.name, level: this.level};
	}

	// override valueOf for Pokemon object
	valueOf() {
		return isNaN(this.level) ? 0 : this.level; // check for valid number value
	}
}

