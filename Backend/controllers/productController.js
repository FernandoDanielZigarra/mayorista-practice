const Product = require('../models/Product');
const Image = require('../models/Image');
const path = require('path')
const { uploadFile } = require('../utils/utilsFirebase');
const { deleteFile } = require('../utils/deleteFirebase')


module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find({}).populate("images", "urlImage").populate("category_id", "name").select('-__v');

      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id).populate("images", "urlImage").populate("category_id", "name").select('-__v');
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createProduct: async (req, res) => {
    try {
      const { name, description, discount, price, fair_prices, price_per_unit, EAN, type, category_id } = req.body;
      const imageDefault = "https://firebasestorage.googleapis.com/v0/b/react-firebase-example-66176.appspot.com/o/product%2Fproduct-image-default.jpg?alt=media&token=90e8c25b-f59b-4142-b424-2f332f2b47a0&_gl=1*129ue9z*_ga*MTQzNjkxNDYyMi4xNjk0MDkzODkx*_ga_CW55HF8NVT*MTY5NzA1NDkxNS4yOC4xLjE2OTcwNTcxNjguNjAuMC4w"

      const images = [];

      if (req.files) {
        for (const file of req.files) {
          const fileName = `${"Product" + '-' + Date.now() + path.extname(file.originalname)}`;
          const uploadImage = await uploadFile(file, "product", fileName);

          const newImage = new Image({
            filename: fileName,
            urlImage: uploadImage,
          });

          await newImage.save();
          images.push(newImage._id);
        }
      } else {
        const defaultImage = new Image({
          filename: "product-image-default.jpg",
          urlImage: imageDefault,
        });

        await defaultImage.save();
        images.push(defaultImage._id);
      }

      const product = new Product({
        name,
        description,
        discount,
        price,
        fair_prices,
        price_per_unit,
        EAN,
        type,
        category_id,
        images,
      });

      await product.save();
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const { name, description, discount, price, fair_prices, price_per_unit, EAN, type, category_id } = req.body;
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
        name,
        description,
        discount,
        price,
        fair_prices,
        price_per_unit,
        EAN,
        type,
        category_id
      }, { new: true });

      if (updatedProduct) {
        res.json({
          message: 'Producto actualizado correctamente',
          product: updatedProduct
        });
      } else {
        res.status(404).json({ message: 'No se encontró el producto' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const productId = req.params.id;

      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }

      for (const image of product.images) {
        await deleteFile('product', image.filename);
      }

      const deletedProduct = await Product.findByIdAndDelete(productId);

      if (!deletedProduct) {
        return res.status(404).json({ message: 'Producto no encontrado en la base de datos' });
      }

      product.images = [];

      await product.save();

      res.json({ message: 'Producto y imágenes asociadas eliminadas correctamente' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteAllProducts: async (req, res) => {
    try {
      await Product.deleteMany({}); 
      res.json({ message: 'Todos los productos han sido eliminados' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

