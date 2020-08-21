const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const { getAllMonsters } = require("./handlers");

const PORT = 4000;

express()
  .use(helmet())
  .use(morgan("dev"))
  .use(express.json())

  // REST endpoints
  .get("/bacon", (req, res) => res.status(200).json("🥓"))
  .get("/monsters", getAllMonsters)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
