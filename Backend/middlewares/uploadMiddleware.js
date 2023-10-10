const multer = require('multer');
const path = require('path');
const firebase = require('firebase/app');
require('firebase/storage');
const firebaseConfig = require('../config/firebase.js');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    callback(null, "Product" + '-' + Date.now() + path.extname(file.originalname));
  }
});

firebase.initializeApp(firebaseConfig);

const storageRef = firebase.storage().ref();

module.exports = { upload, storageRef };
