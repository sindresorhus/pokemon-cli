#!/usr/bin/env node
'use strict';
const meow = require('meow');
const pokemon = require('pokemon');

const cli = meow(`
	Examples
	  $ pokemon
	  Snorlax
	  $ pokemon --all
	  Bulbasaur
	  Ivysaur
	  ...

	Options
	  --all  Get all the names instead of a random name
`);

console.log(cli.flags.all ? pokemon.all.join('\n') : pokemon.random());
