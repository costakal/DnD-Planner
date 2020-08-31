const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI_CAMPAIGN } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const saveEvent = async (req, res) => {
  const client = await MongoClient(MONGO_URI_CAMPAIGN, options);

  try {
    await client.connect();

    const data = req.body;

    const db = client.db("campaign");
    console.log("connected!");

    const newEvent = await db.collection("events").insertOne(data);

    res.status(200).json(newEvent);
  } catch (err) {
    res.status(500).json("Not saved");
  }

  client.close();
  console.log("disconnected!");
};

const getAllEvents = async (req, res) => {
  const client = await MongoClient(MONGO_URI_CAMPAIGN, options);

  try {
    await client.connect();

    const db = client.db("campaign");
    console.log("connected!");

    const events = await db.collection("events").find().toArray();

    res.status(200).json(events);
  } catch (err) {
    res.status(500).json("Not available");
  }

  client.close();
  console.log("disconnected!");
};

module.exports = { saveEvent, getAllEvents };
