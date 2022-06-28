Vue.createApp({
    data() {
        return {
            pokemon: {
                id: 0,
                name: "",
                type: "",
                description: "",
                level: 0,
                trainer: {}
            },
            trainers: [],
            pokemons: [],
            selected: 0
        }
    },
    methods: {
        findPokemon() {
            axios
            .get("http://localhost:8080/pokemon/getPokemonByName/" + this.pokemon.name)
            .then(response => (this.pokemons = response.data))
            .catch(function (error) {
                console.log(error)
                alert("an error has occured")
            });
        },
        addPokemon() {
            axios
            .post("http://localhost:8080/pokemon/createPokemon", this.pokemon)
            .catch(function (error) {
                console.log(error)
                alert("an error has occured")
            }),
            this.pokemons.push(JSON.parse(JSON.stringify(this.pokemon)))
            console.log(this.pokemon)
        },
        populateRow(p) {
            this.pokemon = JSON.parse(JSON.stringify(p))
        },
        updatePokemon() {
            axios
            .put("http://localhost:8080/pokemon/updatePokemon", this.pokemon)
            .catch(function (error) {
                console.log(error)
                alert("an error has occured")
            });
            let i = 0;
            while(i<this.pokemons.length) {
                if(this.pokemons[i].id===this.pokemon.id) {
                    this.pokemons[i]=this.pokemon;
                    break;
                }else{
                    i++;
                }
            }
            this.pokemon = {}; 
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
        .get('http://localhost:8080/trainer/getAllTrainers')
        .then(response => (this.trainers = response.data))
        .catch(function (error) {
            console.log(error)
        });
    }
}).mount("#pokemon") 