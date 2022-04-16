const bodyParser = require("body-parser");
const devices = require("./devicesRoute")

module.exports = (app) => {
  app.use(bodyParser.json())
  app.use(devices)
};
