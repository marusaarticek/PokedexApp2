package com.pokedex.pokemon;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pokedex.gymBattle.GymBattle;
import com.pokedex.trainer.Trainer;

@Entity
@Table(name="POKEMON", schema="pokedex")
public class Pokemon {

	@Id
	private int id;
	private int level;
	private String name;
	private String type;
	private String description;
	
	@JsonIgnore
	@ManyToMany(mappedBy = "pokemonList")
	private Set<GymBattle> battles = new HashSet<>();
	
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="trainer_id", referencedColumnName = "id")
	private Trainer trainer;
	
	public Pokemon() {
		super();
	}
	
	public Pokemon(int id, int level, String name, String type, String description, Trainer trainer) {
		super();
		this.id = id;
		this.level = level;
		this.name = name;
		this.type = type;
		this.description = description;
		this.trainer = trainer;
	}

	public Trainer getTrainer() {
		return trainer;
	}

	public void setTrainer(Trainer trainer) {
		this.trainer = trainer;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getLevel() {
		return level;
	}
	public void setLevel(int level) {
		this.level = level;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public Set<GymBattle> getBattles() {
		return battles;
	}

	public void setBattles(Set<GymBattle> battles) {
		this.battles = battles;
	}
	
	
}
