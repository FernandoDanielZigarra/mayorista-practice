const express = require('express');
const router = express.Router();
const { createUser, deleteUser, login } = require('../controllers/userControllers'); 

// Rutas para crear, borrar usuarios y realizar inicio de sesión
router.post('/usuarios', createUser);
router.delete('/usuarios/:id', deleteUser);
router.post('/login', login);

module.exports = router;
