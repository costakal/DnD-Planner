const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI_CAMPAIGN } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const saveEncounter = async (req, res) => {
  const client = await MongoClient(MONGO_URI_CAMPAIGN, options);

  try {
    await client.connect();

    const data = req.body;

    const db = client.db("campaign");
    console.log("connected!");

    const newEncounter = await db.collection("encounters").insertOne(data);

    res.status(200).json(newEncounter);
  } catch (err) {
    res.status(500).json("Not saved");
  }

  client.close();
  console.log("disconnected!");
};

module.exports = { saveEncounter };
