const { CategoriesServices } = require("../services");
const categoryServices = new CategoriesServices();

class CategoryController {
  static async getAllCategories(req, res) {
    try {
      const allCategories = await categoryServices.getAllRegisters();
      return res.status(200).json(allCategories);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getCategory(req, res) {
    const { id } = req.params;
    try {
      const category = await categoryServices.getOneRegister(id);
      return res.status(200).json(category);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createCategory(req, res) {
    const newCategory = req.body;
    try {
      const newCategoryCreated = await categoryServices.createRegister(
        newCategory
      );
      return res.status(200).json(newCategoryCreated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateCategory(req, res) {
    const { id } = req.params;
    const newInfoCategory = req.body;

    try {
      await categoryServices.updateRegister(newInfoCategory, id);
      const updatedCategory = await categoryServices.getOneRegister(id);
      return res.status(200).json(updatedCategory);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteCategory(req, res) {
    const { id } = req.params;
    try {
      await categoryServices.deleteRegister(id);
      return res.status(200).json({ message: `id ${id} deleted` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restoreCategory(req, res) {
    const { id } = req.params;
    try {
      await categoryServices.restoreRegister(id);
      return res.status(200).json({ message: `id ${id} restored` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = CategoryController;
