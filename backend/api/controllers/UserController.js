const { UsersServices } = require("../services");
const userServices = new UsersServices();
class UserController {
  static async getAllUsers(req, res) {
    try {
      const allUsers = await userServices.getAllRegisters();
      return res.status(200).json(allUsers);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getUser(req, res) {
    const { id } = req.params;
    try {
      const user = await userServices.getOneRegister(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createUser(req, res) {
    const newUser = req.body;
    try {
      const newUserCreated = await userServices.createRegister(newUser);
      return res.status(200).json(newUserCreated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    const newInfoUser = req.body;

    try {
      await userServices.updateRegister(newInfoUser, id);
      const updatedUser = await userServices.getOneRegister(id);
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    try {
      await userServices.deleteRegister(id);
      return res.status(200).json({ message: `id ${id} deleted` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restoreUser(req, res) {
    const { id } = req.params;
    try {
      await userServices.restoreRegister(id);
      return res.status(200).json({ message: `id ${id} restored` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = UserController;
