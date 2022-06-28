package com.pokedex.pokemon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
public class PokemonController {

	@Autowired
	PokemonService pokemonService;

	public PokemonController() {
		super();
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping("pokemon/getAllPokemon")
	public List<Pokemon> getAllPokemon() {
		return pokemonService.getAllPokemon();
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("pokemon/getPokemonById/{i}")
	public Optional<Pokemon> getPokemonById(@PathVariable int i) {
		return pokemonService.getPokemonById(i);
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("pokemon/getPokemonByName/{name}")
	public Optional<Pokemon> getPokemonByName(@PathVariable String name) {
		return pokemonService.getPokemonByName(name);
	}
	
	@CrossOrigin(origins = "*")
	@DeleteMapping("pokemon/deletePokemon/{i}")
	public String deletePokemon(@PathVariable int i) {
		return pokemonService.deletePokemon(i);
	}
	
	@CrossOrigin(origins = "*")
	@PutMapping("pokemon/updatePokemon")
	public String updatePokemon(@RequestBody Pokemon p) {
		return pokemonService.updatePokemon(p);
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/pokemon/createPokemon", method = RequestMethod.POST)
	public String createPokemon(@RequestBody Pokemon p) {
		return pokemonService.createPokemon(p);
	}
}
