const database = require("../models");

class UserController {
  static async getAllUsers(req, res) {
    try {
      const allUsers = await database.Users.findAll();
      return res.status(200).json(allUsers);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getUser(req, res) {
    const { id } = req.params;
    try {
      const user = await database.Users.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createUser(req, res) {
    const newUser = req.body;
    try {
      const newUserCreated = await database.Users.create(newUser);
      return res.status(200).json(newUserCreated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    const newInfoUser = req.body;

    try {
      await database.Users.update(newInfoUser, {
        where: { id: Number(id) },
      });
      const updatedUser = await database.Users.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    try {
      await database.Users.destroy({
        where: { id: Number(id) },
      });
      return res.status(200).json({ message: `id ${id} deleted` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = UserController;
