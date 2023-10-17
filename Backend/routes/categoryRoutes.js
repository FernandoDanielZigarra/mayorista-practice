const express = require('express');
const router = express.Router();
const { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory,getProductsByCategory } = require('../controllers/categoryController');
const { validateCategoryData, handleValidationErrors } = require('../middlewares/categoryValidationMiddleware');

router.get('/categories', getAllCategories);
router.get('/categories/:id', getCategoryById);
router.get('/categories/categoria/:categoriaID', getProductsByCategory);
router.post('/categories', validateCategoryData(), handleValidationErrors, createCategory);
router.put('/categories/:id', validateCategoryData(), handleValidationErrors, updateCategory);
router.delete('/categories/:id', deleteCategory);

module.exports = router;
