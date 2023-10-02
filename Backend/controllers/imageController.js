const fs = require('fs');
const Image = require('../models/Image');

const imagePath = './images'; // Ruta de la imagen
const productId = '6516e8ea66fab4988799bbc9'; // Asegúrate de reemplazar con el ID correcto

const image = new Image({
  name: 'Leche-serenisima',
  product_id: productId
});

fs.readFile(imagePath, async (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  image.data = data;

  try {
    await image.save();
    console.log('Imagen guardada correctamente.');
  } catch (error) {
    console.error('Error al guardar la imagen:', error);
  }
});
