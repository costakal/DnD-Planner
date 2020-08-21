const request = require("request-promise");

// REQUESTS MADE FROM DND5eAPI //

// returns a list of all available monsters
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

//requests from Open5e

module.exports = { getAllMonsters };
