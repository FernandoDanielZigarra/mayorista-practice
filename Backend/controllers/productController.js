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
      const { name, description, offers, price, category_id } = req.body;
      const imageDefault = "https://firebasestorage.googleapis.com/v0/b/react-firebase-example-66176.appspot.com/o/product%2Fproduct-image-default.jpg?alt=media&token=90e8c25b-f59b-4142-b424-2f332f2b47a0&_gl=1*129ue9z*_ga*MTQzNjkxNDYyMi4xNjk0MDkzODkx*_ga_CW55HF8NVT*MTY5NzA1NDkxNS4yOC4xLjE2OTcwNTcxNjguNjAuMC4w"

      const fileName = req.file ? `${"Product" + '-' + Date.now() + path.extname(req.file.originalname)}` : "product-image-default.jpg"
      const uploadImage = req.file ? await uploadFile(req.file, "product", fileName) : imageDefault

      const newImage = new Image({
        filename: fileName,
        urlImage: uploadImage,
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

