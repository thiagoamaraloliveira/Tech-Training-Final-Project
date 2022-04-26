const bodyParser = require("body-parser");
const devices = require("./devicesRoute");
const users = require("./usersRoute");
const categories = require("./categoriesRoute");
const auth = require("./authRoute");
const cors = require("cors");

module.exports = (app) => {
  app.use(bodyParser.json(), cors(), devices, users, categories, auth);
};
