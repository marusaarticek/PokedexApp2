Vue.createApp({
    data() {
        return {
            pokemon: {
                id: 0,
                name: "",
                type: "",
                description: "",
                level: 0
            },
            pokemons: []
        }
    },
    methods: {
        findPokemon() {
            axios
            .get("http://localhost:8080/pokemon/getPokemonByName/" + this.pokemon.name)
            .then(response => this.pokemons = response.data)
            .catch(function (error) {
                console.log(error)
                alert("an error has")
            });
        },
        addPokemon() {
            axios
            .post("http://localhost:8080/pokemon/createPokemon",this.pokemon)
            .catch(function (error) {
                console.log(error)
                alert("an error has")
            }),
            this.pokemons.push(this.pokemon)
        },
    },
    mounted: function() {
        axios
        .get('http://localhost:8080/pokemon/getAllPokemon')
        .then(response => (this.pokemons = response.data))
        .catch(function (error) {
            console.log(error)
        });
    }
}).mount("#pokemon") 