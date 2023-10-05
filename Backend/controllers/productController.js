const Product = require('../models/Products');
const Image = require('../models/Image');
module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find({}).populate("image","name").populate("category_id","name").select('-__v');
      
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
      const { name, description, offers, price, category_id} = req.body;
      
      const newImage = new Image({
        name: req.file.filename,
      });
      await newImage.save();

      const product = new Product({
        name,
        description,
        offers,
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

