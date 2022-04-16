const database = require("../models");

class DeviceController {
  static async getAllDevices(req, res) {
    try {
      const allDevices = await database.Devices.findAll();
      return res.status(200).json(allDevices);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = DeviceController;
