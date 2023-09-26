const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, loginUser } = require('../controllers/userControllers');
const authenticate = require('../middlewares/authMiddleware');

// Rutas públicas (sin autenticación)
router.post('/login', loginUser); // Endpoint para iniciar sesión

// Rutas protegidas (requieren autenticación)
router.use(authenticate); // Aplica el middleware de autenticación a las rutas siguientes
router.get('/', getAllUsers); // Obtener todos los usuarios
router.post('/', createUser); // Crear un nuevo usuario

module.exports = router;
