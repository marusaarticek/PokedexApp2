package com.pokedex.pokemon;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PokemonRepository extends JpaRepository<Pokemon, Integer> {

	Optional<Pokemon> findByName(String name);

}
