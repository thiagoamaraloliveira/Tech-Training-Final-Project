const Services = require("./Services");
const database = require("../models");

class CategoriesServices extends Services {
  constructor() {
    super("Categories");
  }
}

module.exports = CategoriesServices;
