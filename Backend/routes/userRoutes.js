const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, loginUser } = require('../controllers/userControllers');
const authenticate = require('../middlewares/authMiddleware');

// Rutas públicas (sin autenticación)
router.post('/login', loginUser); // Endpoint para iniciar sesión

// Rutas protegidas (requieren autenticación)
// router.use(authenticate); // Comenta temporalmente el uso del middleware

// Nueva ruta que requiere autenticación (cuando estés listo)
router.get('/', authenticate, getAllUsers); // Obtener todos los usuarios
router.post('/', authenticate, createUser); // Crear un nuevo usuario

module.exports = router;
