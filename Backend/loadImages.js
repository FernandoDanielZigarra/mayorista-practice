const mongoose = require('mongoose');
const fs = require('fs');

const Image = require('./models/Image'); // Importa tu modelo de imagen

// Define la ruta donde se encuentran las imágenes
const imagesDirectory = './images';

fs.readdir(imagesDirectory, async (err, files) => {
  if (err) {
    console.error('Error al leer el directorio de imágenes:', err);
    return;
  }

  for (const file of files) {
    const imagePath = `${imagesDirectory}/${file}`;

    // Crea un nuevo documento de imagen
    const image = new Image({
      name: file, // Usa el nombre del archivo como nombre de la imagen
      product_id: '6516e8ea66fab4988799bbc9', // Reemplaza con el ID del producto asociado
    });

    try {
      await image.save();
      console.log(`Imagen '${file}' guardada correctamente.`);
    } catch (error) {
      console.error(`Error al guardar la imagen '${file}':`, error);
    }
  }
});

