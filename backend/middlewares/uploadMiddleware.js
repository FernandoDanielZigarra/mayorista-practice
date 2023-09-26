const multer = require('multer');

// Configura el almacenamiento y el nombre del archivo
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Define el directorio donde se guardarán los archivos subidos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Define el nombre del archivo
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
