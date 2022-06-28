Vue.createApp({
    data() {
        return {
            trainer: {
                id: 0,
                name: "",
                rank: 0
            },
            trainers: []
        }
    },
    methods: {
        findtrainer() {
            axios
            .get("http://localhost:8080/trainer/getTrainerByName/" + this.trainer.name)
            .then(response => (this.trainers = response.data))
            .catch(function (error) {
                console.log(error)
                alert("an error has")
            });
        },
        addtrainer() {
            axios
            .post("http://localhost:8080/trainer/createTrainer",this.trainer)
            
            .catch(function (error) {
                console.log(error)
                alert("an error has")
            }),
            this.trainers.push(JSON.parse(JSON.stringify(this.trainer)));
        },
        populateRow(p) {
            this.trainer = JSON.parse(JSON.stringify(p))
        },
        updateTrainer() {
            axios
            .put("http://localhost:8080/trainer/updateTrainer", this.trainer)
            .catch(function (error) {
                console.log(error)
                alert("an error has occured")
            });
            let i = 0;
            while(i<this.trainers.length) {
                if(this.trainers[i].id===this.trainer.id) {
                    this.trainers[i]=this.trainer;
                    break;
                }else{
                    i++;
                }
            }
            this.trainer = {}; 
        },
        deleteTrainer(tid) {
            axios
            .delete("http://localhost:8080/trainer/deleteTrainer/" + tid)
            .catch(function (error) {
                console.log(error)
                alert("an error has occured")
            });
            let i = 0;
            while(i<this.trainers.length) {
                if(this.trainers[i].id===tid) {
                    this.trainers.splice(i, 1);
                    break;
                }else{
                    i++;
                }
            } 
        },
    },
    mounted: function() {
        axios
        .get('http://localhost:8080/trainer/getAllTrainers')
        .then(response => (this.trainers = response.data))
        .catch(function (error) {
            console.log(error)
        });
    }
}).mount("#trainer") 