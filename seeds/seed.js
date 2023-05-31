const sequelize = require("../config/connection");
const { User, Pokemon, Species, Pokehome } = require("../models");
const pokeData = require("./pokeData.json");
const homeData = require("./homeData.json");
const userData = require("./userData.json");
const { findAll } = require("../models/User");

let url = `https://pokeapi.co/api/v2/pokemon/`;
let speciesData = [];

const fetchData = async () => {
  for (let i = 1; i <= 151; i++) {
    await fetch(url + i).then((res) =>
      res.json().then((data) => {
        const species = {
          id: data.id,
          name: data.name,
          type: JSON.stringify(data.types),
          image: data.sprites.front_default,
        };
        speciesData.push(species);
      })
    );
  }
};

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await fetchData();
  const species = await Species.bulkCreate(speciesData, {
    individualHooks: true,
    returning: true,
  });

  for (const home of homeData) {
    await Pokehome.create({
      ...home,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  const pokehomes = await Pokehome.findAll();

  for (const pokemon of pokeData) {
    await Pokemon.create({
      ...pokemon,

      pokehome_id: pokehomes[Math.floor(Math.random() * pokehomes.length)].id,
      species_id: species[Math.floor(Math.random() * species.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
