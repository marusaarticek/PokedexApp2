Vue.createApp({
    data() {
        return {
            battle: {
                id: 1,
                name: "",
                pokemonList: {
                    id: 0,
                    name: "",
                    type: "",
                    description: "",
                    level: 0,
                    trainer: {}
                }
            },
            pokemons: [],
            battles: [],
            selected: 0
        }
    },
    methods: {
        addBattle(bid,pid) {
            axios
            .post("http://localhost:8080/gymBattle/"+bid+"/pokemon/"+pid)
            .catch(function (error) {
                console.log(error)
                alert("an error has occured")
            }),
            this.battles.push(JSON.parse(JSON.stringify(this.battle)))
            console.log(this.battle)
        },
        
        deleteBattle(bid, pid) {
            axios
            .delete("http://localhost:8080/gymBattle/"+ bid + "/pokemon/" + pid + "/delete")
            .catch(function (error) {
                console.log(error)
                alert("an error has occured")
            });
            let i = 0;
            let j = 0;
            while(i<this.battles.length) {
                if(this.battles[i].id===bid) {
                    while(j<this.pokemonList.length)
                        if(this.pokemonList.pokemon[j].id ===pid)
                            this.battle.pokemonList.pokemon.splice(j, 1);
                            break;
                }else{
                    i++;
                }
            } 
        },
        
    },
    mounted: function() {
        axios
        .get('http://localhost:8080/pokemon/getAllPokemon')
        .then(response => (this.pokemons = response.data))
        .catch(function (error) {
            console.log(error)
        });
        axios
        .get('http://localhost:8080/gymBattle/getAllgymBattles')
        .then(response => (this.battles = response.data))
        .catch(function (error) {
            console.log(error)
        });
    }
}).mount("#gym") 