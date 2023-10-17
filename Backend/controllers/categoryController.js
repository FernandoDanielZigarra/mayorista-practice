const Category = require('../models/Category');
const Product = require ('../models/Product');

module.exports = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getCategoryById: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getProductsByCategory: async (req, res) => {
    try {
      const categoriaID = req.params.categoriaID;
      const productos = await Product.find({ category_id: categoriaID }).populate("image", "urlImage").populate("category_id", "name").select('-__v');

      if (productos.length > 0) {
        res.json(productos);
      } else {
        res.status(404).json({ mensaje: 'No se encontraron productos en esta categoría.' });
      }
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al buscar productos.' });
    }
  },

  createCategory: async (req, res) => {
    try {
      const category = new Category(req.body);
      await category.save();
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateCategory: async (req, res) => {
    try {
      const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteCategory: async (req, res) => {
    try {
      const category = await Category.findByIdAndDelete(req.params.id);
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
