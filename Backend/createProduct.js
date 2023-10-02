const mongoose = require('mongoose');
const Product = require('./models/Products');

const connectDB = require('./config/db'); 

// Conecta a la base de datos
connectDB();

// Crea un producto temporal
const tempProduct = new Product({
  name: 'Gaseosa Coca Cola Original 2,25lts Pack x 8',
  description: 'Bon o Bon Argentino Clásico, es un bombón de chocolate con leche y oblea relleno de crema de maní, pensado para todos, adultos y niños, para regalar y para regalarse.',
  offers: false,
  price: 7693,
  category_id: '6515de2f9657ecc73aa7fdf4'
});

let tempProductId;

tempProduct.save()
  .then(savedProduct => {
    tempProductId = savedProduct._id;
    console.log(`Producto Temporal creado con ID: ${tempProductId}`);
  })
  .catch(error => {
    console.error('Error al guardar el producto temporal:', error);
  })
  .finally(() => {
    mongoose.connection.close(); // Cierra la conexión a la base de datos
  });
