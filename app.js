const URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/category";
Vue.createApp({
    data: function () {
        return {
            zelda_creatures: []
        }
    },
    methods: {
        getCreatures: async function () {
            try {
                let response = await fetch(`${URL}/creatures`);
                let data = await response.json();
                console.log(data);
                let creatures_data = data.data;
                console.log(creatures_data);
                creatures_data.forEach((creature) => {
                    console.log(creature);
                    this.zelda_creatures.push({"image_url": creature.image, "name": creature.name, "id": creature.id});
                });
                console.log(this.zelda_creatures);
            } catch (error) {
                console.error("Error catching creatures:", error);
            }
        }
    },
    created: function () {
        console.log("app loaded");
        this.getCreatures();
    }
}).mount("#app");