const URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/category";
Vue.createApp({
    data: function () {
        return {
            zelda_creatures: [],
            showCreatures: true,
            showEnemies: false
        };
    },
    methods: {
        getCreatures: async function () {
            try {
                let response = await fetch(`${URL}/creatures`);
                let data = await response.json();
                let creatures_data = data.data;
                creatures_data.forEach((creature) => {
                    this.zelda_creatures.push({image_url: creature.image, name: creature.name, id: creature.id});
                });
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
