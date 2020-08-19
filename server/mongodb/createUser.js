const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI_USERS } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const createUser = async () => {
  // creates a new client
  const client = await MongoClient(MONGO_URI_USERS, options);

  // connect to the client
  await client.connect();

  // connect to the database (db name is provided as an argument to the function)
  const db = client.db("users");
  console.log("connected!");

  await db.collection("login").insertOne({ username: "newuser" });

  // close the connection to the database server
  client.close();
  console.log("disconnected!");
};

addUser();
