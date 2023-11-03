const User = require('../models/User');
const generateJWT = require('../utils/generateJWT');




const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Todos los campos son obligatorios");
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Usuario inexistente");
    }

    const isPasswordValid = await user.checkedPassword(password);

    if (isPasswordValid) {
      const token = generateJWT({ user });
      return res.status(200).json({
        ok: true,
        message: "inicio de sesion exitoso",
        token
      });
    } else {
      throw new Error("Credenciales inválidas");
    }
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      message: error.message || "Upss, Credenciales inválidas"
    });
  }
};
const createUser = async (req, res) => {
  try {
    const { email, password, isAdmin } = req.body;
    const user = new User({ email, password, isAdmin });
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'El correo electrónico ya está en uso' });
    }
    await user.save();
    res.status(201).json({ message: 'Usuario creado exitosamente', user });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario', error: error.message });
  }
};


const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json({ message: 'Usuario eliminado exitosamente', user });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario', error: error.message });
  }
};



module.exports = { createUser, deleteUser, login };
