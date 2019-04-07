#!/usr/bin/env node
'use strict';
const meow = require('meow');
const pokemon = require('pokemon');

const cli = meow(`
	Examples
	  $ pokemon
	  Snorlax
	  $ pokemon --lang ja
	  マクノシタ
	  $ pokemon --all
	  Bulbasaur
	  Ivysaur
	  ...

	Options
	  --all  Get all the names instead of a random name
	  --lang Set the language for the pokemon. Defaults to 'en'
`);

const lang = cli.flags.lang || 'en';
console.log(cli.flags.all ? pokemon.all(lang).join('\n') : pokemon.random(lang));
