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
                this.zelda_creatures = {"image_url": data.image, "name": data.name, "id": data.id}
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