#!/usr/bin/env node
'use strict';
const meow = require('meow');
const pokemon = require('pokemon');

const cli = meow(`
	Examples																																			
		$ pokemon																																	 
		Snorlax																																		 
		$ pokemon -n 4																															
		Regigigas																																	 
		Aurorus																																		 
		Bunnelby																																		
		Smeargle																																		
		$ pokemon --all																														 
		Bulbasaur																																	 
		Ivysaur																																		 
		...																																				 
																																								
	Options																																			 
		--all	Get all the names																										
		-n=N	 Get N random names if N is an integer, otherwise random
`);

let output;
if (cli.flags.all) {
	output = pokemon.all.join('\n');
} else if (cli.flags.n && cli.flags.n === parseInt(cli.flags.n, 10)) {
	const pokemonArray = [];
	cli.flags.n = cli.flags.n > pokemon.all.length ? pokemon.all.length : cli.flags.n;
	while (pokemonArray.length < cli.flags.n) {
		const temp = pokemon.random();
		if (pokemonArray.indexOf(temp) === -1) {
			pokemonArray.push(temp);
		}
	}
	output = pokemonArray.join('\n');
} else {
	output = pokemon.random();
}
console.log(output);
