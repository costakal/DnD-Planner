const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const { getAllMonsters, getMonster } = require("./handlers");
const { getAllMonsterStats } = require("./mongodb/getAllMonsterStats");
const { saveEncounter } = require("./mongodb/saveEncounter");

const PORT = 4000;

express()
  .use(helmet())
  .use(morgan("dev"))
  .use(express.json())

  // REST endpoints
  .get("/bacon", (req, res) => res.status(200).json("🥓"))
  .get("/monsters", getAllMonsters)
  .get("/monsters/:monsterIndex", getMonster)
  .get("/allmonsters", getAllMonsterStats)

  // .get("/encounters")
  // .get("/encounters/:encounterId")
  .post("/saveEncounters", saveEncounter)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
