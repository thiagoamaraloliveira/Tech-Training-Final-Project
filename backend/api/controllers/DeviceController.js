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

  static async getDevice(req, res) {
    const { id } = req.params;
    try {
      const device = await database.Devices.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(device);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createDevice(req, res) {
    const newDevice = req.body;
    try {
      const newDeviceCreated = await database.Devices.create(newDevice);
      return res.status(200).json(newDeviceCreated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = DeviceController;
