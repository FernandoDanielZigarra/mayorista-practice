const express = require('express');
const router = express.Router();
const { upload } = require('../middlewares/uploadMiddleware');
const validateProductData = require('../middlewares/validationMiddleware');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct,deleteAllProducts } = require('../controllers/productController');

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', upload.array('images', '5'), validateProductData, createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/deleteAll',deleteAllProducts)
router.delete('/products/:id', deleteProduct);
module.exports = router;
