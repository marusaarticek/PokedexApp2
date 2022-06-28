package com.pokedex.pokemon;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PokemonService {

	@Autowired
	PokemonRepository pokemonRepo;
	
	public PokemonService() {
		super();
		// TODO Auto-generated constructor stub
	}

	public List<Pokemon> getAllPokemon() {
		return pokemonRepo.findAll();
	}
	
	public Optional<Pokemon> getPokemonById(int i) {
		return pokemonRepo.findById(Integer.valueOf(i));
	}
	
	public Optional<Pokemon> getPokemonByName(String name) {
		return pokemonRepo.findByName(name);
	}
	
	/*
	public Optional<Pokemon> getPokemonByName(String name) {
		return pokemonRepo.
	}
	*/
	
	public String deletePokemon(int i) {
		try {
			pokemonRepo.deleteById(Integer.valueOf(i));
		} catch (Exception e) {
			e.printStackTrace();
			return "That Pokemon does not exist!";
		}
		return "Pokemon Deleted successfully!";
	}
	
	public String createPokemon(Pokemon p) {
		try {
			pokemonRepo.save(p);
		} catch (Exception e) {
			e.printStackTrace();
			return "Pokemon was not added!";
		}
		return "Pokemon added successfully!";
	}
	
	public String updatePokemon(Pokemon p) {
		try {
			pokemonRepo.save(p);
		} catch (Exception e) {
			e.printStackTrace();
			return "Pokemon was not updated!";
		}
		return "Pokemon updated successfully!";
	}
	
}
