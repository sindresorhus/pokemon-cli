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
		}
	}
});

const {all, language} = cli.flags;

console.log(all ? pokemon.all(language).join('\n') : pokemon.random(language));
