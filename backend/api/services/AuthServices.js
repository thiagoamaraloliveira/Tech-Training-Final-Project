const Services = require("./Services");
const database = require("../models");

class AuthServices extends Services {
  constructor() {
    super("Users");
  }

  async getUser(user) {
    return database.Users.findOne({
      where: { user: user },
    });
  }
}

module.exports = AuthServices;
