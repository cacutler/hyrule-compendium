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
                this.zelda_creatures = {"image_url": creatures_data.image, "name": creatures_data.name, "id": creatures_data.id}
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