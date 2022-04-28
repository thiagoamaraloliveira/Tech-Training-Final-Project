const Services = require("./Services");
const database = require("../models");

class DevicesServices extends Services {
  constructor() {
    super("Devices");
  }

  async getAllDevices() {
    return database.Devices.findAll({
      include: [{ model: database.Categories, attributes: ["name"] }],
    });
  }
  async getOneDevice(id) {
    return database.Devices.findOne({
      where: { id: Number(id) },
      include: [{ model: database.Categories, attributes: ["name"] }],
    });
  }
}

module.exports = DevicesServices;
