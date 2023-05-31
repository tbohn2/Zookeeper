const sequelize = require("../config/connection");
const { User, Pokemon, Species } = require("../models");

const userData = require("./userData.json");

let url = `https://pokeapi.co/api/v2/pokemon-species/`;
let speciesData = [];

const fetchData = async () => {
  for (let i = 1; i <= 151; i++) {
    await fetch(url + i).then((res) =>
      res.json().then((data) => {
        const pokemon = {
          id: data.id,
          name: data.name,
          type: data.types,
          image: data.sprites.front_default,
        };
        pokeData.push(pokemon);
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

  // await fetchData();

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  // const pokemon = await Species.bulkCreate(speciesData);

  process.exit(0);
};

seedDatabase();
