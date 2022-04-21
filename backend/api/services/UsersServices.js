const Services = require("./Services");
const database = require("../models");

class UsersServices extends Services {
  constructor() {
    super("Users");
  }
}

module.exports = UsersServices;
