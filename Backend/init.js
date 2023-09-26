const connectDB = require('./config/db');
const User = require('./models/User');

async function initialize() {
    try {
        await connectDB(); // Conectar a la base de datos

        const existingAdmin = await User.findOne({ isAdmin: true });

        if (!existingAdmin) {
            const user = new User({ name: 'Admin', email: 'admin@example.com', password: 'password123', isAdmin: true });
            await user.save();
            console.log('Usuario administrador creado.');
        } else {
            console.log('Ya existe un usuario administrador.');
        }
    } catch (error) {
        console.error('Error al inicializar:', error.message);
    }
}

module.exports = initialize;
