const URL = "https://botw-compendium.herokuapp.com/api/v3/compendium/category";
Vue.createApp({
    data: function () {
        return {
            zelda_creatures: [],
            showCreatures: true,
            showEnemies: false,
            zelda_monsters: []
        }
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
        },
        getEnemies: async function () {
            try {
                let response = await fetch(`${URL}/monsters`);
                let data = await response.json();
                let monsters_data = data.data;
                monsters_data.forEach((monster) => {
                    this.zelda_monsters.push({image_url: monster.image, name: monster.name, id: monster.id});
                });
            } catch (error) {
                console.error("Error catching creatures:", error);
            }
        },
        toggleMode: function (type) {
            if (type === "monsters") {
                this.showEnemies = true;
                this.showCreatures = false;
            }
            if (type === "creatures") {
                this.showCreatures = true;
                this.showEnemies = false;
            }
        }
    },
    created: function () {
        console.log("app loaded");
        this.getCreatures();
        this.getEnemies();
    }
}).mount("#app");