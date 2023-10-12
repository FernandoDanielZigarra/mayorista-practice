const Product = require('../models/Products');
const Image = require('../models/Image');
const path = require('path')
const { uploadFile } = require('../utils/utilsFirebase');



module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find({}).populate("image", "urlImage").populate("category_id", "name").select('-__v');

      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createProduct: async (req, res) => {
    try {
      const { name, description, discount, price, category_id } = req.body;
      const fileName = `${"Product" + '-' + Date.now() + path.extname(req.file.originalname)}`
      const uploadImage = await uploadFile(req.file, "product", fileName);

      const newImage = new Image({
        filename: fileName,
        urlImage: uploadImage,
      });
      await newImage.save();

      const product = new Product({
        name,
        description,
        discount,
        price,
        category_id,
        image: newImage._id
      });
      await product.save()
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },


  updateProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

