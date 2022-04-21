const { DevicesServices } = require("../services");
const deviceServices = new DevicesServices();
class DeviceController {
  static async getAllDevices(req, res) {
    try {
      const allDevices = await deviceServices.getAllRegisters();
      return res.status(200).json(allDevices);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getDevice(req, res) {
    const { id } = req.params;
    try {
      const device = await deviceServices.getOneRegister(id);
      return res.status(200).json(device);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createDevice(req, res) {
    const newDevice = req.body;
    try {
      const newDeviceCreated = await deviceServices.createRegister(newDevice);
      return res.status(200).json(newDeviceCreated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateDevice(req, res) {
    const { id } = req.params;
    const newInfoDevice = req.body;

    try {
      await deviceServices.updateRegister(newInfoDevice, id);
      const updatedDevice = await deviceServices.getOneRegister(id);
      return res.status(200).json(updatedDevice);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteDevice(req, res) {
    const { id } = req.params;
    try {
      await deviceServices.deleteRegister(id);
      return res.status(200).json({ message: `id ${id} deleted` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restoreDevice(req, res) {
    const { id } = req.params;
    try {
      await deviceServices.restoreRegister(id);
      return res.status(200).json({ message: `id ${id} restored` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = DeviceController;
