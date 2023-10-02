const Product = require('../models/Products');
const Image = require('../models/Image');
module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
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
   

      // Guardar el producto
      /* const product = new Product({
        name,
        description,
        offers,
        price,
        category_id
      });
      await product.save();
 */
      // Asociar imágenes con el producto
     
      
     /*  const newImage = new Image({
        name: image.originalname, // Puedes ajustar el nombre según tus necesidades
        product_id: product._id
      }); */
      
      /* await newImage.save();
      product.images.push(newImage._id); */


      res.json(req.body);
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

