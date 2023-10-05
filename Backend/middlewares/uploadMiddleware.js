const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        callback(null, "Product" + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage
});
module.exports = upload