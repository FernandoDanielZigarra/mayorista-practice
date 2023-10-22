const express = require('express');
const router = express.Router();
const { upload } = require('../middlewares/uploadMiddleware');
const validateProductData = require('../middlewares/validationMiddleware');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
<<<<<<< HEAD
router.post('/products', upload.single('image'), validateProductData, createProduct);
=======




router.post('/products', upload.array('images', '5'), validateProductData, createProduct);
>>>>>>> 92470d05b7359c36bd6ba58ac093d1d0a2d7229b
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;
