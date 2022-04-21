const database = require("../models");

class Services {
  constructor(nameOfModel) {
    this.nameOfModel = nameOfModel;
  }

  async getAllRegisters() {
    return database[this.nameOfModel].findAll();
  }
  async getOneRegister(id) {
    return database[this.nameOfModel].findOne({
      where: { id: Number(id) },
    });
  }
  async createRegister(data) {
    return database[this.nameOfModel].create(data);
  }
  async updateRegister(updateData, id, transaction = {}) {
    return database[this.nameOfModel].update(
      updateData,
      { where: { id: id } },
      transaction
    );
  }
  async updateRegisters(updateData, where, transaction = {}) {
    return database[this.nameOfModel].update(
      updateData,
      { where: { ...where } },
      transaction
    );
  }
  async deleteRegister(id) {
    return database[this.nameOfModel].destroy({
      where: { id: Number(id) },
    });
  }
  async restoreRegister(id) {
    return database[this.nameOfModel].restore({
      where: { id: Number(id) },
    });
  }
}

module.exports = Services;
