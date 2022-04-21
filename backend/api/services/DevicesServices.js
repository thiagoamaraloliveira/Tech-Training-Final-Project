const Services = require("./Services");
const database = require("../models");

class DevicesServices extends Services {
  constructor() {
    super("Devices");
  }
}

module.exports = DevicesServices;
