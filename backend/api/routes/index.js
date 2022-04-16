const bodyParser = require("body-parser");
const devices = require("./devicesRoute");
const users = require("./usersRoute");
const categories = require("./categoriesRoute");

module.exports = (app) => {
  app.use(bodyParser.json(), devices, users, categories);
};
