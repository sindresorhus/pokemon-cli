#!/usr/bin/env node
'use strict';
const meow = require('meow');
const pokemon = require('pokemon');

const cli = meow(`
	Usage:
	  $ pokemon

	Options
	  --all       Get all the names instead of a random name
	  --language  Specify a language  [Default: en]  [Values: de, en, fr, ja, ko, ru, zh-Hans, zh-Hant]
	  --number	  Specifies the pokedex number of the pokemon to print
	Examples
	  $ pokemon
	  Snorlax
	  $ pokemon --all
	  Bulbasaur
	  Ivysaur
	  …
	  $ pokemon --language=ja
	  マクノシタ
`, {
	flags: {
		all: {
			type: 'boolean',
			default: false
		},
		language: {
			type: 'string',
			default: 'en'
		},
		number: {
			type: 'int',
			default: 0
		}
	}
});

const {all, language, number} = cli.flags;
if (number === 0) {
	const randomPokemon = pokemon.random(language);
	const randomPokemonId = pokemon.getId(randomPokemon);
	console.log(all ? pokemon.all(language).join('\n') : randomPokemon + ' ' + randomPokemonId);
} else {
	console.log(pokemon.getName(number, language));
}
