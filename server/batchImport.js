const { MongoClient, ObjectID } = require("mongodb");
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
      return data;
    })
    .catch((err) => {
      return err.error ? JSON.parse(err.error) : err;
    });
};

const batchImport = async () => {
  const monsterData = await getAllMonsters();

  const client = await MongoClient(MONGO_URI_MONSTERS, options);

  await client.connect();

  const db = client.db("monsters");
  console.log("connected!");

  try {
    await monsterData.results.map(async (monster) => {
      const response = await request(`https://www.dnd5eapi.co${monster.url}`);
      const monsterStats = await JSON.parse(response);
      monsterStats._id = ObjectID(monsterStats._id);
      await db.collection("allMonsters").insertOne(monsterStats);
      return monsterStats;
    });
  } catch (error) {
    console.log(error.message);
  }

  // **Manually close the client in the terminal after the import.**
};

batchImport();
