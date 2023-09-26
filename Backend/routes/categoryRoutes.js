const express = require('express');
const router = express.Router();
const { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');
const { validateCategoryData, handleValidationErrors } = require('../middlewares/categoryMiddlewares');

router.get('/categories', getAllCategories);
router.get('/categories/:id', getCategoryById);
router.post('/categories', validateCategoryData(), handleValidationErrors, createCategory);
router.put('/categories/:id', validateCategoryData(), handleValidationErrors, updateCategory);
router.delete('/categories/:id', deleteCategory);

module.exports = router;
