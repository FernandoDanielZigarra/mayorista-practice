const multer = require('multer');
const firebaseConfig = require('../config/firebase');
const { initializeApp } = require('firebase/compat/app');
const { getStorage } = require('firebase/storage')


const app = initializeApp(firebaseConfig)
const storage = getStorage(app);


const upload = multer({ storage: multer.memoryStorage() });


module.exports = { upload, storage };
