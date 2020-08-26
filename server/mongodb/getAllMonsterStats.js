const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI_MONSTERS } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getAllMonsterStats = async (req, res) => {
  const client = await MongoClient(MONGO_URI_MONSTERS, options);

  await client.connect();

  const db = client.db("monsters");
  console.log("connected!");

  const monsterStats = await db.collection("allMonsters").find().toArray();

  monsterStats.length > 0
    ? res.status(200).json(monsterStats)
    : res
        .status(404)
        .json({ status: 404, data: "There are no monsters here!" });

  client.close();
  console.log("disconnected!");
};

module.exports = { getAllMonsterStats };
