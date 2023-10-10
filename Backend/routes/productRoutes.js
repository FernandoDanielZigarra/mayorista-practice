const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');
const validateProductData = require('../middlewares/validationMiddleware');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);

router.post('/products', upload.single('file'), validateProductData,createProduct);

router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;
