const { MongoClient } = require("mongodb");
const request = require("request-promise");

require("dotenv").config();
const { MONGO_URI_MONSTERS } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getAllMonsters = (req, res) => {
  return request(`https://www.dnd5eapi.co/api/monsters/`)
    .then((res) => JSON.parse(res))
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      return err.error ? JSON.parse(err.error) : err;
    });
};

const monsters = {};

const addAllMonsterStats = async () => {
  // creates a new client
  const client = await MongoClient(MONGO_URI_MONSTERS, options);

  // connect to the client
  await client.connect();

  // connect to the database (db name is provided as an argument to the function)
  const db = client.db("monsters");
  console.log("connected!");

  getAllMonsters();

  await db.collection("allMonsters").insertOne({ monsters });
  // forEach index of the monsters endpoint find monster and fetch data, then insert into the database

  // close the connection to the database server
  client.close();
  console.log("disconnected!");
};

addAllMonsterStats();
