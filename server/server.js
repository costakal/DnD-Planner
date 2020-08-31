const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });
const fs = require("fs");

const { getAllMonsters, getMonster } = require("./handlers");
const { getAllMonsterStats } = require("./mongodb/getAllMonsterStats");
const { saveEncounter, getAllEncounters } = require("./mongodb/encounters");
const { saveEvent, getAllEvents } = require("./mongodb/events");

const PORT = 4000;

express()
  .use(helmet())
  .use(morgan("dev"))
  .use(express.json())
  .use(express.static("./uploads"))

  // REST endpoints
  .get("/monsters", getAllMonsters)
  .get("/monsters/:monsterIndex", getMonster)
  .get("/allmonsters", getAllMonsterStats)

  .get("/encounters", getAllEncounters)
  .post("/saveEncounters", saveEncounter)

  .get("/events", getAllEvents)
  .post("/saveEvent", saveEvent)

  .post("/uploadFile", upload.single("imageSrc"), (req, res) => {
    let fileType = req.file.mimetype.split("/")[1];
    let newFileName = req.file.filename + "." + fileType;
    fs.rename(
      `./uploads/${req.file.filename}`,
      `./uploads/${newFileName}`,
      () => {
        console.log("callback");
        res.status(200).send(newFileName);
      }
    );
  })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
