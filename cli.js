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
	  …
	  $ pokemon --language=ja
	  マクノシタ

	Options
	  --all       Get all the names instead of a random name
	  --language  Set the language for the pokemon  [Default: en]
`, {
	  flags: {
	      language: {
	          default: 'en',
	          type: 'string'
	      }
	  }
});

const {all, language} = cli.flags;
console.log(all ? pokemon.all(language).join('\n') : pokemon.random(language));
